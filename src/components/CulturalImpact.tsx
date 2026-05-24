'use client'

import { motion } from 'framer-motion'

const stats = [
  { number: '15', label: 'Monthly Readers' },
  { number: '3', label: 'Published Stories' },
  { number: '4', label: 'Countries Reached' },
  { number: '5K+', label: 'Accumulated Views' },
]

export default function CulturalImpact() {
  return (
    <section
      style={{
        padding: '70px 64px 50px',
        background: 'var(--black)',
      }}
      className="cultural-impact"
    >
      {/* Header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '96px',
          alignItems: 'end',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          paddingBottom: '64px',
          marginBottom: '64px',
        }}
        className="impact-header"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: 'clamp(36px, 4.2vw, 60px)',
            fontWeight: 900,
            lineHeight: 1.1,
            textTransform: 'uppercase',
            letterSpacing: '-0.5px',
            color: 'var(--white)',
          }}
        >
          Built for the Culture,
          <br />
          Backed by Impact.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: 1.5,
            color: 'rgba(245,243,238,0.6)',
          }}
        >
          Rooted in African culture, our lenses, pens, and film are driven by
          the energy and stories that live beyond the game. We are redefining
          sports storytelling for a new generation of fans — crafting every
          narrative to connect with the culture, spark conversation, and leave
          a lasting impact.
        </motion.p>
      </div>

      {/* Stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
        className="stats-grid"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
            className="stat-item"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <span
              className="stat-number"
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: 'clamp(48px, 4.5vw, 72px)',
                fontWeight: 900,
                lineHeight: 0.95,
                color: 'var(--white)',
                flexShrink: 0,
                letterSpacing: '-1px',
              }}
            >
              {stat.number}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '11px',
                fontWeight: 900,
                letterSpacing: '0.3px',
                textTransform: 'uppercase',
                lineHeight: 1.4,
                color: 'rgba(245,243,238,0.55)',
              }}
            >
              {stat.label.split(' ').slice(0, -1).join(' ')}{stat.label.includes(' ') ? ' ' : ''}
              <span style={{ whiteSpace: 'nowrap' }}>
                {stat.label.split(' ').slice(-1)[0]}{' '}
                <span style={{ color: 'var(--accent)' }}>↑</span>
              </span>
            </span>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '48px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '48px',
        }}
      >
        <a
          href="#newsletter"
          className="btn-arrow"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '13px',
            fontWeight: 900,
            letterSpacing: '0.4px',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            border: '1px solid rgba(155,222,28,0.3)',
            borderRadius: '2px',
            padding: '14px 36px',
            background: 'transparent',
            transition: 'background 0.2s ease, border-color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = 'rgba(155,222,28,0.05)'
            el.style.borderColor = 'rgba(155,222,28,0.5)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = 'transparent'
            el.style.borderColor = 'rgba(155,222,28,0.3)'
          }}
        >
          LET&apos;S WORK TOGETHER <span className="arrow">→</span>
        </a>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .cultural-impact { padding: 40px 24px 24px !important; }
          .impact-header { grid-template-columns: 1fr !important; gap: 32px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
        }
        @media (max-width: 640px) {
          .cultural-impact { padding: 30px 16px 20px !important; }
          .impact-header { padding-bottom: 40px !important; margin-bottom: 40px !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; gap: 28px 16px !important; }
          .stat-item { flex-direction: column !important; align-items: flex-start !important; gap: 6px !important; }
          .stat-number { font-size: clamp(36px, 10vw, 52px) !important; }
        }
      `}</style>
    </section>
  )
}
