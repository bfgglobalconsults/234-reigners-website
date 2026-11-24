'use client'

import Image from 'next/image'
import Link from 'next/link'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

const statistics = [
  {
    id: 1,
    percentage: '25%',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    title: 'Adult Mental Health Prevalence',
    description: '1 in 4 adults experiences a mental health problem each year.',
    source: 'Source: Mental Health & Wellbeing Survey, 2026',
  },
  {
    id: 2,
    percentage: '20%',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    title: 'Common Mental Health Disorders',
    description:
      '1 in 5 adults experiences symptoms of anxiety, depression or another common mental health disorder in a given week.',
    source: 'Source: Mental Health & Wellbeing Survey, 2026',
  },
  {
    id: 3,
    percentage: '12%',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    title: 'Severe Mental Illness Symptoms',
    description:
      'Nearly 12% of adults report symptoms associated with severe mental illness in a given week.',
    source: 'Source: Mental Health & Wellbeing Survey, 2026',
  },
]

export default function WhoWeAreSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollAnimationWrapper animation="fadeIn">
          <div className="mb-12 lg:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Who We <span className="text-green-600">Are.</span>
            </h2>
            <p className="text-lg text-gray-700">
              Building Connections. Nurturing Mental Wellbeing.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Illustration Side */}
          <ScrollAnimationWrapper animation="fadeInLeft">
            <div className="relative bg-[#FEFADE] rounded-3xl p-8 lg:p-12">
              <Image
                src="/assets/social-banner.png"
                alt="Diverse group of people connecting"
                width={800}
                height={800}
                className="w-full h-auto object-cover rounded-3xl"
                priority
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                  aria-label="Play video"
                >
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Text Content Side */}
          <ScrollAnimationWrapper animation="fadeInRight">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Harnessing Culture, Advancing Mental Wellbeing.
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                We advocate for mental health and cultivates holistic wellbeing by harnessing food,
                music, art and storytelling as powerful engines for deep social connection. Rooted
                in Brighton, our purpose reaches across the UK to create the conditions for people
                to feel recognised, emotionally supported and connected across cultures and
                generations
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors group"
              >
                Read Our Story
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
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {statistics.map((stat, index) => (
            <ScrollAnimationWrapper key={stat.id} animation="fadeIn" delay={index * 100}>
              <div className={`${stat.bgColor} rounded-2xl p-6 h-full`}>
                <div className={`text-5xl md:text-6xl font-bold ${stat.color} mb-4`}>
                  {stat.percentage}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{stat.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{stat.description}</p>
                <p className="text-xs text-gray-500 italic">{stat.source}</p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
