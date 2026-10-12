'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

function FadeUp({
  children,
  delay = 0,
  style,
  className,
}: {
  children: React.ReactNode
  delay?: number
  style?: React.CSSProperties
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease, delay }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  // React sets `muted` as a property, not an attribute, so browsers can refuse autoplay; start it explicitly.
  useEffect(() => {
    const video = videoRef.current
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    video.muted = true
    const play = () => video.play().catch(() => {})
    play()

    // Browsers pause background-tab video and don't resume it on their own.
    const onVisible = () => { if (document.visibilityState === 'visible') play() }
    document.addEventListener('visibilitychange', onVisible)
    return () => document.removeEventListener('visibilitychange', onVisible)
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '640px',
        overflow: 'hidden',
        background: 'var(--black)',
      }}
    >
      {/* Still frame: shows while the video loads and for reduced-motion users */}
      <Image
        src="/videos/hero-roots-ep03-poster.jpg"
        alt=""
        fill
        priority
        style={{ objectFit: 'cover' }}
        sizes="100vw"
      />

      <video
        ref={videoRef}
        src="/videos/hero-roots-ep03.mp4"
        poster="/videos/hero-roots-ep03-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="hero-video"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.4) 50%, rgba(10,10,10,0.2) 100%),
            linear-gradient(to right, rgba(10,10,10,0.6) 0%, transparent 60%)
          `,
        }}
      />

      {/* Content anchored bottom-left */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          padding: '0 64px 88px',
          maxWidth: '880px',
        }}
        className="hero-content"
      >
        {/* Headline */}
        <FadeUp delay={0.35} style={{ marginBottom: '28px' }} className="hero-headline">
          <h1
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontSize: 'clamp(64px, 10vw, 160px)',
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-1px',
              textTransform: 'uppercase',
              color: 'var(--white)',
            }}
          >
            Beyond the Pitch
            <br />
            <span style={{ color: 'var(--accent)' }}>Into the Story</span>
          </h1>
        </FadeUp>

        {/* Sub */}
        <FadeUp delay={0.5} style={{ marginBottom: '40px' }} className="hero-sub">
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: 1.45,
              color: 'rgba(245,243,238,0.7)',
              maxWidth: '520px',
            }}
          >
            AFTER90 is your trusted platform for authentic sports storytelling.
            We go beyond the game to uncover the human side of sport through
            compelling long-form content, powerful imagery, and film.
          </p>
        </FadeUp>

      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .hero-video { display: none; }
        }
        @media (max-width: 768px) {
          .hero-content { padding: 0 24px 72px !important; max-width: 100% !important; }
.hero-headline { margin-bottom: 20px !important; }
          .hero-sub { margin-bottom: 36px !important; }
        }
        @media (max-width: 480px) {
          .hero-content { padding: 0 20px 64px !important; }
          .hero-content h1 { font-size: clamp(52px, 14vw, 80px) !important; letter-spacing: -0.5px !important; line-height: 0.95 !important; }
          .hero-content p { font-size: 14px !important; line-height: 1.7 !important; max-width: 100% !important; }
        }
      `}</style>
    </section>
  )
}
