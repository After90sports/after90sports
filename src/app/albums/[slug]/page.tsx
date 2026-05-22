import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AlbumGallery from '@/components/AlbumGallery'
import { albums, getAlbum, photoPath } from '@/lib/albums'

export function generateStaticParams() {
  return albums.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const album = getAlbum(slug)
  if (!album) return {}
  return {
    title: `${album.title} — After90 Photographs`,
    description: `${album.photos.length} photo${album.photos.length !== 1 ? 's' : ''} from ${album.title} — ${album.location}, ${album.date}. Photographed by Husseni Shamsudeen for After90.`,
    openGraph: {
      title: `${album.title} — After90`,
      description: `${album.location} · ${album.date}`,
      images: [{ url: album.coverImage, alt: album.title }],
    },
  }
}

export default async function AlbumPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const album = getAlbum(slug)

  if (!album) notFound()

  const photos = album.photos.map((p) => ({
    src: photoPath(album, p),
    caption: p.caption,
  }))

  return (
    <>
      <Nav />
      <main style={{ background: 'var(--black)', minHeight: '100vh' }}>

        {/* ── Hero / Header ─────────────────────────────────────────── */}
        <div
          style={{
            position: 'relative',
            height: 'clamp(340px, 45vw, 560px)',
            overflow: 'hidden',
          }}
        >
          {/* Cover image */}
          <Image
            src={album.coverImage}
            alt={album.title}
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            sizes="100vw"
          />
          {/* Gradient */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.25) 100%)',
            }}
          />

          {/* Text */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: 'clamp(24px, 4vw, 64px)',
            }}
          >
            {/* Back link */}
            <Link
              href="/#photographs"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.4px',
                textTransform: 'uppercase',
                color: 'rgba(245,243,238,0.5)',
                textDecoration: 'none',
                marginBottom: '20px',
              }}
            >
              ← Photographs
            </Link>

            {/* Tag */}
            <p
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '11px',
                fontWeight: 900,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '12px',
              }}
            >
              {album.tag}
            </p>

            {/* Title */}
            <h1
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: 'clamp(28px, 4.5vw, 60px)',
                fontWeight: 900,
                lineHeight: 1.08,
                textTransform: 'uppercase',
                letterSpacing: '-0.5px',
                color: 'var(--white)',
                maxWidth: '900px',
                marginBottom: '16px',
              }}
            >
              {album.title}
            </h1>

            {/* Meta */}
            <div
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.3px',
                textTransform: 'uppercase',
                color: 'rgba(245,243,238,0.45)',
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
              }}
            >
              <span>{album.location}</span>
              <span>·</span>
              <span>{album.date}</span>
              <span>·</span>
              <span>{album.photos.length} Photo{album.photos.length !== 1 ? 's' : ''}</span>
            </div>
          </div>
        </div>

        {/* ── Photo Grid ────────────────────────────────────────────── */}
        <div
          style={{
            padding: 'clamp(40px, 5vw, 80px) clamp(16px, 5vw, 64px)',
          }}
        >
          <AlbumGallery photos={photos} />
        </div>

      </main>
      <Footer />
    </>
  )
}
