'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const VIDEO_ID = 'VDax3AXMIbs'

function FadeUp({
  children,
  delay = 0,
  style,
}: {
  children: React.ReactNode
  delay?: number
  style?: React.CSSProperties
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease, delay }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export default function Hero() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load the IFrame API script once
    if (!document.getElementById('yt-iframe-api')) {
      const tag = document.createElement('script')
      tag.id = 'yt-iframe-api'
      tag.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(tag)
    }

    const initPlayer = () => {
      if (!containerRef.current) return
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
          showinfo: 0,
        },
        events: {
          onStateChange: (e: { data: number }) => {
            // Restart when the video ends (state 0 = ended)
            if (e.data === 0) {
              playerRef.current?.seekTo(0, true)
              playerRef.current?.playVideo()
            }
          },
        },
      })
    }

    if (window.YT?.Player) {
      initPlayer()
    } else {
      // Queue behind any existing callback
      const prev = window.onYouTubeIframeAPIReady
      window.onYouTubeIframeAPIReady = () => {
        prev?.()
        initPlayer()
      }
    }

    return () => {
      playerRef.current?.destroy()
      playerRef.current = null
    }
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '640px',
        overflow: 'hidden',
        background: 'var(--black)',
      }}
    >
      {/* YouTube background — controlled via IFrame API (no playlist → no nav controls) */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '177.78vh',
          height: '100vh',
          minWidth: '100%',
          minHeight: '56.25vw',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      >
        <div
          ref={containerRef}
          style={{ width: '100%', height: '100%' }}
        />
        {/* Blocks any residual pointer events from reaching the iframe */}
        <div style={{ position: 'absolute', inset: 0 }} />
      </div>

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.4) 50%, rgba(10,10,10,0.2) 100%),
            linear-gradient(to right, rgba(10,10,10,0.6) 0%, transparent 60%)
          `,
        }}
      />

      {/* Content anchored bottom-left */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          padding: '0 64px 88px',
          maxWidth: '880px',
        }}
        className="hero-content"
      >
        {/* Eyebrow */}
        <FadeUp delay={0.2} style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              className="pulse-dot"
              style={{ color: 'var(--accent)', fontSize: '8px' }}
            >
              ●
            </span>
            <span
              className="eyebrow-line"
              style={{
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '3.5px',
                textTransform: 'uppercase',
                color: 'var(--accent)',
              }}
            >
              Issue 24 — Now Live
            </span>
          </div>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.35} style={{ marginBottom: '28px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-oswald), sans-serif',
              fontSize: 'clamp(48px, 6vw, 96px)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-1.5px',
              textTransform: 'uppercase',
              color: 'var(--white)',
            }}
          >
            Beyond the Pitch
            <br />
            <span style={{ color: 'var(--accent)' }}>Into the Story</span>
          </h1>
        </FadeUp>

        {/* Sub */}
        <FadeUp delay={0.5} style={{ marginBottom: '40px' }}>
          <p
            style={{
              fontFamily: 'var(--font-barlow), sans-serif',
              fontSize: '16px',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'rgba(245,243,238,0.7)',
              maxWidth: '520px',
            }}
          >
            After90 is a digital sports magazine dedicated to the culture,
            stories, and passion that live beyond the game — bringing fans
            closer to sport through premium storytelling and fresh perspectives.
          </p>
        </FadeUp>

        {/* Buttons */}
        <FadeUp delay={0.65}>
          <div className="hero-btns" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="#photographs"
              className="btn-arrow"
              style={{
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                background: 'var(--accent)',
                color: 'var(--black)',
                padding: '14px 28px',
                borderRadius: '2px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent-hover)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent)')
              }
            >
              READ CHRONICLE <span className="arrow">→</span>
            </a>
            <a
              href="#newsletter"
              className="btn-arrow"
              style={{
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                background: 'transparent',
                color: 'var(--white)',
                padding: '14px 28px',
                borderRadius: '2px',
                border: '1px solid rgba(245,243,238,0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'border-color 0.2s ease, background 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'rgba(245,243,238,0.6)'
                el.style.background = 'rgba(245,243,238,0.05)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'rgba(245,243,238,0.3)'
                el.style.background = 'transparent'
              }}
            >
              REACH OUT
            </a>
          </div>
        </FadeUp>
      </div>

      <style>{`
        #${VIDEO_ID}-player iframe,
        .hero-bg iframe {
          pointer-events: none !important;
        }
        @media (max-width: 768px) {
          .hero-content { padding: 0 24px 64px !important; max-width: 100% !important; }
        }
        @media (max-width: 480px) {
          .hero-content { padding: 0 16px 48px !important; }
          .hero-content h1 { font-size: clamp(36px, 10vw, 56px) !important; letter-spacing: -0.5px !important; }
          .hero-content p { font-size: 14px !important; }
          .hero-btns { flex-direction: column; gap: 12px !important; }
          .hero-btns a { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  )
}
