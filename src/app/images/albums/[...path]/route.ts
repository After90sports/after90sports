import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import path from 'node:path'
import { Readable } from 'node:stream'

export const dynamic = 'force-dynamic'

// Album photos are too large for git, so Hostinger builds never contain them.
// They live in a folder outside the build directory that survives deploys.
const ALBUMS_DIR = path.resolve(
  process.env.ALBUMS_DIR ??
    (process.env.NODE_ENV === 'production'
      ? '/home/u534542675/domains/afterninetysports.com/nodejs/public/images/albums'
      : path.join(process.cwd(), 'public/images/albums')),
)

const CONTENT_TYPES: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
}

function notFound() {
  return new Response('Not found', { status: 404, headers: { 'Cache-Control': 'no-store' } })
}

export async function GET(_req: Request, { params }: { params: Promise<{ path: string[] }> }) {
  const { path: segments } = await params
  const filePath = path.resolve(ALBUMS_DIR, ...segments)
  const contentType = CONTENT_TYPES[path.extname(filePath).toLowerCase()]

  if (!filePath.startsWith(ALBUMS_DIR + path.sep) || !contentType) return notFound()

  const info = await stat(filePath).catch(() => null)
  if (!info?.isFile()) return notFound()

  const stream = Readable.toWeb(createReadStream(filePath)) as ReadableStream
  return new Response(stream, {
    headers: {
      'Content-Type': contentType,
      'Content-Length': String(info.size),
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
