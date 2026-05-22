import type { Metadata, Viewport } from 'next'
import { Oswald, Barlow, Barlow_Condensed, League_Gothic } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

const leagueGothic = League_Gothic({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-league-gothic',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'After90 — The Digital Sports Magazine',
  description:
    'After90 is a digital sports magazine dedicated to the culture, stories, and passion that live beyond the game.',
  openGraph: {
    title: 'After90 — The Digital Sports Magazine',
    description:
      'Bringing fans closer to sport through premium storytelling and fresh perspectives.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${barlow.variable} ${barlowCondensed.variable} ${leagueGothic.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
