'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
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
        padding: '140px 64px',
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

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '96px',
          alignItems: 'center',
        }}
        className="newsletter-grid"
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="eyebrow-line"
            style={{
              fontFamily: 'var(--font-barlow-condensed), sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '3.5px',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '24px',
            }}
          >
            The Dispatch
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-oswald), sans-serif',
              fontSize: 'clamp(40px, 5vw, 72px)',
              fontWeight: 400,
              lineHeight: 1.08,
              textTransform: 'uppercase',
              letterSpacing: '-1px',
              color: 'var(--white)',
              marginBottom: '28px',
            }}
          >
            Never Miss
            <br />
            A{' '}
            <em
              style={{
                fontStyle: 'normal',
                color: 'var(--accent)',
              }}
            >
              Story.
            </em>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-barlow), sans-serif',
              fontSize: '16px',
              fontWeight: 300,
              lineHeight: 1.75,
              color: 'rgba(245,243,238,0.55)',
              maxWidth: '400px',
            }}
          >
            Get After90's best writing, photo essays, and chronicles delivered
            to your inbox monthly. No noise, just the stories that matter.
          </p>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {submitted ? (
            <div
              style={{
                padding: '40px 0',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-oswald), sans-serif',
                  fontSize: '32px',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '12px',
                }}
              >
                You're In.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-barlow), sans-serif',
                  fontSize: '14px',
                  fontWeight: 300,
                  color: 'rgba(245,243,238,0.5)',
                }}
              >
                First issue lands in your inbox soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {/* Name input */}
              <div style={{ marginBottom: '32px' }}>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.15)',
                    padding: '12px 0',
                    fontFamily: 'var(--font-barlow), sans-serif',
                    fontSize: '16px',
                    fontWeight: 300,
                    color: 'var(--white)',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) =>
                    ((e.currentTarget as HTMLInputElement).style.borderBottomColor =
                      'var(--accent)')
                  }
                  onBlur={(e) =>
                    ((e.currentTarget as HTMLInputElement).style.borderBottomColor =
                      'rgba(255,255,255,0.15)')
                  }
                />
              </div>

              {/* Email input */}
              <div style={{ marginBottom: '32px' }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.15)',
                    padding: '12px 0',
                    fontFamily: 'var(--font-barlow), sans-serif',
                    fontSize: '16px',
                    fontWeight: 300,
                    color: 'var(--white)',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) =>
                    ((e.currentTarget as HTMLInputElement).style.borderBottomColor =
                      'var(--accent)')
                  }
                  onBlur={(e) =>
                    ((e.currentTarget as HTMLInputElement).style.borderBottomColor =
                      'rgba(255,255,255,0.15)')
                  }
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-arrow"
                style={{
                  width: '100%',
                  background: 'var(--accent)',
                  color: 'var(--black)',
                  border: 'none',
                  padding: '16px 28px',
                  fontFamily: 'var(--font-barlow-condensed), sans-serif',
                  fontSize: '14px',
                  fontWeight: 700,
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  transition: 'background 0.2s ease',
                  marginBottom: '16px',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background =
                    'var(--accent-hover)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background =
                    'var(--accent)')
                }
              >
                Subscribe <span className="arrow">→</span>
              </button>

              {/* Disclaimer */}
              <p
                style={{
                  fontFamily: 'var(--font-barlow), sans-serif',
                  fontSize: '12px',
                  fontWeight: 300,
                  color: 'rgba(245,243,238,0.35)',
                  textAlign: 'center',
                }}
              >
                No spam. Unsubscribe any time.
              </p>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .newsletter-section { padding: 80px 24px !important; }
          .newsletter-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
