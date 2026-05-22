import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'After90 — The Digital Sports Magazine',
  description:
    'After90 is a digital sports magazine dedicated to the culture, stories, and passion that live beyond the game. Premium sports storytelling from Africa and beyond.',
  keywords: [
    'sports magazine', 'African sports', 'football culture', 'sports storytelling',
    'After90', 'sports journalism', 'Ghana football', 'athletics',
  ],
  authors: [{ name: 'After90 Magazine' }],
  creator: 'After90 Magazine',
  metadataBase: new URL('https://afterninetysports.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'After90 — The Digital Sports Magazine',
    description:
      'Premium sports storytelling from Africa and beyond. Culture, tactics, stories, and the love of the game.',
    type: 'website',
    url: 'https://afterninetysports.com',
    siteName: 'After90 Magazine',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'After90 — The Digital Sports Magazine',
    description:
      'Premium sports storytelling from Africa and beyond.',
    creator: '@after90',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
