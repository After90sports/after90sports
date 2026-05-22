import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AboutHero from '@/components/about/AboutHero'
import Manifesto from '@/components/about/Manifesto'
import OurStory from '@/components/about/OurStory'
import TheTeam from '@/components/about/TheTeam'
import WhatWeStandFor from '@/components/about/WhatWeStandFor'
import AboutCTA from '@/components/about/AboutCTA'

export const metadata: Metadata = {
  title: 'About — After90 | The Digital Sports Magazine',
  description:
    'Meet the team behind After90 — the digital sports magazine built for the storytellers. Learn about our mission, our story, and the people who bring it to life.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About After90 — Built for the Storytellers',
    description:
      'Meet the minds behind After90. Our story, our mission, and what we stand for.',
    url: 'https://afterninetysports.com/about',
    images: [
      {
        url: '/IMG_0065.jpg',
        width: 2604,
        height: 3539,
        alt: 'After90 Magazine — the team behind the storytelling',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/IMG_0065.jpg'],
  },
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <AboutHero />
        <Manifesto />
        <OurStory />
        <TheTeam />
        <WhatWeStandFor />
        <AboutCTA />
      </main>
      <Footer />
    </>
  )
}
