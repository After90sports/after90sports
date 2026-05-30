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
    'After90 is a sports digital magazine exploring the culture, stories, and passion that live beyond the game — bringing fans closer to sport through premium storytelling and fresh perspectives.',
  keywords: [
    'sports magazine', 'African sports', 'sports culture', 'sports storytelling',
    'After90', 'athlete stories', 'Ghana football', 'athletics', 'digital sports magazine',
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
      'The culture, stories, and passion that live beyond the game. African sport told with depth, integrity, and fresh perspective.',
    type: 'website',
    url: 'https://afterninetysports.com',
    siteName: 'After90 Magazine',
    locale: 'en_US',
    images: [
      {
        url: '/IMG_0949A90B.jpg',
        width: 2400,
        height: 1600,
        alt: 'After90 Magazine — African sports photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'After90 — The Digital Sports Magazine',
    description:
      "Sport doesn't end when the clock does. After90 celebrates the culture, stories, and energy that live beyond the game.",
    creator: '@after90sports',
    images: ['/IMG_0949A90B.jpg'],
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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
