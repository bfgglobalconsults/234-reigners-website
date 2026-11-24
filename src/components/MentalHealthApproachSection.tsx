'use client'

import Link from 'next/link'
import Image from 'next/image'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function MentalHealthApproachSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Content */}
          <ScrollAnimationWrapper animation="fadeInLeft">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                From Mental Illness to Mental Wellbeing: Our Approach
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our approach places mental health advocacy and holistic wellbeing at the centre of
                cultural participation.
              </p>
              <Link
                href="/our-approach"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors group"
              >
                See Our Approach
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </ScrollAnimationWrapper>

          {/* Right Video Card bg-[6E0EF0]*/}
          <ScrollAnimationWrapper animation="fadeInRight">
            <div className="relative bg-[6E0EF0] rounded-3xl">
              <Image
                src="/assets/purple-bg.png"
                alt="Diverse group of people connecting"
                width={800}
                height={800}
                className="w-full h-auto object-cover rounded-3xl"
                priority
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="w-10 h-10 md:w-20 md:h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                  aria-label="Play video"
                >
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}
