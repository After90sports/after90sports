const items = [
  'Athlete Stories',
  'Sports Culture',
  'A90 VRs Pro',
  'Roots by A90',
  'Photo Essays',
  'Rapid90',
  'African Sport',
  'Guess The Jam',
  'Perspective Series',
  'Deep Dives',
  'Behind the Story',
]

export default function Ticker() {
  const doubled = [...items, ...items]

  return (
    <div
      style={{
        background: 'var(--accent)',
        overflow: 'hidden',
        padding: '14px 0',
        userSelect: 'none',
      }}
    >
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '13px',
                fontWeight: 900,
                letterSpacing: '0.3px',
                textTransform: 'uppercase',
                color: 'var(--black)',
                padding: '0 28px',
              }}
            >
              {item}
            </span>
            <span
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: 'var(--black)',
                opacity: 0.5,
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
