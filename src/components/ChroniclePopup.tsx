'use client'

import { useEffect, useRef } from 'react'
import { Chronicle } from '@/lib/chronicles'

interface Props {
  chronicle: Chronicle
  anchorRect: DOMRect | null
  onClose: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export default function ChroniclePopup({
  chronicle,
  anchorRect,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  const popupRef = useRef<HTMLDivElement>(null)
  const POPUP_WIDTH = 380
  const POPUP_HEIGHT = 480

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!anchorRect) return null

  const viewportW = window.innerWidth
  const viewportH = window.innerHeight

  // Position to the right, flip left if needed
  let left = anchorRect.right + 16
  if (left + POPUP_WIDTH > viewportW - 16) {
    left = anchorRect.left - POPUP_WIDTH - 16
  }
  if (left < 16) left = 16

  // Vertical: align to row, clamp to viewport
  let top = anchorRect.top
  if (top + POPUP_HEIGHT > viewportH - 16) {
    top = viewportH - POPUP_HEIGHT - 16
  }
  if (top < 16) top = 16

  return (
    <div
      ref={popupRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: 'fixed',
        top,
        left,
        width: POPUP_WIDTH,
        background: 'var(--gray-800)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '4px',
        boxShadow: '0 40px 100px rgba(0,0,0,0.7)',
        zIndex: 2000,
        overflow: 'hidden',
        animation: 'popup-in 0.2s ease forwards',
      }}
    >
      {/* Header image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={chronicle.image}
        alt={chronicle.title}
        style={{
          width: '100%',
          aspectRatio: '16/9',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close preview"
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: 'rgba(10,10,10,0.7)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.15)',
          color: 'var(--white)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          lineHeight: 1,
          transition: 'background 0.2s ease',
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)')
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(10,10,10,0.7)')
        }
      >
        ×
      </button>

      {/* Body */}
      <div style={{ padding: '20px 20px 16px' }}>
        {/* Tag + date */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '12px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-barlow-condensed), sans-serif',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              border: '1px solid rgba(155,222,28,0.3)',
              padding: '3px 8px',
              borderRadius: '2px',
            }}
          >
            {chronicle.tag}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-barlow-condensed), sans-serif',
              fontSize: '10px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'rgba(245,243,238,0.35)',
            }}
          >
            {chronicle.date}
          </span>
        </div>

        {/* Title */}
        <h4
          style={{
            fontFamily: 'var(--font-oswald), sans-serif',
            fontSize: '18px',
            fontWeight: 500,
            lineHeight: 1.2,
            textTransform: 'uppercase',
            letterSpacing: '-0.3px',
            color: 'var(--white)',
            marginBottom: '12px',
          }}
        >
          {chronicle.title}
        </h4>

        {/* Excerpt */}
        <p
          style={{
            fontFamily: 'var(--font-barlow), sans-serif',
            fontSize: '13px',
            fontWeight: 300,
            lineHeight: 1.65,
            color: 'rgba(245,243,238,0.55)',
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            marginBottom: '16px',
          }}
        >
          {chronicle.excerpt}
        </p>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '12px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-barlow-condensed), sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'rgba(245,243,238,0.3)',
            }}
          >
            After90 Magazine
          </span>
          <a
            href={chronicle.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-arrow"
            style={{
              fontFamily: 'var(--font-barlow-condensed), sans-serif',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            Read Full Chronicle <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes popup-in {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
      `}</style>
    </div>
  )
}
