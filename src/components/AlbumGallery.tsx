'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from '@/components/Lightbox'

interface GalleryPhoto {
  src: string
  caption?: string
}

export default function AlbumGallery({ photos }: { photos: GalleryPhoto[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (photos.length === 0) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '80px 24px',
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: '14px',
          color: 'rgba(245,243,238,0.3)',
          letterSpacing: '0.3px',
          textTransform: 'uppercase',
        }}
      >
        Photos coming soon
      </div>
    )
  }

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '6px',
        }}
        className="album-grid"
      >
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            onClick={() => setLightboxIndex(i)}
            aria-label={`View photo ${i + 1}${photo.caption ? ': ' + photo.caption : ''}`}
            style={{
              position: 'relative',
              aspectRatio: '3/2',
              overflow: 'hidden',
              borderRadius: '2px',
              cursor: 'pointer',
              background: 'var(--gray-800)',
              border: 'none',
              padding: 0,
              display: 'block',
              width: '100%',
            }}
            className="album-thumb"
          >
            <Image
              src={photo.src}
              alt={photo.caption ?? `Photo ${i + 1}`}
              fill
              style={{
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
              }}
              className="album-thumb-img"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            {/* Hover overlay */}
            <div
              className="album-thumb-overlay"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0)',
                transition: 'background 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                className="album-thumb-icon"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(245,243,238,0)',
                  border: '1px solid rgba(245,243,238,0)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  fontSize: '18px',
                  color: 'rgba(245,243,238,0)',
                }}
              >
                ⊕
              </span>
            </div>
          </button>
        ))}
      </div>

      <style>{`
        .album-thumb:hover .album-thumb-img { transform: scale(1.06); }
        .album-thumb:hover .album-thumb-overlay { background: rgba(0,0,0,0.35) !important; }
        .album-thumb:hover .album-thumb-icon {
          background: rgba(245,243,238,0.15) !important;
          border-color: rgba(245,243,238,0.4) !important;
          color: rgba(245,243,238,0.9) !important;
        }
        @media (max-width: 640px) {
          .album-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 4px !important; }
        }
      `}</style>

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}
