'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const videos = [
  {
    id: 'A0i8ZspYpWY',
    src: 'https://www.youtube.com/embed/A0i8ZspYpWY?autoplay=1&rel=0&modestbranding=1',
    allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
  },
  {
    id: 'bDY7klbL2GQ',
    src: 'https://www.youtube.com/embed/bDY7klbL2GQ?autoplay=1&rel=0&modestbranding=1',
    allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
  },
  {
    id: 'VDax3AXMIbs',
    src: 'https://www.youtube.com/embed/VDax3AXMIbs?autoplay=1&start=12&rel=0&modestbranding=1',
    allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
  },
]

function VideoSlide({ video }: { video: typeof videos[0] }) {
  const [playing, setPlaying] = useState(false)
  const thumb = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`

  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, background: '#000' }}>
      {playing ? (
        <iframe
          src={video.src}
          allow={video.allow}
          allowFullScreen
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
          title={`After90 Video`}
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label="Play video"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            border: 'none', padding: 0, cursor: 'pointer', background: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {/* Thumbnail */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumb}
            alt="Video thumbnail"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {/* Dark overlay on hover handled by CSS */}
          <div className="play-overlay" style={{
            position: 'absolute', inset: 0,
            background: 'rgba(0,0,0,0.25)',
            transition: 'background 0.2s ease',
          }} />
          {/* Play button */}
          <div style={{
            position: 'relative', zIndex: 1,
            width: '64px', height: '64px', borderRadius: '50%',
            background: 'var(--accent)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'transform 0.2s ease',
          }}
            className="play-btn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--black)">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </button>
      )}
    </div>
  )
}

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(videos.length - 1, c + 1))

  // Mobile: one video fills ~88% of the viewport (peek of next)
  // Desktop: three videos side-by-side (33.333% each)
  const slideW = isMobile ? '88%' : '33.333%'
  const gapPx = 16

  return (
    <section
      style={{
        padding: '50px 0 50px 64px',
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
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '11px',
              fontWeight: 900,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '16px',
            }}
          >
            ON THE CHANNEL
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 900,
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
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '12px',
            fontWeight: 900,
            letterSpacing: '0.3px',
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
          animate={{ x: `calc(${current} * (-${slideW} - ${gapPx}px))` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex',
            gap: `${gapPx}px`,
          }}
        >
          {videos.map((video, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: `calc(${slideW} - ${gapPx / 2}px)`,
                borderRadius: '4px',
                overflow: 'hidden',
                background: 'var(--gray-900)',
              }}
            >
              <VideoSlide video={video} />
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
        button:hover .play-overlay { background: rgba(0,0,0,0.15) !important; }
        button:hover .play-btn { transform: scale(1.08); }

        @media (max-width: 1024px) {
          .video-section { padding: 40px 0 40px 24px !important; }
          .video-header { padding-right: 24px !important; flex-direction: column !important; align-items: flex-start !important; justify-content: flex-start !important; gap: 24px !important; }
          .video-controls { padding-right: 24px !important; }
        }
        @media (max-width: 640px) {
          .video-section { padding: 30px 0 30px 16px !important; }
          .video-header { padding-right: 16px !important; margin-bottom: 32px !important; }
          .video-header h2 { font-size: clamp(28px, 8vw, 48px) !important; }
          .video-controls { padding-right: 16px !important; margin-top: 20px !important; }
        }
      `}</style>
    </section>
  )
}
