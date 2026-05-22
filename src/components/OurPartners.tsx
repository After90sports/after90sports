'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { partners, Partner } from '@/lib/partners'

const Icons: Record<Partner['icon'], React.ReactNode> = {
  camera: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
  document: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  ),
  video: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
}

export default function OurPartners() {
  return (
    <section
      id="editions"
      style={{
        padding: '100px 64px',
        background: 'var(--black)',
      }}
      className="partners-section"
    >
      {/* Header */}
      <div style={{ marginBottom: '48px' }}>
        <p
          className="eyebrow-line"
          style={{
            fontFamily: 'var(--font-barlow-condensed), sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '3.5px',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '16px',
          }}
        >
          OUR PARTNERS
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-oswald), sans-serif',
            fontSize: 'clamp(32px, 4vw, 56px)',
            fontWeight: 400,
            lineHeight: 1.1,
            textTransform: 'uppercase',
            letterSpacing: '-0.5px',
            color: 'var(--white)',
          }}
        >
          Who We Work With
        </h2>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '8px',
        }}
        className="partners-grid"
      >
        {partners.map((partner, i) => (
          <PartnerCard key={partner.name} partner={partner} delay={i * 0.07} />
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .partners-section { padding: 80px 24px !important; }
          .partners-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .partners-section { padding: 60px 16px !important; }
          .partners-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function PartnerCard({ partner, delay }: { partner: Partner; delay: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--gray-800)' : 'var(--gray-900)',
        border: `1px solid rgba(255,255,255,${hovered ? 0.08 : 0.04})`,
        borderRadius: '2px',
        padding: '48px 40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: '56px',
          height: '56px',
          border: `1px solid ${hovered ? 'var(--accent)' : 'rgba(155,222,28,0.2)'}`,
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--accent)',
          padding: '14px',
          transition: 'border-color 0.3s ease',
        }}
      >
        {Icons[partner.icon]}
      </div>

      {/* Name */}
      <h3
        style={{
          fontFamily: 'var(--font-oswald), sans-serif',
          fontSize: '24px',
          fontWeight: 400,
          lineHeight: 1,
          textTransform: 'uppercase',
          letterSpacing: '-0.3px',
          color: 'var(--white)',
        }}
      >
        {partner.name}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-barlow), sans-serif',
          fontSize: '13px',
          fontWeight: 300,
          lineHeight: 1.7,
          color: 'rgba(245,243,238,0.5)',
          flex: 1,
        }}
      >
        {partner.description}
      </p>

      {/* Tag */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          paddingTop: '4px',
        }}
      >
        <div
          style={{
            height: '1px',
            width: '12px',
            background: 'var(--accent)',
            opacity: 0.5,
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-barlow-condensed), sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--accent)',
          }}
        >
          {partner.tag}
        </span>
      </div>
    </motion.div>
  )
}

