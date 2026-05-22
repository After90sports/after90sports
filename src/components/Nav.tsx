'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="site-nav"
      aria-label="Main navigation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 48px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
        background: scrolled
          ? 'rgba(10,10,10,0.92)'
          : 'linear-gradient(to bottom, rgba(10,10,10,0.85), transparent)',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-oswald), sans-serif',
          fontSize: '26px',
          fontWeight: 600,
          letterSpacing: '-0.5px',
          color: 'var(--white)',
          textTransform: 'uppercase',
        }}
      >
        After<span style={{ color: 'var(--accent)' }}>90</span>
      </Link>

      {/* Desktop nav links */}
      <div
        style={{ display: 'flex', alignItems: 'center', gap: '40px' }}
        className="hidden-mobile"
      >
        {[
          { label: 'Photographs', href: '#photographs' },
          { label: 'A90Chronicles', href: '#a90chronicles' },
          { label: 'Our Partners', href: '#editions' },
          { label: 'Reach Out', href: '#newsletter' },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="nav-link"
            style={{
              fontFamily: 'var(--font-barlow-condensed), sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'rgba(245,243,238,0.75)',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--white)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,243,238,0.75)')
            }
          >
            {item.label}
          </a>
        ))}

        <a
          href="https://www.youtube.com/@after90"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-arrow"
          style={{
            fontFamily: 'var(--font-barlow-condensed), sans-serif',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: 'var(--black)',
            background: 'var(--accent)',
            padding: '9px 20px',
            borderRadius: '2px',
            transition: 'background 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent-hover)')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent)')
          }
        >
          WATCH <span className="arrow">↗</span>
        </a>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hidden-mobile { display: none !important; }
          .site-nav { padding: 0 24px !important; }
        }
        @media (max-width: 480px) {
          .site-nav { padding: 0 16px !important; }
        }
      `}</style>
    </nav>
  )
}
