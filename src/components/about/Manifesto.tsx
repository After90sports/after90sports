'use client'

import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export default function Manifesto() {
  return (
    <section
      style={{
        background: 'var(--gray-900)',
        padding: '140px 64px',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="manifesto-section"
    >
      {/* Background number */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-2%',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: 'clamp(200px, 30vw, 420px)',
          lineHeight: 1,
          color: 'rgba(255,255,255,0.025)',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        90
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '56px' }}
        >
          <span style={{ display: 'inline-block', width: '40px', height: '1px', background: 'var(--accent)' }} />
          <span
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '11px',
              fontWeight: 900,
              letterSpacing: '0.2px',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            Our Manifesto
          </span>
        </motion.div>

        {/* Main quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          style={{ margin: 0 }}
        >
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: 'clamp(28px, 3.8vw, 54px)',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.5px',
              textTransform: 'uppercase',
              color: 'var(--white)',
              marginBottom: '48px',
            }}
          >
            Sport is identity.{' '}
            <span style={{ color: 'rgba(245,243,238,0.35)' }}>
              What we witness on pitches, tracks, and courts is only a fraction
              of the story. Beyond the performance lives the rest of it — the
              culture, the quiet struggles, the grit, and the lived experiences
              that shape who these athletes really are.
            </span>{' '}
            <span style={{ color: 'var(--accent)' }}>We don&apos;t just watch the game. We exist to tell that fuller story.</span>
          </p>
        </motion.blockquote>

        {/* Divider + secondary copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease, delay: 0.25 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            paddingTop: '48px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
          className="manifesto-grid"
        >
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: 1.5,
              color: 'rgba(245,243,238,0.55)',
            }}
          >
            We capture emotion through powerful imagery, bring depth through
            long-form writing and editorials, and document journeys through
            film — preserving the conversations and perspectives that get lost
            in the noise of the moment.
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .manifesto-section { padding: 100px 24px !important; }
          .manifesto-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
        @media (max-width: 640px) {
          .manifesto-section { padding: 72px 16px !important; }
        }
      `}</style>
    </section>
  )
}
