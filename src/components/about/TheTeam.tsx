'use client'

import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

type TeamMember = {
  initials: string
  role: string
  name: string
  bio: string
  socials: { label: string; href: string }[]
  glowX: string
  glowY: string
  placeholder: boolean
}

const team: TeamMember[] = [
  {
    initials: 'FO',
    role: 'Founder & Editor-in-Chief',
    name: 'Founder Name',
    bio: 'The visionary behind After90. A journalist and storyteller with a decade of experience covering sport across the African continent. Believes every great story starts with showing up.',
    socials: [
      { label: 'Instagram', href: '#' },
      { label: 'X / Twitter', href: '#' },
      { label: 'LinkedIn', href: '#' },
    ],
    glowX: '25%',
    glowY: '30%',
    placeholder: true,
  },
  {
    initials: 'CF',
    role: 'Co-Founder & Creative Director',
    name: 'Co-Founder Name',
    bio: 'The eye behind the lens. An award-winning sports photographer whose work has been published across major international platforms. Brings the visual soul of After90 to life.',
    socials: [
      { label: 'Instagram', href: '#' },
      { label: 'X / Twitter', href: '#' },
      { label: 'LinkedIn', href: '#' },
    ],
    glowX: '75%',
    glowY: '40%',
    placeholder: true,
  },
]

export default function TheTeam() {
  return (
    <section
      style={{
        background: 'var(--gray-900)',
        padding: '140px 64px',
      }}
      className="team-section"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease }}
        style={{ marginBottom: '80px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <span style={{ display: 'inline-block', width: '40px', height: '1px', background: 'var(--accent)' }} />
          <span
            style={{
              fontFamily: 'var(--font-barlow-condensed), sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '3.5px',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            The People
          </span>
        </div>
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
          Minds Behind
          <br />
          <span style={{ color: 'var(--accent)' }}>After90</span>
        </h2>
      </motion.div>

      {/* Team grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
        }}
        className="team-grid"
      >
        {team.map((member: TeamMember, i: number) => (
          <motion.div
            key={member.initials}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease, delay: i * 0.12 }}
            style={{
              background: 'var(--gray-800)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
            className="team-card"
          >
            {/* Photo placeholder */}
            <div
              style={{
                position: 'relative',
                aspectRatio: '4 / 5',
                background: 'var(--gray-700)',
                overflow: 'hidden',
              }}
            >
              {/* Subtle gradient pattern */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `
                    radial-gradient(ellipse at ${member.glowX} ${member.glowY}, rgba(155,222,28,0.1) 0%, transparent 55%),
                    linear-gradient(160deg, var(--gray-600) 0%, var(--gray-700) 50%, #0d0d0d 100%)
                  `,
                }}
              />

              {/* Initials placeholder */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    border: '1px solid rgba(155,222,28,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-oswald), sans-serif',
                    fontSize: '28px',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    letterSpacing: '2px',
                  }}
                >
                  {member.initials}
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-barlow-condensed), sans-serif',
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '2.5px',
                    textTransform: 'uppercase',
                    color: 'rgba(245,243,238,0.25)',
                  }}
                >
                  Photo Coming Soon
                </span>
              </div>

              {/* Top accent bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'var(--accent)',
                }}
              />

              {/* Bottom gradient */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  background: 'linear-gradient(to top, rgba(22,22,22,0.9) 0%, transparent 100%)',
                }}
              />
            </div>

            {/* Info */}
            <div style={{ padding: '32px 32px 28px' }}>
              {/* Role tag */}
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-barlow-condensed), sans-serif',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  border: '1px solid rgba(155,222,28,0.25)',
                  padding: '4px 10px',
                  borderRadius: '2px',
                  marginBottom: '16px',
                }}
              >
                {member.role}
              </span>

              {/* Name */}
              <h3
                style={{
                  fontFamily: 'var(--font-oswald), sans-serif',
                  fontSize: 'clamp(24px, 2.5vw, 32px)',
                  fontWeight: 600,
                  lineHeight: 1.05,
                  letterSpacing: '-0.5px',
                  textTransform: 'uppercase',
                  color: 'var(--white)',
                  marginBottom: '16px',
                }}
              >
                {member.name}
              </h3>

              {/* Bio */}
              <p
                style={{
                  fontFamily: 'var(--font-barlow), sans-serif',
                  fontSize: '14px',
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: 'rgba(245,243,238,0.5)',
                  marginBottom: '28px',
                }}
              >
                {member.bio}
              </p>

              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  background: 'rgba(255,255,255,0.07)',
                  marginBottom: '20px',
                }}
              />

              {/* Socials */}
              <div style={{ display: 'flex', gap: '20px' }}>
                {member.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    style={{
                      fontFamily: 'var(--font-barlow-condensed), sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      color: 'rgba(245,243,238,0.35)',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        'rgba(245,243,238,0.35)')
                    }
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .team-section { padding: 80px 24px !important; }
          .team-grid { grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
        }
        @media (max-width: 768px) {
          .team-grid { grid-template-columns: 1fr !important; max-width: 480px; }
          .team-card { max-width: 100%; }
        }
        @media (max-width: 640px) {
          .team-section { padding: 64px 16px !important; }
        }
      `}</style>
    </section>
  )
}
