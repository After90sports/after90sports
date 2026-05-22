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
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Centred content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '0 64px',
          maxWidth: '960px',
          width: '100%',
        }}
        className="about-hero-content"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '32px',
          }}
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
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '11px',
              fontWeight: 900,
              letterSpacing: '0.3px',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            Our Story
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '40px',
              height: '1px',
              background: 'var(--accent)',
            }}
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.35 }}
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: 'clamp(52px, 8vw, 128px)',
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: '-3px',
            textTransform: 'uppercase',
            color: 'var(--white)',
            textAlign: 'center',
            marginBottom: '36px',
          }}
        >
          Built for
          <br />
          <span style={{ color: 'var(--accent)' }}>the storytellers.</span>
        </motion.h1>

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.55 }}
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '17px',
            fontWeight: 500,
            lineHeight: 1.5,
            color: 'rgba(245,243,238,0.55)',
            maxWidth: '520px',
            margin: '0 auto',
          }}
        >
          After90 was born from a simple belief: the most compelling stories in
          sport rarely make the headlines. We exist to find them, tell them, and
          share them with the world.
        </motion.p>
      </div>

      {/* Bottom accent bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background:
            'linear-gradient(to right, transparent, rgba(155,222,28,0.25), transparent)',
        }}
      />

      <style>{`
        @media (max-width: 1024px) {
          .about-hero-content { padding: 0 24px !important; }
        }
        @media (max-width: 640px) {
          .about-hero-content { padding: 0 16px !important; }
          .about-hero-content h1 { letter-spacing: -1.5px !important; }
        }
      `}</style>
    </section>
  )
}
