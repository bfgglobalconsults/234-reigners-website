'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

const services = [
  {
    id: 1,
    title: 'Curated Cultural Wellbeing Experiences',
    description:
      'Opportunities for adults to meet, share experiences and build meaningful community relationships.',
    bgColor: 'bg-green-50',
    hoverColor: 'hover:text-green-600',
    image: '/assets/carnival.jpg',
    link: '/services/cultural-wellbeing',
  },
  {
    id: 2,
    title: 'Social Connection Gatherings',
    description:
      'Opportunities for adults to meet, share experiences and build meaningful community relationships.',
    bgColor: 'bg-orange-50',
    hoverColor: 'hover:text-orange-600',
    image: '/assets/laughter.png',
    link: '/services/social-connection',
  },
  {
    id: 3,
    title: 'Intercultural Expression Workshops',
    description:
      'Opportunities for adults to meet, share experiences and build meaningful community relationships.',
    bgColor: 'bg-pink-50',
    hoverColor: 'hover:text-pink-600',
    image: '/assets/workshop.png',
    link: '/services/workshops',
  },
  {
    id: 4,
    title: 'Inter-traditional Carnivals and Festivals',
    description:
      'Opportunities for adults to meet, share experiences and build meaningful community relationships.',
    bgColor: 'bg-gray-100',
    hoverColor: 'hover:text-gray-600',
    image: '/assets/festival.png',
    link: '/services/festivals',
  },
]

export default function SubHeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Decorative curved line */}
      <div className="absolute left-0 top-0 bottom-0 w-32 opacity-20">
        <svg
          viewBox="0 0 100 800"
          className="w-full h-full"
          preserveAspectRatio="none"
          fill="none"
          stroke="#D0982A"
          strokeWidth="2"
        >
          <path d="M 0 0 Q 50 200 0 400 Q 50 600 0 800" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Cards Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollAnimationWrapper
              key={service.id}
              animation="fadeIn"
              delay={index * 100}
            >
              <div className={`${service.bgColor} rounded-2xl p-6 h-[600px] flex flex-col`}>
                {/* Card Header */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Discover More Link */}
                <Link
                  href={service.link}
                  className={`inline-flex items-center gap-2 text-sm font-semibold text-gray-900 ${service.hoverColor} transition mb-4 group`}
                >
                  Discover more
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>

                {/* Card Image */}
                <div className="relative -mx-6 -mb-6 flex-1 rounded-bl-2xl rounded-tr-2xl overflow-hidden mt-auto min-h-[200px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Carousel - Mobile/Tablet */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Current Card */}
            <div className={`${services[currentIndex].bgColor} rounded-2xl p-6 flex flex-col min-h-[500px]`}>
              {/* Card Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {services[currentIndex].title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {services[currentIndex].description}
                </p>
              </div>

              {/* Discover More Link */}
              <Link
                href={services[currentIndex].link}
                className={`inline-flex items-center gap-2 text-sm font-semibold text-gray-900 ${services[currentIndex].hoverColor} transition mb-4 group`}
              >
                Discover more
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>

              {/* Card Image */}
              <div className="relative -mx-6 -mb-6 flex-1 rounded-bl-2xl rounded-tr-2xl overflow-hidden min-h-[250px]">
                <Image
                  src={services[currentIndex].image}
                  alt={services[currentIndex].title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition shadow-sm"
                aria-label="Previous"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-cream hover:bg-yellow-100 flex items-center justify-center transition shadow-sm"
                aria-label="Next"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-gray-900 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
