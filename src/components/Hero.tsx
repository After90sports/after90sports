'use client'

import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

function FadeUp({
  children,
  delay = 0,
  style,
  className,
}: {
  children: React.ReactNode
  delay?: number
  style?: React.CSSProperties
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease, delay }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
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
      {/* Local video background — autoplays instantly, no cover needed */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '177.78vh',
          height: '100vh',
          minWidth: '100%',
          minHeight: '56.25vw',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
          pointerEvents: 'none',
        }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

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
        <FadeUp delay={0.2} style={{ marginBottom: '24px' }} className="hero-eyebrow">
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
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '11px',
                fontWeight: 900,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                color: 'var(--accent)',
              }}
            >
              Issue 24 — Now Live
            </span>
          </div>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.35} style={{ marginBottom: '28px' }} className="hero-headline">
          <h1
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: 'clamp(48px, 6vw, 96px)',
              fontWeight: 900,
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
        <FadeUp delay={0.5} style={{ marginBottom: '40px' }} className="hero-sub">
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: 1.45,
              color: 'rgba(245,243,238,0.7)',
              maxWidth: '520px',
            }}
          >
            After90 is a sports digital magazine exploring the culture,
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
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '13px',
                fontWeight: 900,
                letterSpacing: '0.4px',
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
              href="mailto:reach@afterninetysports.com"
              className="btn-arrow"
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '13px',
                fontWeight: 900,
                letterSpacing: '0.4px',
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
        @media (max-width: 768px) {
          .hero-content { padding: 0 24px 72px !important; max-width: 100% !important; }
          .hero-eyebrow { margin-bottom: 20px !important; }
          .hero-headline { margin-bottom: 20px !important; }
          .hero-sub { margin-bottom: 36px !important; }
        }
        @media (max-width: 480px) {
          .hero-content { padding: 0 20px 64px !important; }
          .hero-content h1 { font-size: clamp(38px, 10vw, 60px) !important; letter-spacing: -1px !important; line-height: 1.05 !important; }
          .hero-content p { font-size: 14px !important; line-height: 1.7 !important; max-width: 100% !important; }
          .hero-btns { flex-direction: column !important; align-items: flex-start !important; gap: 10px !important; }
          .hero-btns a { padding: 13px 24px !important; font-size: 12px !important; }
        }
      `}</style>
    </section>
  )
}
