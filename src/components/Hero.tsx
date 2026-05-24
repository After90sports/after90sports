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

const YT_ID = 'bclsHKzj7sk'
const YT_THUMB = `https://img.youtube.com/vi/${YT_ID}/maxresdefault.jpg`

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
        // Thumbnail shows instantly — no black flash while iframe loads
        backgroundImage: `url(${YT_THUMB})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* YouTube iframe — autoplays muted on top of the thumbnail */}
      <iframe
        title="After90 hero background"
        src={`https://www.youtube-nocookie.com/embed/${YT_ID}?autoplay=1&mute=1&loop=1&playlist=${YT_ID}&controls=0&disablekb=1&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&enablejsapi=0`}
        allow="autoplay; encrypted-media"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '177.78vh',
          height: '100vh',
          minWidth: '100%',
          minHeight: '56.25vw',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          pointerEvents: 'none',
        }}
      />

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
        {/* Headline */}
        <FadeUp delay={0.35} style={{ marginBottom: '28px' }} className="hero-headline">
          <h1
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-1px',
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
            AFTER90 is your trusted platform for authentic sports storytelling.
            We go beyond the game to uncover the human side of sport through
            compelling long-form content, powerful imagery, and film.
          </p>
        </FadeUp>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-content { padding: 0 24px 72px !important; max-width: 100% !important; }
.hero-headline { margin-bottom: 20px !important; }
          .hero-sub { margin-bottom: 36px !important; }
        }
        @media (max-width: 480px) {
          .hero-content { padding: 0 20px 64px !important; }
          .hero-content h1 { font-size: clamp(28px, 7vw, 40px) !important; letter-spacing: -0.5px !important; line-height: 1.08 !important; }
          .hero-content p { font-size: 14px !important; line-height: 1.7 !important; max-width: 100% !important; }
        }
      `}</style>
    </section>
  )
}
