'use client'

import { useEffect, useCallback, useState } from 'react'

interface Props {
  photos: { src: string; caption?: string }[]
  startIndex: number
  onClose: () => void
}

export default function Lightbox({ photos, startIndex, onClose }: Props) {
  const [current, setCurrent] = useState(startIndex)
  const [loaded, setLoaded] = useState(false)

  const prev = useCallback(() => {
    setLoaded(false)
    setCurrent((c) => (c > 0 ? c - 1 : photos.length - 1))
  }, [photos.length])

  const next = useCallback(() => {
    setLoaded(false)
    setCurrent((c) => (c < photos.length - 1 ? c + 1 : 0))
  }, [photos.length])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  // Touch swipe support
  useEffect(() => {
    let touchStartX = 0
    const onTouchStart = (e: TouchEvent) => { touchStartX = e.touches[0].clientX }
    const onTouchEnd = (e: TouchEvent) => {
      const diff = touchStartX - e.changedTouches[0].clientX
      if (Math.abs(diff) > 50) { if (diff > 0) { next() } else { prev() } }
    }
    document.addEventListener('touchstart', onTouchStart, { passive: true })
    document.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      document.removeEventListener('touchstart', onTouchStart)
      document.removeEventListener('touchend', onTouchEnd)
    }
  }, [prev, next])

  const photo = photos[current]

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9000,
        background: 'rgba(0,0,0,0.97)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'lb-fade 0.2s ease',
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.12)',
          color: 'rgba(245,243,238,0.8)',
          cursor: 'pointer',
          fontSize: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          transition: 'background 0.2s ease',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.15)')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)')}
      >
        ×
      </button>

      {/* Counter */}
      <div
        style={{
          position: 'absolute',
          top: '24px',
          left: '24px',
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: '12px',
          fontWeight: 900,
          letterSpacing: '0.3px',
          textTransform: 'uppercase',
          color: 'rgba(245,243,238,0.4)',
        }}
      >
        {current + 1} / {photos.length}
      </div>

      {/* Image — stop click propagation so clicking image doesn't close */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Loading skeleton */}
        {!loaded && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '2px',
              minWidth: '200px',
              minHeight: '150px',
            }}
          />
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.caption ?? 'After90 photograph'}
          onLoad={() => setLoaded(true)}
          style={{
            maxWidth: '90vw',
            maxHeight: '80vh',
            objectFit: 'contain',
            borderRadius: '2px',
            display: 'block',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.25s ease',
          }}
        />
      </div>

      {/* Caption */}
      {photo.caption && (
        <p
          onClick={(e) => e.stopPropagation()}
          style={{
            marginTop: '20px',
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '13px',
            fontWeight: 500,
            color: 'rgba(245,243,238,0.5)',
            textAlign: 'center',
            maxWidth: '600px',
            padding: '0 24px',
          }}
        >
          {photo.caption}
        </p>
      )}

      {/* Prev / Next arrows */}
      {photos.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous photo"
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(245,243,238,0.8)',
              cursor: 'pointer',
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.15)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.07)')}
          >
            ←
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next photo"
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(245,243,238,0.8)',
              cursor: 'pointer',
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.15)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.07)')}
          >
            →
          </button>
        </>
      )}

      <style>{`
        @keyframes lb-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
