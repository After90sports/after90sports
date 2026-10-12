import { serveAlbumPhoto } from '@/lib/albumImages'

export const dynamic = 'force-dynamic'

// Size lives in the path, not a query string: Hostinger's CDN strips query strings.
export async function GET(_req: Request, { params }: { params: Promise<{ path: string[] }> }) {
  return serveAlbumPhoto((await params).path, 'thumb')
}
