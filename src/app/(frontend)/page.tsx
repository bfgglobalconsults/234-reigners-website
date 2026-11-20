import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import SubHeroSection from '@/components/SubHeroSection'
import WhoWeAreSection from '@/components/WhoWeAreSection'
import MentalHealthApproachSection from '@/components/MentalHealthApproachSection'
import SuccessStoriesSection from '@/components/SuccessStoriesSection'
import ContactConversationSection from '@/components/ContactConversationSection'
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
      <div className="px-5 bg-white">
      <HeroSection />
      <SubHeroSection />
      <WhoWeAreSection />
      <MentalHealthApproachSection />
      <SuccessStoriesSection />
      <ContactConversationSection />
     </div>
      <Footer />
    </div>
  )
}
