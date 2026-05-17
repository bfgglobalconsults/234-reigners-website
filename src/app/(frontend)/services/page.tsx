import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-serif mb-6">
            Our <span className="text-gold">Services</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Discover the cultural experiences we offer to bring communities together.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
