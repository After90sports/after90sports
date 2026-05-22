'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const videos = [
  {
    src: 'https://www.youtube.com/embed/A0i8ZspYpWY?rel=0&modestbranding=1&autoplay=1&mute=1&playsinline=1&enablejsapi=1',
    allow: 'autoplay; fullscreen; encrypted-media; picture-in-picture',
  },
  {
    src: 'https://www.youtube.com/embed/bDY7klbL2GQ?si=P2QRfMAEkAhbzBsf',
    allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
  },
  {
    src: 'https://www.youtube.com/embed/VDax3AXMIbs?si=x73_kVwA9XZ8o_IT&start=12',
    allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
  },
]

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(videos.length - 1, c + 1))

  return (
    <section
      style={{
        padding: '100px 0 100px 64px',
        background: 'var(--black)',
        overflow: 'hidden',
      }}
      className="video-section"
    >
      {/* Header */}
      <div
        style={{
          paddingRight: '64px',
          marginBottom: '48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
        className="video-header"
      >
        <div>
          <p
            className="eyebrow-line"
            style={{
              fontFamily: 'var(--font-barlow-condensed), sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '3.5px',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '16px',
            }}
          >
            ON THE CHANNEL
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-oswald), sans-serif',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 400,
              lineHeight: 1.1,
              textTransform: 'uppercase',
              letterSpacing: '-0.5px',
              color: 'var(--white)',
            }}
          >
            Watch Our
            <br />
            Latest Films
          </h2>
        </div>
        <a
          href="https://www.youtube.com/@after90"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-arrow"
          style={{
            fontFamily: 'var(--font-barlow-condensed), sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.7')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
        >
          View All <span className="arrow">→</span>
        </a>
      </div>

      {/* Slider */}
      <div style={{ overflow: 'hidden' }}>
        <motion.div
          animate={{ x: `calc(${current} * (-66.666% - 12px) + ${current === 0 ? 0 : 0}px)` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          {videos.map((video, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: 'calc(66.666% - 12px)',
                borderRadius: '4px',
                overflow: 'hidden',
                background: 'var(--gray-900)',
              }}
            >
              <div
                style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}
              >
                <iframe
                  src={video.src}
                  allow={video.allow}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                  title={`After90 Video ${i + 1}`}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Controls */}
      <div
        style={{
          paddingRight: '64px',
          marginTop: '32px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
        className="video-controls"
      >
        {/* Prev */}
        <button
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous video"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: current === 0 ? 'rgba(255,255,255,0.2)' : 'var(--white)',
            cursor: current === 0 ? 'not-allowed' : 'pointer',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s ease, color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            if (current !== 0)
              (e.currentTarget as HTMLButtonElement).style.background =
                'var(--accent)'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.background =
              'rgba(255,255,255,0.08)'
          }}
        >
          ←
        </button>

        {/* Dots */}
        <div style={{ display: 'flex', gap: '6px', flex: 1 }}>
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to video ${i + 1}`}
              style={{
                height: '2px',
                width: i === current ? '48px' : '32px',
                background: i === current ? 'var(--accent)' : 'rgba(255,255,255,0.2)',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '2px',
                transition: 'width 0.3s ease, background 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          disabled={current === videos.length - 1}
          aria-label="Next video"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.1)',
            color:
              current === videos.length - 1
                ? 'rgba(255,255,255,0.2)'
                : 'var(--white)',
            cursor:
              current === videos.length - 1 ? 'not-allowed' : 'pointer',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s ease, color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            if (current !== videos.length - 1)
              (e.currentTarget as HTMLButtonElement).style.background =
                'var(--accent)'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.background =
              'rgba(255,255,255,0.08)'
          }}
        >
          →
        </button>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .video-section { padding: 80px 0 80px 24px !important; }
          .video-header { padding-right: 24px !important; flex-direction: column; align-items: flex-start; gap: 24px; }
          .video-controls { padding-right: 24px !important; }
        }
      `}</style>
    </section>
  )
}
