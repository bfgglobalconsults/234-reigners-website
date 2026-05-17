import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-serif mb-6">
            Bridging cultures
            <br />
            <span className="text-gold">through experience.</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            At 234 Reigners, we believe culture is meant to be lived, not just observed. We create
            immersive experiences that bring people together.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-sm text-gray-600">Events Hosted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-sm text-gray-600">Countries Reached</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
