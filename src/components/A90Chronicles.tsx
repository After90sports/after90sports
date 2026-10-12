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
          src="https://miro.medium.com/v2/resize:fit:1200/1*xkYWDWmTBXwoQQRkRZLntQ.jpeg"
          alt="Hamidou Fatah on the ball for Ghana's Black Stars"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="50vw"
          priority
        />

        {/* Bottom gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.3) 60%, transparent 100%)',
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
              border: '1px solid rgba(155,222,28,0.4)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              borderRadius: '2px',
              padding: '7px 16px',
              marginBottom: '20px',
            }}
          >
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
              Feature · Aug 2026
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: 'clamp(32px, 4vw, 60px)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-1px',
              textTransform: 'uppercase',
              color: 'var(--white)',
              marginBottom: '10px',
            }}
          >
            From a Village
            <br />Called Ejura
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
            Ejura · Black Stars
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
          padding: '48px 80px',
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
          The Full Story of Hamidou &ldquo;Maestro&rdquo; Fatah
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
          &ldquo;Before you achieve something, you need to pass through all of
          these things. It&rsquo;s life.&rdquo;
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
          There is a good chance you are meeting Hamidou Fatah for the first
          time in this story, and if that is the case, good. That is exactly
          how it should be. This is not a piece for the people who already know
          him from the Ghana Premier League highlight reels or the Black Stars
          team sheet.
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
            { num: 'Feature', label: 'Category' },
            { num: 'Aug 2026', label: 'Published' },
            { num: 'Medium', label: 'Read On' },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="chron-stat-num"
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
          href="https://medium.com/@afterninetygh/from-a-village-called-ejura-the-full-story-of-hamidou-maestro-fatah-f00832dbe50e"
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
          .chronicles-right { padding: 32px 24px !important; }
        }
        @media (max-width: 640px) {
          .chronicles-img-overlay { padding: 24px !important; }
          .chronicles-img-overlay h2 { font-size: clamp(40px, 11vw, 64px) !important; letter-spacing: -1px !important; }
          .chronicles-section > div:first-child { min-height: 400px !important; }
          .chron-stat-num { font-size: 26px !important; letter-spacing: -0.3px !important; }
        }
      `}</style>
    </section>
  )
}
