'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section
      id="newsletter"
      style={{
        background: 'var(--gray-900)',
        padding: '56px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="newsletter-section"
    >
      {/* Top accent stripe */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background:
            'linear-gradient(to right, transparent, rgba(155,222,28,0.3), transparent)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          maxWidth: '540px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <p
          className="eyebrow-line"
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '11px',
            fontWeight: 900,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '16px',
          }}
        >
          The Dispatch
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 900,
            lineHeight: 1.08,
            textTransform: 'uppercase',
            letterSpacing: '-0.5px',
            color: 'var(--white)',
            marginBottom: '12px',
          }}
        >
          Never Miss A{' '}
          <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>
            Story.
          </em>
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: 1.5,
            color: 'rgba(245,243,238,0.5)',
            marginBottom: '28px',
          }}
        >
          Stories, culture &amp; moments beyond the game — monthly.
        </p>

        {submitted ? (
          <div style={{ padding: '16px 0' }}>
            <p
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '24px',
                fontWeight: 500,
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '8px',
              }}
            >
              You&apos;re In.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                color: 'rgba(245,243,238,0.5)',
              }}
            >
              First issue lands in your inbox soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: 'flex',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '3px',
                overflow: 'hidden',
                marginBottom: '12px',
              }}
            >
              <label htmlFor="newsletter-email" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>Your email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.05)',
                  border: 'none',
                  padding: '13px 16px',
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'var(--white)',
                  outline: 'none',
                  minWidth: 0,
                }}
              />
              <button
                type="submit"
                className="btn-arrow"
                style={{
                  flexShrink: 0,
                  background: 'var(--accent)',
                  color: 'var(--black)',
                  border: 'none',
                  padding: '13px 20px',
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '11px',
                  fontWeight: 900,
                  letterSpacing: '0.4px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background = 'var(--accent-hover)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background = 'var(--accent)')
                }
              >
                Subscribe →
              </button>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                color: 'rgba(245,243,238,0.3)',
              }}
            >
              No spam. Unsubscribe any time.
            </p>
          </form>
        )}
      </motion.div>

      <style>{`
        @media (max-width: 640px) {
          .newsletter-section { padding: 44px 20px !important; }
        }
      `}</style>
    </section>
  )
}
