'use client'

import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export default function AboutCTA() {
  return (
    <section
      style={{
        background: 'var(--gray-900)',
        padding: '160px 64px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
      className="about-cta-section"
    >
      {/* Top accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(155,222,28,0.3), transparent)',
        }}
      />


      <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
            <span style={{ display: 'inline-block', width: '32px', height: '1px', background: 'var(--accent)' }} />
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
              Work With Us
            </span>
            <span style={{ display: 'inline-block', width: '32px', height: '1px', background: 'var(--accent)' }} />
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: 'clamp(40px, 6vw, 88px)',
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: '-2px',
              textTransform: 'uppercase',
              color: 'var(--white)',
              marginBottom: '28px',
            }}
          >
            Have a story
            <br />
            <span style={{ color: 'var(--accent)' }}>worth telling?</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '17px',
              fontWeight: 500,
              lineHeight: 1.5,
              color: 'rgba(245,243,238,0.55)',
              marginBottom: '48px',
            }}
          >
            We partner with brands, athletes, event organisers, and publishers
            who share our belief in premium sports storytelling. If that sounds
            like you, let&apos;s talk.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="mailto:reach@afterninetysports.com"
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '13px',
                fontWeight: 900,
                letterSpacing: '0.3px',
                textTransform: 'uppercase',
                background: 'var(--accent)',
                color: 'var(--black)',
                padding: '16px 36px',
                borderRadius: '2px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent-hover)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent)')
              }
            >
              REACH OUT <span style={{ display: 'inline-block', transition: 'transform 0.25s ease' }}>→</span>
            </a>
            <a
              href="https://medium.com/@afterninetygh"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '13px',
                fontWeight: 900,
                letterSpacing: '0.3px',
                textTransform: 'uppercase',
                background: 'transparent',
                color: 'var(--white)',
                padding: '16px 36px',
                borderRadius: '2px',
                border: '1px solid rgba(245,243,238,0.2)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'border-color 0.2s ease',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.borderColor =
                  'rgba(245,243,238,0.5)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.borderColor =
                  'rgba(245,243,238,0.2)')
              }
            >
              READ OUR WORK →
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-cta-section { padding: 100px 24px !important; }
        }
        @media (max-width: 640px) {
          .about-cta-section { padding: 80px 16px !important; }
          .about-cta-section a { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  )
}
