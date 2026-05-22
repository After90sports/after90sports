'use client'

import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { chronicles, Chronicle } from '@/lib/chronicles'
import ChroniclePopup from './ChroniclePopup'

export default function LatestChronicles() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openPopup = useCallback((i: number, rect: DOMRect) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveIndex(i)
    setAnchorRect(rect)
  }, [])

  const startClose = useCallback(() => {
    closeTimer.current = setTimeout(() => {
      setActiveIndex(null)
      setAnchorRect(null)
    }, 180)
  }, [])

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  const forceClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveIndex(null)
    setAnchorRect(null)
  }, [])

  return (
    <section
      id="latest"
      style={{
        padding: '100px 64px',
        background: 'var(--black)',
      }}
      className="chronicles-list"
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '48px',
        }}
        className="chronicles-header"
      >
        <div>
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
            CHRONICLES
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
            Latest Chronicles
          </h2>
        </div>
        <a
          href="https://medium.com/@afterninetygh"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-arrow"
          style={{
            fontFamily: 'var(--font-barlow-condensed), sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.7')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
        >
          View All <span className="arrow">→</span>
        </a>
      </div>

      {/* Article list */}
      <div>
        {chronicles.map((article, i) => (
          <ArticleRow
            key={i}
            article={article}
            index={i}
            isActive={activeIndex === i}
            onMouseEnter={(rect) => openPopup(i, rect)}
            onMouseLeave={startClose}
          />
        ))}
      </div>

      {/* Popup */}
      {activeIndex !== null && chronicles[activeIndex] && (
        <ChroniclePopup
          chronicle={chronicles[activeIndex]}
          anchorRect={anchorRect}
          onClose={forceClose}
          onMouseEnter={cancelClose}
          onMouseLeave={startClose}
        />
      )}

      <style>{`
        @media (max-width: 1024px) {
          .chronicles-list { padding: 80px 24px !important; }
          .chronicles-header { flex-direction: column; align-items: flex-start; gap: 24px; }
        }
      `}</style>
    </section>
  )
}

function ArticleRow({
  article,
  index,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: {
  article: Chronicle
  index: number
  isActive: boolean
  onMouseEnter: (rect: DOMRect) => void
  onMouseLeave: () => void
}) {
  const rowRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (rowRef.current) {
      onMouseEnter(rowRef.current.getBoundingClientRect())
    }
  }

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto auto',
        gap: '40px',
        padding: '36px 0',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        alignItems: 'start',
        cursor: 'default',
        transition: 'padding-left 0.3s ease',
        paddingLeft: isActive ? '24px' : '0px',
      }}
      className="article-row"
    >
      {/* Number */}
      <span
        style={{
          fontFamily: 'var(--font-league-gothic), sans-serif',
          fontSize: '32px',
          lineHeight: 1,
          color: isActive ? 'var(--accent)' : 'rgba(245,243,238,0.3)',
          transition: 'color 0.2s ease',
          userSelect: 'none',
          paddingTop: '4px',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Title + body */}
      <div>
        <h3
          style={{
            fontFamily: 'var(--font-oswald), sans-serif',
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: 1.2,
            textTransform: 'uppercase',
            letterSpacing: '-0.2px',
            color: isActive ? 'var(--accent)' : 'var(--white)',
            marginBottom: '8px',
            transition: 'color 0.2s ease',
          }}
        >
          {article.title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-barlow), sans-serif',
            fontSize: '13px',
            fontWeight: 300,
            lineHeight: 1.65,
            color: 'rgba(245,243,238,0.5)',
            maxWidth: '540px',
          }}
        >
          {article.excerpt}
        </p>
      </div>

      {/* Tag */}
      <span
        style={{
          fontFamily: 'var(--font-barlow-condensed), sans-serif',
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          border: '1px solid rgba(155,222,28,0.3)',
          padding: '5px 10px',
          borderRadius: '2px',
          whiteSpace: 'nowrap',
          alignSelf: 'start',
          marginTop: '4px',
        }}
      >
        {article.tag}
      </span>

      {/* Date + arrow */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '10px',
          alignSelf: 'start',
          paddingTop: '4px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-barlow-condensed), sans-serif',
            fontSize: '11px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: 'rgba(245,243,238,0.35)',
            whiteSpace: 'nowrap',
          }}
        >
          {article.date}
        </span>
        <span
          style={{
            color: 'var(--accent)',
            fontSize: '18px',
            opacity: isActive ? 1 : 0,
            transition: 'opacity 0.2s ease',
          }}
        >
          →
        </span>
      </div>
    </motion.div>
  )
}
