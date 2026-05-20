import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactHeroSection from '@/components/ContactHeroSection'
import ContactFormSection from '@/components/ContactFormSection'
import ContactInfoSection from '@/components/ContactInfoSection'
import FAQSection from '@/components/FAQSection'
import ContactCTASection from '@/components/ContactCTASection'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ContactHeroSection />
      {/* <ContactInfoSection /> */}
      <ContactFormSection />
      <FAQSection />
      <ContactCTASection />
      <Footer />
    </div>
  )
}
