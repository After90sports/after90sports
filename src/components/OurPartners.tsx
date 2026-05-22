'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

type Partner = {
  name: string
  logo: string
  /** Intrinsic pixel width — aspect-ratio hint for the browser, not rendered size */
  w: number
  /** Intrinsic pixel height — aspect-ratio hint for the browser, not rendered size */
  h: number
  /** Rendered height in px. Width scales automatically to preserve aspect ratio. */
  displayH: number
  /**
   * true  → convert to solid white via filter (logos that need to match the dark palette)
   * false → render in actual brand colours (RGBA PNG with transparent background)
   */
  white: boolean
}

/**
 * Order: EW crest | Accra 2026 | 3sme | Decathlon
 * White logos (Accra 2026, 3sme) sit in the centre positions.
 *
 * displayH is tuned so each logo has similar visual weight despite very
 * different aspect ratios:
 *  - EW   3304×3840  (portrait 0.86:1) →  72 px tall,  ~62 px wide  — actual colour
 *  - A2026 300×251   (sq-ish  1.20:1) →  60 px tall,  ~72 px wide  — white
 *  - 3sme 1214×276   (wide    4.40:1) →  32 px tall, ~141 px wide  — white
 *  - Deca  450×450   (square  1.00:1) → 102 px tall, ~102 px wide  — actual colour
 */
const partners: Partner[] = [
  { name: 'Eleven Wonders FC', logo: '/images/partners/eleven-wonders-fc.png', w: 3304, h: 3840, displayH: 72,  white: false },
  { name: 'Accra 2026',        logo: '/images/partners/accra-2026.png',         w: 300,  h: 251,  displayH: 60,  white: true  },
  { name: '3sme',              logo: '/images/partners/3sme.png',               w: 1214, h: 276,  displayH: 32,  white: true  },
  { name: 'Decathlon',         logo: '/images/partners/decathlon.png',          w: 450,  h: 450,  displayH: 204, white: false },
]

export default function OurPartners() {
  return (
    <section
      id="editions"
      style={{ padding: '40px 64px', background: 'var(--black)' }}
      className="partners-section"
    >
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease }}
        style={{ marginBottom: '40px', textAlign: 'center' }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '14px',
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
              fontWeight: 700,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            Our Partners
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '40px',
              height: '1px',
              background: 'var(--accent)',
            }}
          />
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: 'clamp(28px, 3.5vw, 48px)',
            fontWeight: 900,
            lineHeight: 1.05,
            textTransform: 'uppercase',
            letterSpacing: '-1px',
            color: 'var(--white)',
          }}
        >
          Brands &amp; Teams<br />
          <span style={{ color: 'var(--accent)' }}>We&#39;ve Worked With</span>
        </h2>
      </motion.div>

      {/* ── Logo row — height-normalised, all white ── */}
      <div
        className="partners-row"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          rowGap: '48px',
        }}
      >
        {partners.map((partner, i) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease, delay: i * 0.08 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.6,
              transition: 'opacity 0.25s ease',
            }}
            className="partner-cell"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={partner.w}
              height={partner.h}
              style={{
                height: `${partner.displayH}px`,
                width: 'auto',
                display: 'block',
                ...(partner.white
                  ? { filter: 'brightness(0) invert(1)' }
                  : {}),
              }}
              sizes="200px"
            />
          </motion.div>
        ))}
      </div>

      <style>{`
        .partner-cell:hover { opacity: 1 !important; }

        /* Tablet */
        @media (max-width: 1024px) {
          .partners-section { padding: 36px 32px !important; }
          .partners-row     { row-gap: 40px !important; }
        }

        /* Mobile — wrap to 2 × 2, cap large logos so they don't overflow */
        @media (max-width: 640px) {
          .partners-section  { padding: 32px 20px !important; }
          .partners-row      { row-gap: 36px !important; justify-content: space-around !important; }
          .partner-cell img  { max-height: 80px !important; }
        }
      `}</style>
    </section>
  )
}
