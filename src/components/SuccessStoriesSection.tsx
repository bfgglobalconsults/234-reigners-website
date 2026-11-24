'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

const stories = [
  {
    id: 1,
    title: 'Finding Belonging, One Connection at a Time.',
    author: 'Maleek Ibrahim',
    image: '/assets/first-man.jpg',
    link: '/stories/maleek-ibrahim',
  },
  {
    id: 2,
    title: 'Finding Belonging, One Connection at a Time.',
    author: 'Maleek Ibrahim',
    image: '/assets/second-man.jpg',
    link: '/stories/maleek-ibrahim-2',
  },
  {
    id: 3,
    title: 'Finding Her Voice Through Art and Storytelling.',
    author: 'Amara Smith',
    image: '/assets/third-man.jpg',
    link: '/stories/amara-smith',
  },
  {
    id: 4,
    title: 'Discovering Community Through Shared Experiences.',
    author: 'James Chen',
    image: '/assets/fourth-man.jpg',
    link: '/stories/james-chen',
  },
]

export default function SuccessStoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(stories.length - 3, prev + 1))
  }

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollAnimationWrapper animation="fadeIn">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-4">
              Discover Our Success Stories <br /> & Community{' '}
              <span className="text-green-600">Impact</span>
            </h2>
            <p className="text-lg text-gray-700">Real Stories. Meaningful Connections</p>
          </div>
        </ScrollAnimationWrapper>

        {/* Desktop Grid - Show 3 cards */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-6 mb-8">
            {stories.slice(currentIndex, currentIndex + 3).map((story, index) => (
              <ScrollAnimationWrapper key={story.id} animation="fadeIn" delay={index * 100}>
                <StoryCard story={story} />
              </ScrollAnimationWrapper>
            ))}
          </div>

          {/* Navigation Arrows - Desktop */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-14 h-14 rounded-full bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition shadow-sm border border-gray-200"
              aria-label="Previous stories"
            >
              <svg
                className="w-6 h-6 text-yellow-600"
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
              disabled={currentIndex >= stories.length - 3}
              className="w-14 h-14 rounded-full bg-cream-dark hover:bg-yellow-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition shadow-sm"
              aria-label="Next stories"
            >
              <svg
                className="w-6 h-6 text-yellow-600"
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
        </div>

        {/* Mobile/Tablet - Show 1 card at a time */}
        <div className="lg:hidden">
          <div className="mb-8">
            <StoryCard story={stories[currentIndex]} />
          </div>

          {/* Navigation Arrows - Mobile */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition shadow-sm border border-gray-200"
              aria-label="Previous story"
            >
              <svg
                className="w-5 h-5 text-yellow-600"
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
              onClick={() => setCurrentIndex((prev) => Math.min(stories.length - 1, prev + 1))}
              disabled={currentIndex >= stories.length - 1}
              className="w-12 h-12 rounded-full bg-cream-dark hover:bg-yellow-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition shadow-sm"
              aria-label="Next story"
            >
              <svg
                className="w-5 h-5 text-yellow-600"
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
          <div className="flex items-center justify-center gap-2 mt-6">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-green-600 w-8' : 'bg-gray-300 w-2'
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StoryCard({ story }: { story: (typeof stories)[0] }) {
  return (
    <Link
      href={story.link}
      className="group block relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-[450px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{story.title}</h3>
        <p className="text-white/90 text-sm mb-4">{story.author}</p>

        <div className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
          Read full story
          <svg
            className="w-5 h-5 text-yellow-500"
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
        </div>
      </div>
    </Link>
  )
}
