'use client'

import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const pillars = [
  {
    number: '01',
    title: 'Depth Over Speed',
    body: 'We slow down to find the story beneath the performance. We choose narratives that last over ones that only trend.',
  },
  {
    number: '02',
    title: 'Africa First',
    body: 'We tell sport from an African perspective — rooted in its culture, its people, and its realities.',
  },
  {
    number: '03',
    title: 'Visual Integrity',
    body: 'Every image and frame we produce is honest, intentional, and worthy of the story it represents.',
  },
  {
    number: '04',
    title: 'Community First',
    body: 'Athletes, fans, and everyday voices shape what we do. Their stories guide our direction and define our purpose.',
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
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: 900,
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
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: 1.5,
            color: 'rgba(245,243,238,0.5)',
          }}
        >
          Africa is not an afterthought in the global sports conversation.
          It is central to it. And we tell it that way.
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
                fontFamily: 'var(--font-inter), sans-serif',
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
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: 'clamp(20px, 2.2vw, 28px)',
                fontWeight: 900,
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
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: 1.5,
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
