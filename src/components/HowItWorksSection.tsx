'use client'

import Image from 'next/image'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

const steps = [
  {
    img: '/assets/reigner-platform1.jpg',
    step: '01',
    stepLabel: 'STEP 01 — DISCOVER',
    title: 'Find something',
    subtitle: 'that excites you.',
    desc: 'Open the app and browse hundreds of cultural events near you. Filter by food, music, art or community — the whole experience is in the app.',
    cta: 'Available on the 234Reigners App',
    ctaColor: 'bg-[#D0982A]',
    badgeColor: 'bg-[#D0982A]',
    position: 'left',
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path
          fillRule="evenodd"
          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    img: '/assets/reigner-platform2.jpg',
    step: '02',
    stepLabel: 'STEP 02 — RESERVE',
    title: 'Claim your spot.',
    subtitle: 'No payment needed.',
    desc: 'Reserve your place in seconds through the app. No credit card, no complicated forms. Just confirm and your seat is held for you.',
    cta: 'Available on the 234Reigners app',
    ctaColor: 'bg-[#E45F6D]',
    badgeColor: 'bg-[#E45F6D]',
    position: 'right',
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
        <path
          fillRule="evenodd"
          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    img: '/assets/reigner-platform3.jpg',
    step: '03',
    stepLabel: 'STEP 03 — EXPERIENCE',
    title: 'Show up and',
    subtitle: 'live it fully.',
    desc: 'Arrive, eat, dance, create and belong. Every event is a chance to discover something — or someone — that stays with you long after.',
    cta: 'Check back soon for the app',
    ctaColor: 'bg-[#D0982A]',
    badgeColor: 'bg-[#D0982A]',
    position: 'left',
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    img: '/assets/reigner-platform4.jpg',
    step: '04',
    stepLabel: 'STEP 04 — CONNECT',
    title: 'Find your',
    subtitle: 'tribe.',
    desc: "After the event, the community stays alive in the app. Meet others who attended, share moments and get notified about what's coming next.",
    cta: 'Available on the 234Reigners app',
    ctaColor: 'bg-[#58BD62]',
    badgeColor: 'bg-[#58BD62]',
    position: 'right',
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
  },
]

export default function HowItWorksSection() {
  return (
    <section id="approach" className="py-12 sm:py-20 bg-[#1A1A1A] text-white relative">
      {/* <div className="absolute inset-0">
        <Image src="/assets/what-we-do-bg.png" alt="Background" fill className="object-cover" />
      </div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <p className="text-gold text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            Our Platform
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-2">Four steps from our</h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gold mb-6">
            platform to the moment.
          </h2>
          <div className="flex justify-center px-4">
            <p className="text-white max-w-2xl mx-auto text-sm sm:text-base text-center">
              Everything happens through the 234Reigners mobile app. From discovering events that
              inspire, straight down to connecting with your community after.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-12 sm:space-y-20">
          {steps.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row gap-6 sm:gap-8 items-center ${
                item.position === 'right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="relative h-64 sm:h-80 md:h-[400px]">
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                  </div>
                  <div
                    className={`absolute top-4 left-4 sm:top-6 sm:left-6 ${item.badgeColor} text-white w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-bold text-lg sm:text-xl`}
                  >
                    {item.step}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                    <button
                      className={`${item.ctaColor} text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold hover:opacity-90 transition inline-flex items-center gap-2`}
                    >
                      {item.cta}
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 w-full">
                <div className="inline-flex items-center gap-2 bg-[#F47F2F1A] px-3 py-2 rounded-2xl mb-4">
                  {item.icon}
                  <span className="text-white text-xs font-semibold tracking-wider uppercase">
                    {item.stepLabel}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-2">{item.title}</h3>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6">
                  {item.subtitle}
                </h3>
                <p className="text-white text-sm sm:text-base mb-6">{item.desc}</p>
                <div className="flex gap-2">
                  {[...Array(4)].map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full ${
                        idx === i ? item.badgeColor : 'bg-gray-600'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
