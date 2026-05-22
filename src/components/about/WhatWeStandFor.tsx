'use client'

import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const pillars = [
  {
    number: '01',
    title: 'Depth Over Speed',
    body: 'We take the time to get the story right. In a world of instant takes, we believe in the long read, the second interview, and the follow-up that everyone else skips.',
  },
  {
    number: '02',
    title: 'Africa First',
    body: 'Our home ground is the African continent. We cover its sports, its athletes, and its fans with the seriousness they deserve — not as a footnote, but as the main story.',
  },
  {
    number: '03',
    title: 'Visual Integrity',
    body: "Every photograph we publish is made with intent. Our imagery doesn't just illustrate — it tells its own story, holds its own weight, and earns its place on the page.",
  },
  {
    number: '04',
    title: 'Community First',
    body: 'After90 exists for the fans, the athletes, and the communities that live and breathe sport. We build for them, with them — not for clicks or algorithms.',
  },
]

export default function WhatWeStandFor() {
  return (
    <section
      style={{
        background: 'var(--black)',
        padding: '140px 64px',
      }}
      className="values-section"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease }}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'end',
          marginBottom: '80px',
          paddingBottom: '64px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}
        className="values-header"
      >
        <h2
          style={{
            fontFamily: 'var(--font-oswald), sans-serif',
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: '-1.5px',
            textTransform: 'uppercase',
            color: 'var(--white)',
          }}
        >
          What We
          <br />
          <span style={{ color: 'var(--accent)' }}>Stand For</span>
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-barlow), sans-serif',
            fontSize: '16px',
            fontWeight: 300,
            lineHeight: 1.8,
            color: 'rgba(245,243,238,0.5)',
          }}
        >
          These aren&apos;t just values on a page. They are the decisions we make
          every time we choose a story, frame a shot, or publish a word.
        </p>
      </motion.div>

      {/* Pillars */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease, delay: i * 0.07 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr 1fr',
              gap: '48px',
              padding: '40px 0',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              alignItems: 'center',
              transition: 'background 0.3s ease',
            }}
            className="pillar-row"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.paddingLeft = '16px'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.paddingLeft = '0'
            }}
          >
            {/* Number */}
            <span
              style={{
                fontFamily: 'var(--font-league-gothic), sans-serif',
                fontSize: '40px',
                lineHeight: 1,
                color: 'rgba(155,222,28,0.3)',
                letterSpacing: '-0.5px',
                transition: 'color 0.3s ease',
              }}
              className="pillar-num"
            >
              {pillar.number}
            </span>

            {/* Title */}
            <h3
              style={{
                fontFamily: 'var(--font-oswald), sans-serif',
                fontSize: 'clamp(20px, 2.2vw, 28px)',
                fontWeight: 500,
                lineHeight: 1.1,
                textTransform: 'uppercase',
                letterSpacing: '-0.3px',
                color: 'var(--white)',
              }}
            >
              {pillar.title}
            </h3>

            {/* Body */}
            <p
              style={{
                fontFamily: 'var(--font-barlow), sans-serif',
                fontSize: '14px',
                fontWeight: 300,
                lineHeight: 1.75,
                color: 'rgba(245,243,238,0.5)',
              }}
            >
              {pillar.body}
            </p>
          </motion.div>
        ))}
      </div>

      <style>{`
        .pillar-row {
          transition: padding-left 0.3s ease;
        }
        .pillar-row:hover .pillar-num {
          color: var(--accent) !important;
        }
        @media (max-width: 1024px) {
          .values-section { padding: 80px 24px !important; }
          .values-header { grid-template-columns: 1fr !important; gap: 24px !important; }
          .pillar-row { grid-template-columns: 56px 1fr 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 768px) {
          .pillar-row { grid-template-columns: 56px 1fr !important; gap: 16px !important; }
          .pillar-row p { grid-column: 2; margin-top: 6px; }
        }
        @media (max-width: 640px) {
          .values-section { padding: 64px 16px !important; }
          .pillar-row { padding: 28px 0 !important; }
        }
      `}</style>
    </section>
  )
}
