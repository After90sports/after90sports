import { createReadStream } from 'node:fs'
import { mkdir, rename, stat } from 'node:fs/promises'
import path from 'node:path'
import { Readable } from 'node:stream'
import type { Sharp } from 'sharp'

export const dynamic = 'force-dynamic'

// Album photos are too large for git, so Hostinger builds never contain them.
// They live in a folder outside the build directory that survives deploys.
const ALBUMS_DIR = path.resolve(
  process.env.ALBUMS_DIR ??
    (process.env.NODE_ENV === 'production'
      ? '/home/u534542675/domains/afterninetysports.com/nodejs/public/images/albums'
      : path.join(process.cwd(), 'public/images/albums')),
)
const WEB_DIR = path.join(path.dirname(ALBUMS_DIR), 'albums-web')

const CONTENT_TYPES: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
}

const VARIANTS = {
  thumb: (img: Sharp) => img.resize({ width: 800, height: 800, fit: 'outside', withoutEnlargement: true }),
  full: (img: Sharp) => img.resize({ width: 2400, height: 2400, fit: 'inside', withoutEnlargement: true }),
}
type Variant = keyof typeof VARIANTS

// Shared hosting: resizing every photo of an album at once would exhaust memory.
const MAX_CONCURRENT_RESIZES = 2
let activeResizes = 0
const resizeQueue: (() => void)[] = []
const inFlight = new Map<string, Promise<string>>()

async function withResizeSlot<T>(fn: () => Promise<T>): Promise<T> {
  if (activeResizes >= MAX_CONCURRENT_RESIZES) await new Promise<void>((r) => resizeQueue.push(r))
  activeResizes++
  try {
    return await fn()
  } finally {
    activeResizes--
    resizeQueue.shift()?.()
  }
}

async function webCopy(original: string, originalMtime: number, variant: Variant): Promise<string> {
  const dest = path.join(WEB_DIR, variant, path.relative(ALBUMS_DIR, original))
  const existing = await stat(dest).catch(() => null)
  if (existing && existing.mtimeMs >= originalMtime) return dest

  let job = inFlight.get(dest)
  if (!job) {
    job = withResizeSlot(async () => {
      const { default: sharp } = await import('sharp')
      await mkdir(path.dirname(dest), { recursive: true })
      const tmp = `${dest}.${process.pid}.tmp`
      await VARIANTS[variant](sharp(original).rotate()).jpeg({ quality: 80, mozjpeg: true }).toFile(tmp)
      await rename(tmp, dest)
      return dest
    }).finally(() => inFlight.delete(dest))
    inFlight.set(dest, job)
  }
  return job
}

function notFound() {
  return new Response('Not found', { status: 404, headers: { 'Cache-Control': 'no-store' } })
}

export async function GET(req: Request, { params }: { params: Promise<{ path: string[] }> }) {
  const { path: segments } = await params
  const original = path.resolve(ALBUMS_DIR, ...segments)
  const ext = path.extname(original).toLowerCase()
  const contentType = CONTENT_TYPES[ext]

  if (!original.startsWith(ALBUMS_DIR + path.sep) || !contentType) return notFound()

  const originalInfo = await stat(original).catch(() => null)
  if (!originalInfo?.isFile()) return notFound()

  let filePath = original
  if (contentType === 'image/jpeg') {
    const variant: Variant = new URL(req.url).searchParams.get('size') === 'thumb' ? 'thumb' : 'full'
    filePath = await webCopy(original, originalInfo.mtimeMs, variant).catch((err) => {
      console.error(`Resize failed for ${original}:`, err)
      return original
    })
  }

  const info = filePath === original ? originalInfo : await stat(filePath)
  const stream = Readable.toWeb(createReadStream(filePath)) as ReadableStream
  return new Response(stream, {
    headers: {
      'Content-Type': contentType,
      'Content-Length': String(info.size),
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
