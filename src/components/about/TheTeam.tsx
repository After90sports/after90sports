'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

type TeamMember = {
  initials: string
  role: string
  name: string
  bio: string
  glowX: string
  glowY: string
  photo: string | null
}

const team: TeamMember[] = [
  {
    initials: 'HS',
    role: 'Founder & Creative Director',
    name: 'Husseni Shamsudeen',
    bio: 'The eye behind the lens. A visual storyteller who built After90 from a belief that African sport deserves world-class imagery — every frame made with intent, every photo earning its place.',
    glowX: '25%',
    glowY: '30%',
    photo: '/images/team/husseni-shamsudeen.jpg',
  },
  {
    initials: 'DO',
    role: 'Co-Founder & Editor-in-Chief',
    name: 'Derrick Otabil',
    bio: 'The voice behind After90. A journalist and storyteller with a sharp eye for the stories that matter — not just on the pitch, but in the lives of the athletes who define African sport.',
    glowX: '75%',
    glowY: '40%',
    photo: '/images/team/derrick-otabil.jpg',
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
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '11px',
              fontWeight: 900,
              letterSpacing: '0.3px',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            The People
          </span>
        </div>
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
        {team.map((member: TeamMember) => (
          <motion.div
            key={member.initials}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease, delay: 0 }}
            style={{
              background: 'var(--gray-800)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
            className="team-card"
          >
            {/* Photo area */}
            <div
              style={{
                position: 'relative',
                aspectRatio: '4 / 5',
                background: 'var(--gray-700)',
                overflow: 'hidden',
              }}
            >
              {member.photo ? (
                <>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    priority
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Bottom gradient overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '35%',
                      background: 'linear-gradient(to top, rgba(18,18,18,0.85) 0%, transparent 100%)',
                      zIndex: 1,
                    }}
                  />
                </>
              ) : (
                <>
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
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '28px',
                        fontWeight: 900,
                        color: 'var(--accent)',
                        letterSpacing: '0.3px',
                      }}
                    >
                      {member.initials}
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '10px',
                        fontWeight: 900,
                        letterSpacing: '0.3px',
                        textTransform: 'uppercase',
                        color: 'rgba(245,243,238,0.25)',
                      }}
                    >
                      Photo Coming Soon
                    </span>
                  </div>
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
                </>
              )}

              {/* Top accent bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'var(--accent)',
                  zIndex: 2,
                }}
              />
            </div>

            {/* Info */}
            <div style={{ padding: '32px 32px 28px' }}>
              {/* Role tag */}
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '10px',
                  fontWeight: 900,
                  letterSpacing: '0.3px',
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
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: 'clamp(24px, 2.5vw, 32px)',
                  fontWeight: 900,
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
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: 1.5,
                  color: 'rgba(245,243,238,0.5)',
                  marginBottom: '28px',
                }}
              >
                {member.bio}
              </p>

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
