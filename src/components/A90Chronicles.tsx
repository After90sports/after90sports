'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function A90Chronicles() {
  return (
    <section
      id="a90chronicles"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '720px',
        background: 'var(--black)',
      }}
      className="chronicles-section"
    >
      {/* Left — Image */}
      <div style={{ position: 'relative', minHeight: '600px' }}>
        <Image
          src="/IMG_0065.jpg"
          alt="Nicholas Huys — Athlete of the Month"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          sizes="50vw"
          priority
        />

        {/* Bottom gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 60%)',
          }}
        />

        {/* Over-image content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="chronicles-img-overlay"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '48px',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid rgba(255,255,255,0.3)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              borderRadius: '2px',
              padding: '7px 16px',
              marginBottom: '20px',
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="var(--accent)"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '11px',
                fontWeight: 900,
                letterSpacing: '0.3px',
                textTransform: 'uppercase',
                color: 'var(--white)',
              }}
            >
              Athlete of the Month
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: 'clamp(56px, 6.5vw, 96px)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-2px',
              textTransform: 'uppercase',
              color: 'var(--white)',
              marginBottom: '10px',
            }}
          >
            Nicholas Huys
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              color: 'rgba(245,243,238,0.55)',
            }}
          >
            Shot Put · Ivory Coast
          </p>
        </motion.div>
      </div>

      {/* Right — Detail */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        style={{
          background: 'var(--gray-900)',
          padding: '96px 80px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        className="chronicles-right"
      >
        {/* Label */}
        <p
          className="eyebrow-line"
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '11px',
            fontWeight: 900,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '24px',
          }}
        >
          A90 CHRONICLE
        </p>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: 'clamp(28px, 3vw, 44px)',
            fontWeight: 900,
            lineHeight: 1.15,
            textTransform: 'uppercase',
            letterSpacing: '-0.5px',
            color: 'var(--white)',
            marginBottom: '32px',
          }}
        >
          Power, Precision and Pride for Ivory Coast
        </h3>

        {/* Quote */}
        <blockquote
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '17px',
            fontStyle: 'italic',
            fontWeight: 500,
            lineHeight: 1.45,
            color: 'rgba(245,243,238,0.75)',
            borderLeft: '2px solid var(--accent)',
            paddingLeft: '28px',
            marginBottom: '32px',
          }}
        >
          &ldquo;Every throw is a statement — not just for me, but for everyone
          watching from back home.&rdquo;
        </blockquote>

        {/* Body */}
        <p
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '15px',
            fontWeight: 500,
            lineHeight: 1.5,
            color: 'rgba(245,243,238,0.6)',
            marginBottom: '48px',
          }}
        >
          We caught up with Nicholas Huys ahead of his most important season
          yet. What emerged was a portrait of an athlete driven not just by
          competition, but by the weight of representing a nation on the world
          stage.
        </p>

        {/* Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '48px',
            paddingBottom: '48px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {[
            { num: '21.4m', label: 'Personal Best' },
            { num: '3×', label: 'National Champion' },
            { num: 'Top 5', label: 'World Ranking' },
          ].map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '40px',
                  fontWeight: 900,
                  lineHeight: 1,
                  color: 'var(--accent)',
                  marginBottom: '6px',
                  letterSpacing: '-0.5px',
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '11px',
                  fontWeight: 900,
                  letterSpacing: '0.3px',
                  textTransform: 'uppercase',
                  color: 'rgba(245,243,238,0.45)',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <a
          href="https://medium.com/@afterninetygh"
          target="_blank"
          rel="noopener noreferrer"
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
            background: 'var(--accent)',
            color: 'var(--black)',
            padding: '14px 28px',
            borderRadius: '2px',
            alignSelf: 'flex-start',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent-hover)')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent)')
          }
        >
          READ FULL CHRONICLE <span className="arrow">→</span>
        </a>
      </motion.div>

      <style>{`
        @media (max-width: 1024px) {
          .chronicles-section { grid-template-columns: 1fr !important; }
          .chronicles-right { padding: 64px 24px !important; }
        }
        @media (max-width: 640px) {
          .chronicles-img-overlay { padding: 24px !important; }
          .chronicles-img-overlay h2 { font-size: clamp(40px, 11vw, 64px) !important; letter-spacing: -1px !important; }
          .chronicles-section > div:first-child { min-height: 400px !important; }
        }
      `}</style>
    </section>
  )
}
