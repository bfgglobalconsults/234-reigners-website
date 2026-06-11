'use client'

import Image from 'next/image'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function OurStorySection() {
  return (
    <section id="about" className="py-20 bg-cream relative">
      {/* <div className="absolute inset-0">
        <Image src="/assets/what-we-do-bg.png" alt="Background" fill className="object-cover" />
      </div> */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image with Badge */}
          <ScrollAnimationWrapper animation="fadeInLeft">
            <div className="relative">
              <div className="relative h-200 rounded-3xl overflow-hidden">
                <Image
                  src="/assets/reigner-ourstory.jpg"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Badge Overlay */}
              <div className="absolute top-8 left-8 bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 relative">
                    <Image
                      src="/assets/globe-icon.png"
                      alt="Globe"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xl text-black font-bold">40+ Cultures</span>
                </div>
                <div className="text-xs text-gray-500">Represented & celebrated</div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Right Side - Content */}
          <ScrollAnimationWrapper animation="fadeInRight" delay={200}>
            <div>
              <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
                OUR STORY
              </p>
              <h2 className="text-4xl md:text-5xl text-black font-serif mb-4">Born from culture</h2>
              <h2 className="text-4xl md:text-5xl font-serif text-gold mb-6">Built for people.</h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                234Reigners started with a simple feeling: that the richest experiences in life
                happen when people come together around culture — food, music, art, and belonging.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                In a world where loneliness and social disconnection are quietly feeding depression
                for many people, we saw a deeper problem beyond just finding events — people were
                struggling to find real community. We also saw how hard it was to discover
                meaningful cultural experiences, let alone actually get there.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                234Reigners is an intercultural community platform built to bridge that gap —
                helping people move from isolation to connection through shared experiences rooted
                in culture. By making it easy to discover events, hold your spot, and show up, the
                platform helps combat loneliness and creates moments of belonging that support
                emotional wellbeing.
              </p>

              <p className="text-gray-700 mb-8 leading-relaxed">
                We are community-first, using technology as a quiet tool — to surface the events
                worth your time, make participation effortless, and ensure you never miss the
                moments that matter.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#D0982A1A] p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-gold mb-2">500+</div>
                  <div className="text-gray-600 text-sm">Events Monthly</div>
                </div>
                <div className="bg-[#D0982A1A] p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-gold mb-2">12k+</div>
                  <div className="text-gray-600 text-sm">Community Members</div>
                </div>
                <div className="bg-[#D0982A1A] p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-gold mb-2">30+</div>
                  <div className="text-gray-600 text-sm">Cities Covered</div>
                </div>
                <div className="bg-[#D0982A1A] p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-gold mb-2">4</div>
                  <div className="text-gray-600 text-sm">Years Running</div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}
