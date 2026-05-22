'use client'

import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const chapters = [
  {
    number: '01',
    heading: 'Where It All Started',
    body: `After90 began as a conversation between friends — journalists, photographers, and sports fans who felt African sport deserved a sharper, more honest lens. Too often, the coverage stopped at the scoreline. We wanted to go deeper.\n\nIn 2024, we launched with a simple premise: every event, every athlete, every tournament has a story worth telling. Not just for fans, but for anyone who cares about culture, identity, and what sport reveals about us as people.`,
    stat: { number: '2024', label: 'Year founded' },
  },
  {
    number: '02',
    heading: 'What We Have Built',
    body: `From the polo grounds of Accra to the athletics tracks of the African Championships, After90 has been on the ground — camera in hand, notebook open. We have published long-form chronicles, produced original video films, and built a community of readers who expect more than match reports.\n\nToday we reach over 25,000 readers monthly across Africa, Europe, and beyond, with a growing archive of premium sports storytelling unlike anything else on the continent.`,
    stat: { number: '25K+', label: 'Monthly readers' },
  },
]

export default function OurStory() {
  return (
    <section
      style={{
        background: 'var(--black)',
        padding: '140px 64px',
      }}
      className="story-section"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '96px',
        }}
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
          The Journey
        </span>
      </motion.div>

      {/* Chapters */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {chapters.map((ch, i) => (
          <motion.div
            key={ch.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease, delay: i * 0.1 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '80px',
              paddingTop: '64px',
              paddingBottom: '64px',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              alignItems: 'start',
            }}
            className="story-chapter"
          >
            {/* Left — Chapter label + stat */}
            <div style={{ position: 'sticky', top: '120px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: 'clamp(72px, 9vw, 128px)',
                  lineHeight: 0.9,
                  letterSpacing: '-2px',
                  color: 'rgba(155,222,28,0.12)',
                  marginBottom: '24px',
                }}
              >
                {ch.number}
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: 'clamp(22px, 2.8vw, 36px)',
                  fontWeight: 900,
                  lineHeight: 1.15,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.3px',
                  color: 'var(--white)',
                  marginBottom: '40px',
                }}
              >
                {ch.heading}
              </h2>

              {/* Stat */}
              <div
                style={{
                  display: 'inline-flex',
                  flexDirection: 'column',
                  gap: '6px',
                  borderLeft: '2px solid var(--accent)',
                  paddingLeft: '16px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '48px',
                    fontWeight: 900,
                    lineHeight: 1,
                    color: 'var(--accent)',
                    letterSpacing: '-1px',
                  }}
                >
                  {ch.stat.number}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '11px',
                    fontWeight: 900,
                    letterSpacing: '0.2px',
                    textTransform: 'uppercase',
                    color: 'rgba(245,243,238,0.4)',
                  }}
                >
                  {ch.stat.label}
                </span>
              </div>
            </div>

            {/* Right — body */}
            <div style={{ paddingTop: '16px' }}>
              {ch.body.split('\n\n').map((para, j) => (
                <p
                  key={j}
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '17px',
                    fontWeight: 500,
                    lineHeight: 1.5,
                    color: 'rgba(245,243,238,0.65)',
                    marginBottom: j < ch.body.split('\n\n').length - 1 ? '28px' : 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .story-section { padding: 80px 24px !important; }
          .story-chapter { grid-template-columns: 1fr !important; gap: 32px !important; }
          .story-chapter > div:first-child { position: static !important; }
        }
        @media (max-width: 640px) {
          .story-section { padding: 64px 16px !important; }
        }
      `}</style>
    </section>
  )
}
