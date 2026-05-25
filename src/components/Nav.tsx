'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  { label: 'Photographs',   href: '/#photographs'  },
  { label: 'A90 Chronicles', href: '/#a90chronicles' },
  { label: 'Our Partners',  href: '/#editions'      },
  { label: 'About',         href: '/about'          },
]

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav
        className="site-nav"
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          padding: '0 48px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
          background: scrolled
            ? 'rgba(10,10,10,0.96)'
            : 'linear-gradient(to bottom, rgba(10,10,10,0.85), transparent)',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <Link href="/" onClick={close} style={{ display: 'inline-flex', alignItems: 'center' }}>
          <Image
            src="/images/after90-icon.png"
            alt="After90"
            width={160}
            height={52}
            className="nav-logo"
            style={{ filter: 'brightness(0) invert(1)', objectFit: 'contain', width: 'auto', height: '44px' }}
            priority
          />
        </Link>

        {/* ── Desktop links ── */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '40px' }}
          className="nav-desktop"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link"
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '13px',
                fontWeight: 900,
                letterSpacing: '0.3px',
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
            </Link>
          ))}

          <a
            href="https://www.youtube.com/@after90"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-arrow"
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '12px',
              fontWeight: 900,
              letterSpacing: '0.4px',
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
            WATCH <span className="arrow">→</span>
          </a>
        </div>

        {/* ── Hamburger (mobile only) ── */}
        <button
          className="nav-hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            display: 'none',           // shown via CSS below
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            width: '40px',
            height: '40px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
          }}
        >
          {/* Three bars that animate to X */}
          <span className={`bar ${menuOpen ? 'bar-open-1' : ''}`} />
          <span className={`bar ${menuOpen ? 'bar-open-2' : ''}`} />
          <span className={`bar ${menuOpen ? 'bar-open-3' : ''}`} />
        </button>
      </nav>

      {/* ── Mobile drawer overlay ── */}
      <div
        className={`mobile-drawer ${menuOpen ? 'drawer-open' : ''}`}
        aria-hidden={!menuOpen}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          background: 'rgba(10,10,10,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0',
          paddingTop: '72px',   // clear the fixed nav bar
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            width: '100%',
            padding: '0 32px',
          }}
        >
          {navItems.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={close}
              tabIndex={menuOpen ? 0 : -1}
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: 'clamp(28px, 7vw, 44px)',
                fontWeight: 900,
                letterSpacing: '-0.5px',
                textTransform: 'uppercase',
                color: 'rgba(245,243,238,0.75)',
                transition: 'color 0.2s ease',
                textAlign: 'center',
                padding: '12px 0',
                width: '100%',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
                transitionDelay: `${0.05 + i * 0.06}s`,
                transitionProperty: 'opacity, transform, color',
                transitionDuration: '0.35s',
                transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
              }}
            >
              {item.label}
            </Link>
          ))}

          {/* WATCH CTA */}
          <a
            href="https://www.youtube.com/@after90"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            style={{
              marginTop: '24px',
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '13px',
              fontWeight: 900,
              letterSpacing: '0.4px',
              textTransform: 'uppercase',
              color: 'var(--black)',
              background: 'var(--accent)',
              padding: '14px 40px',
              borderRadius: '2px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.35s ease, transform 0.35s ease',
              transitionDelay: `${0.05 + navItems.length * 0.06}s`,
            }}
          >
            WATCH →
          </a>
        </nav>
      </div>

      <style>{`
        /* ── Desktop: hide hamburger ── */
        .nav-hamburger { display: none !important; }
        .nav-desktop   { display: flex !important; }
        .mobile-drawer { display: flex !important; }

        /* hamburger bar base */
        .bar {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--white);
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
        /* open state — animate to × */
        .bar-open-1 { transform: translateY(7px) rotate(45deg);  }
        .bar-open-2 { opacity: 0; transform: scaleX(0);          }
        .bar-open-3 { transform: translateY(-7px) rotate(-45deg); }

        /* ── Tablet / mobile: show hamburger, hide desktop ── */
        @media (max-width: 1024px) {
          .nav-desktop   { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .site-nav      { padding: 0 32px !important; }
        }
        @media (max-width: 480px) {
          .site-nav { padding: 0 28px !important; }
        }

        /* logo size */
        @media (max-width: 1024px) {
          .nav-logo { height: 30px !important; }
        }

        /* nav-link underline */
        .nav-link { position: relative; padding-bottom: 2px; }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 1px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.3s ease;
        }
        .nav-link:hover::after { transform: scaleX(1); }
      `}</style>
    </>
  )
}
