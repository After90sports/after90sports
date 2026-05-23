'use client'

import Image from 'next/image'
import { InstagramIcon, XTwitterIcon, YouTubeIcon, TikTokIcon, MediumIcon } from './SocialIcons'

const contactInfo = [
  { label: 'reach@afterninetysports.com', href: 'mailto:reach@afterninetysports.com' },
  { label: 'Accra, Ghana', href: 'https://www.google.com/maps/place/Accra,+Ghana' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/after90sports/', Icon: InstagramIcon },
  { label: 'X / Twitter', href: 'https://x.com/after90sports', Icon: XTwitterIcon },
  { label: 'TikTok', href: 'https://www.tiktok.com/@after9012', Icon: TikTokIcon },
  { label: 'YouTube', href: 'https://www.youtube.com/@after90', Icon: YouTubeIcon },
  { label: 'Medium', href: 'https://medium.com/@afterninetygh', Icon: MediumIcon },
]

const colHeadingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-inter), sans-serif',
  fontSize: '10px',
  fontWeight: 700,
  letterSpacing: '0.5px',
  textTransform: 'uppercase',
  color: 'rgba(245,243,238,0.35)',
  marginBottom: '24px',
}

const linkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-inter), sans-serif',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: 1.5,
  color: 'rgba(245,243,238,0.6)',
  transition: 'color 0.2s ease',
}

function onEnter(e: React.MouseEvent<HTMLAnchorElement>) {
  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'
}
function onLeave(e: React.MouseEvent<HTMLAnchorElement>) {
  (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.6)'
}

export default function Footer() {
  return (
    <footer
      style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '56px 64px 32px' }}
      className="footer"
    >
      {/* Top grid — After90 | Contact | Follow */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '64px',
          paddingBottom: '40px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          marginBottom: '24px',
        }}
        className="footer-grid"
      >
        {/* Col 1 — Logo only */}
        <div>
          <Image
            src="/images/after90-icon.png"
            alt="After90"
            width={280}
            height={91}
            style={{ filter: 'brightness(0) invert(1)', objectFit: 'contain', width: 'auto', height: '36px' }}
          />
        </div>

        {/* Col 2 — Contact */}
        <div>
          <h4 style={colHeadingStyle}>Contact</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {contactInfo.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  style={linkStyle}
                  onMouseEnter={onEnter}
                  onMouseLeave={onLeave}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Follow with icons */}
        <div>
          <h4 style={colHeadingStyle}>Follow</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(245,243,238,0.4)',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.4)')
                }
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
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
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.2px',
            color: 'rgba(245,243,238,0.3)',
          }}
        >
          © {new Date().getFullYear()} After90 Magazine. All rights reserved.
        </p>

        <div style={{ display: 'flex', gap: '24px' }}>
          {['Privacy', 'Terms', 'Cookies'].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.2px',
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
          .footer { padding: 40px 24px 24px !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 640px) {
          .footer { padding: 32px 16px 20px !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </footer>
  )
}
