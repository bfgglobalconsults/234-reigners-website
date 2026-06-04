import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import CultureToLifeSection from '@/components/CultureToLifeSection'
import WhatWeDoSection from '@/components/WhatWeDoSection'
import ServicesSection from '@/components/ServicesSection'
import FeaturedExperiences from '@/components/FeaturedExperiences'
import OurStorySection from '@/components/OurStorySection'
import WhatWeOfferSection from '@/components/WhatWeOfferSection'
import TheAppSection from '@/components/TheAppSection'
import GrowWithUsSection from '@/components/GrowWithUsSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import ComingSoonBanner from '@/components/ComingSoonBanner'
import MemoriesGallery from '@/components/MemoriesGallery'
import ContactSection from '@/components/ContactSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CultureToLifeSection />
      <ServicesSection />
      <FeaturedExperiences />
      <HowItWorksSection />
      <ComingSoonBanner />
      {/* <OurStorySection /> */}
      <MemoriesGallery />
      <WhatWeOfferSection />
      <TheAppSection />
      <GrowWithUsSection />
      {/* <ContactSection /> */}
      <CTASection />
      <Footer />
    </div>
  )
}
