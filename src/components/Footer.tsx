'use client'

const footerLinks = {
  Magazine: [
    'Latest Issue',
    'Archive',
    'Tactics Edition',
    'Culture Edition',
    'Interviews',
  ],
  Company: ['About Us', 'Our Writers', 'Advertise', 'Careers', 'Contact'],
  Follow: ['Instagram', 'X / Twitter', 'TikTok', 'YouTube', 'Substack'],
}

export default function Footer() {
  return (
    <footer
      style={{
        background: '#000000',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '100px 64px 48px',
      }}
      className="footer"
    >
      {/* Top grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '64px',
          paddingBottom: '64px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          marginBottom: '40px',
        }}
        className="footer-grid"
      >
        {/* Col 1 — Logo + tagline */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-oswald), sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '-1px',
              lineHeight: 1,
              color: 'var(--white)',
              marginBottom: '20px',
            }}
          >
            After<span style={{ color: 'var(--accent)' }}>90</span>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-barlow), sans-serif',
              fontSize: '14px',
              fontWeight: 300,
              lineHeight: 1.75,
              color: 'rgba(245,243,238,0.45)',
              maxWidth: '280px',
            }}
          >
            The digital sports magazine that lives beyond the final whistle.
            Culture, tactics, stories, and the love of the game.
          </p>
        </div>

        {/* Cols 2-4 */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4
              style={{
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'rgba(245,243,238,0.35)',
                marginBottom: '24px',
              }}
            >
              {heading}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{
                      fontFamily: 'var(--font-barlow), sans-serif',
                      fontSize: '14px',
                      fontWeight: 400,
                      color: 'rgba(245,243,238,0.6)',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        'rgba(245,243,238,0.6)')
                    }
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-barlow-condensed), sans-serif',
            fontSize: '12px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: 'rgba(245,243,238,0.3)',
          }}
        >
          © 2026 After90 Magazine. All rights reserved.
        </p>

        <div style={{ display: 'flex', gap: '24px' }}>
          {['Privacy', 'Terms', 'Cookies'].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontSize: '12px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: 'rgba(245,243,238,0.3)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.3)')
              }
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer { padding: 64px 24px 40px !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 640px) {
          .footer { padding: 48px 16px 32px !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  )
}
