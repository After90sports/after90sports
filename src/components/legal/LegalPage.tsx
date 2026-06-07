import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export type LegalSection = {
  heading: string
  body: string[]
}

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}) {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--black)', minHeight: '100vh' }}>
        <div
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            padding: 'clamp(140px, 16vw, 180px) 24px clamp(80px, 10vw, 120px)',
          }}
        >
          {/* Eyebrow */}
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
              Legal
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-1px',
              textTransform: 'uppercase',
              color: 'var(--white)',
              marginBottom: '16px',
            }}
          >
            {title}
          </h1>

          {/* Last updated */}
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.3px',
              textTransform: 'uppercase',
              color: 'rgba(245,243,238,0.4)',
              marginBottom: '40px',
            }}
          >
            Last updated: {updated}
          </p>

          {/* Intro */}
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: 1.6,
              color: 'rgba(245,243,238,0.65)',
              marginBottom: '56px',
              paddingBottom: '40px',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {intro}
          </p>

          {/* Sections */}
          {sections.map((section, i) => (
            <div key={i} style={{ marginBottom: i < sections.length - 1 ? '40px' : 0 }}>
              <h2
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: 'clamp(18px, 2vw, 22px)',
                  fontWeight: 900,
                  lineHeight: 1.2,
                  letterSpacing: '-0.3px',
                  color: 'var(--white)',
                  marginBottom: '14px',
                }}
              >
                {section.heading}
              </h2>
              {section.body.map((para, j) => (
                <p
                  key={j}
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '14.5px',
                    fontWeight: 500,
                    lineHeight: 1.65,
                    color: 'rgba(245,243,238,0.55)',
                    marginBottom: j < section.body.length - 1 ? '14px' : 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
