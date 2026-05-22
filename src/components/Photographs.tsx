'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const cards = [
  {
    image: '/PSG-88.jpg',
    objectPosition: 'center top',
    tag: 'FIFA INTERCONTINENTAL CUP',
    title: 'Paris Saint Germain, headed to Qatar and became intercontinental champions',
    credit: 'Husseni Shamsudeen',
    readTime: '12 min read',
    date: 'May 2026',
    large: true,
  },
  {
    image: '/UAEMOROC-13.jpg',
    objectPosition: 'center',
    tag: 'FIFA ARAB CUP',
    title: 'From Casablanca to Arab Kings',
    credit: 'Husseni Shamsudeen',
    readTime: '8 min read',
    date: '',
    large: false,
  },
  {
    image: '/IMG_0949A90B.jpg',
    objectPosition: 'center 30%',
    tag: 'AFRICAN ATHLETICS CHAMPIONSHIP',
    title: 'Accra gave the world a real meaning of what African athleticism truly mean',
    credit: 'Husseni Shamsudeen',
    readTime: '6 min read',
    date: '',
    large: false,
  },
]

function PhotoCard({
  card,
  rowSpan,
}: {
  card: (typeof cards)[0]
  rowSpan?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="card-accent-line"
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '2px',
        gridRow: rowSpan ? `span ${rowSpan}` : undefined,
        cursor: 'pointer',
        background: 'var(--gray-800)',
        minHeight: card.large ? '600px' : '290px',
      }}
    >
      {/* Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
        }}
      >
        <Image
          src={card.image}
          alt={card.title}
          fill
          style={{
            objectFit: 'cover',
            objectPosition: card.objectPosition,
            transition: 'transform 0.4s ease',
          }}
          className="photo-img"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.6) 50%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '28px',
        }}
      >
        {/* Tag */}
        <span
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-barlow-condensed), sans-serif',
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: 'rgba(245,243,238,0.9)',
            border: '1px solid rgba(255,255,255,0.3)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            padding: '6px 12px',
            borderRadius: '2px',
            marginBottom: '14px',
          }}
        >
          {card.tag}
        </span>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-oswald), sans-serif',
            fontSize: '22px',
            fontWeight: 500,
            lineHeight: 1.15,
            textTransform: 'uppercase',
            color: 'var(--white)',
            marginBottom: '12px',
          }}
        >
          {card.title}
        </h3>

        {/* Meta */}
        <div
          style={{
            fontFamily: 'var(--font-barlow-condensed), sans-serif',
            fontSize: '11px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: 'rgba(245,243,238,0.45)',
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          <span>Photo: {card.credit}</span>
          <span>·</span>
          <span>{card.readTime}</span>
          {card.date && (
            <>
              <span>·</span>
              <span>{card.date}</span>
            </>
          )}
        </div>
      </div>

      <style>{`
        .card-accent-line:hover .photo-img {
          transform: scale(1.05);
        }
      `}</style>
    </motion.div>
  )
}

export default function Photographs() {
  return (
    <section
      id="photographs"
      style={{
        padding: '100px 64px',
        background: 'var(--black)',
      }}
      className="photographs-section"
    >
      {/* Section header */}
      <div style={{ marginBottom: '48px' }}>
        <p
          className="eyebrow-line"
          style={{
            fontFamily: 'var(--font-barlow-condensed), sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '3.5px',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '16px',
          }}
        >
          PHOTOGRAPHS
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-oswald), sans-serif',
            fontSize: 'clamp(32px, 4vw, 56px)',
            fontWeight: 400,
            lineHeight: 1.1,
            textTransform: 'uppercase',
            letterSpacing: '-0.5px',
            color: 'var(--white)',
          }}
        >
          Sports Events
          <br />
          We Have Covered
        </h2>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gridTemplateRows: 'auto auto',
          gap: '8px',
        }}
        className="photos-grid"
      >
        <PhotoCard card={cards[0]} rowSpan={2} />
        <PhotoCard card={cards[1]} />
        <PhotoCard card={cards[2]} />
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .photographs-section { padding: 80px 24px !important; }
          .photos-grid { grid-template-columns: 1fr !important; grid-template-rows: auto !important; }
          .photos-grid > div:first-child { grid-row: auto !important; }
        }
      `}</style>
    </section>
  )
}
