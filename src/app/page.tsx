import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import CulturalImpact from '@/components/CulturalImpact'
import Photographs from '@/components/Photographs'
import VideoCarousel from '@/components/VideoCarousel'
import A90Chronicles from '@/components/A90Chronicles'
import LatestChronicles from '@/components/LatestChronicles'
import OurPartners from '@/components/OurPartners'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <CulturalImpact />
        <Photographs />
        <VideoCarousel />
        <A90Chronicles />
        <LatestChronicles />
        <OurPartners />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
