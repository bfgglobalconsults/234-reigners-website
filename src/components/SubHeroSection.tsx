'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

const services = [
  {
    id: 1,
    title: 'Curated Cultural Wellbeing Experiences',
    description:
      'Take time to unwind and recharge through shared cultural activities like music, rhythm and movement',
    bgColor: 'bg-green-50',
    hoverColor: 'hover:text-green-600',
    image: '/assets/carnival.jpg',
    link: '/services/cultural-wellbeing',
  },
  {
    id: 2,
    title: 'Social Connection Gatherings',
    description:
      'Meet new people, share a meal and get to know one another through relaxed conversation.',
    bgColor: 'bg-orange-50',
    hoverColor: 'hover:text-orange-600',
    image: '/assets/laughter.png',
    link: '/services/social-connection',
  },
  {
    id: 3,
    title: 'Intercultural Expression Workshops',
    description:
      'Get creative in hands-on workshops where you can share your own cultural traditions and learn from others.',
    bgColor: 'bg-pink-50',
    hoverColor: 'hover:text-pink-600',
    image: '/assets/workshop.png',
    link: '/services/workshops',
  },
  {
    id: 4,
    title: 'Inter-traditional Carnivals and Festivals',
    description:
      'Celebrate the many cultures in our community through live performances and festivities that bring different traditions together.',
    bgColor: 'bg-gray-100',
    hoverColor: 'hover:text-gray-600',
    image: '/assets/festival.png',
    link: '/services/festivals',
  },
  {
    id: 5,
    title: 'Workplace Cultural Wellbeing Experiences',
    description:
      'Give your team time to step away from the workday, connect with colleagues and explore different cultures through shared activities.',
    bgColor: 'bg-green-50',
    hoverColor: 'hover:text-green-600',
    image: '/assets/community-culture.png',
    link: '/services/workplace',
  },
  {
    id: 6,
    title: 'Community Cultural Wellbeing Programmes',
    description:
      'Join others in your local area for regular cultural activities that support wellbeing and build a sense of belonging.',
    bgColor: 'bg-orange-50',
    hoverColor: 'hover:text-orange-600',
    image: '/assets/workplace-culture.png',
    link: '/services/community',
  },
]

export default function SubHeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-rotate - every 5 seconds (both mobile and desktop)
  useEffect(() => {
    const interval = setInterval(() => {
      if (isMobile) {
        // Mobile: show one card at a time
        setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1))
      } else {
        // Desktop: slide by 1 card (showing 4 at a time)
        setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1))
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isMobile])

  const handlePrev = () => {
    // Go back one card
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1))
  }

  const handleNext = () => {
    // Go forward one card
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1))
  }

  // Get visible cards for desktop (4 cards at a time)
  const getVisibleCards = () => {
    const visibleCards = []
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % services.length
      visibleCards.push(services[index])
    }
    return visibleCards
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
      {/* header */}
      <ScrollAnimationWrapper animation="fadeIn">
        <div className="mb-12 lg:mb-16 max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
            Stay Ahead of Our <span className="text-green-600">Initiatives</span>
          </h2>
          <p className="text-lg text-gray-700">
            Explore our initiatives, designed to help you embrace the key forces of mental <br />{' '}
            wellbeing and get to wellness faster.
          </p>
        </div>
      </ScrollAnimationWrapper>
      {/* header end */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Cards Grid/Carousel - Desktop */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-4 gap-6">
            {getVisibleCards().map((service, index) => (
              <div
                key={`${service.id}-${currentIndex}-${index}`}
                className={`${service.bgColor} rounded-2xl p-6 h-[600px] flex flex-col animate-slideInRight`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card Header */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
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
                <div className="relative -mx-6 -mb-6 h-[280px] rounded-bl-2xl rounded-tr-2xl overflow-hidden mt-auto">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Navigation Arrows */}
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

          {/* Desktop Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? 'bg-gray-900 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Carousel - Mobile/Tablet */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Current Card */}
            <div
              className={`${services[currentIndex].bgColor} rounded-2xl p-6 flex flex-col min-h-[500px]`}
            >
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
              <div className="relative -mx-6 -mb-6 h-[280px] rounded-bl-2xl rounded-tr-2xl overflow-hidden min-h-[250px]">
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
