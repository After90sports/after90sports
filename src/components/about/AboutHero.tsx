'use client'

import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export default function AboutHero() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: 'var(--black)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* Background large text watermark */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'var(--font-oswald), sans-serif',
          fontSize: 'clamp(120px, 22vw, 320px)',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '-8px',
          color: 'rgba(255,255,255,0.03)',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          lineHeight: 1,
          pointerEvents: 'none',
        }}
      >
        AFTER90
      </div>

      {/* Diagonal accent line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          right: '15%',
          width: '1px',
          height: '100%',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(155,222,28,0.15) 40%, rgba(155,222,28,0.15) 60%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{ padding: '0 64px 100px', position: 'relative', zIndex: 1 }}
        className="about-hero-content"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '40px',
              height: '1px',
              background: 'var(--accent)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-barlow-condensed), sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '3.5px',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            Our Story
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.35 }}
          style={{
            fontFamily: 'var(--font-oswald), sans-serif',
            fontSize: 'clamp(52px, 7.5vw, 120px)',
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: '-2px',
            textTransform: 'uppercase',
            color: 'var(--white)',
            maxWidth: '900px',
            marginBottom: '40px',
          }}
        >
          Built for
          <br />
          <span style={{ color: 'var(--accent)' }}>the story</span>
          <br />
          tellers.
        </motion.h1>

        {/* Sub copy + meta row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.55 }}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '48px',
            maxWidth: '900px',
          }}
          className="about-hero-meta"
        >
          <p
            style={{
              fontFamily: 'var(--font-barlow), sans-serif',
              fontSize: '17px',
              fontWeight: 300,
              lineHeight: 1.75,
              color: 'rgba(245,243,238,0.6)',
              maxWidth: '480px',
            }}
          >
            After90 was born from a simple belief: the most compelling stories in
            sport rarely make the headlines. We exist to find them, tell them, and
            share them with the world.
          </p>

          {/* Scroll cue */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              flexShrink: 0,
            }}
            className="scroll-cue"
          >
            <span
              style={{
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'rgba(245,243,238,0.3)',
                writingMode: 'vertical-rl',
              }}
            >
              Scroll
            </span>
            <div
              style={{
                width: '1px',
                height: '48px',
                background: 'linear-gradient(to bottom, rgba(155,222,28,0.6), transparent)',
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom accent bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(155,222,28,0.25), transparent)',
        }}
      />

      <style>{`
        @media (max-width: 1024px) {
          .about-hero-content { padding: 0 24px 80px !important; }
          .about-hero-meta { flex-direction: column !important; align-items: flex-start !important; gap: 32px !important; }
        }
        @media (max-width: 640px) {
          .about-hero-content { padding: 0 16px 64px !important; }
          .about-hero-content h1 { letter-spacing: -1px !important; }
          .scroll-cue { display: none !important; }
        }
      `}</style>
    </section>
  )
}
