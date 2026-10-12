import { serveAlbumPhoto } from '@/lib/albumImages'

export const dynamic = 'force-dynamic'

export async function GET(_req: Request, { params }: { params: Promise<{ path: string[] }> }) {
  return serveAlbumPhoto((await params).path, 'full')
}
