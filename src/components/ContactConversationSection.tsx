'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

const faqs = [
  {
    question: 'What is 234Reigners?',
    answer: '234Reigners is a cultural wellbeing organization that creates welcoming spaces supporting mental wellbeing through culture, creativity, and meaningful human connection.',
  },
  {
    question: 'How do your cultural experiences support mental wellbeing?',
    answer: 'Our cultural experiences are designed to combat anxiety, depression, and feelings of isolation by bringing people together through shared cultural activities, creativity, and community engagement.',
  },
  {
    question: 'Who can participate in your experiences?',
    answer: 'Our experiences are open to everyone seeking to improve their mental wellbeing through cultural connection. We welcome people from all backgrounds and communities.',
  },
  {
    question: 'How can I join an upcoming event?',
    answer: 'You can browse our upcoming events on the Experiences page and register directly. We regularly update our calendar with new cultural activities and wellbeing experiences.',
  },
  {
    question: 'How can I volunteer or partner with 234Reigners?',
    answer: 'We welcome volunteers and partners who share our vision. Visit our Contact page or reach out to us directly to discuss opportunities for collaboration.',
  },
]

export default function ContactConversationSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Card */}
          <ScrollAnimationWrapper animation="fadeInLeft">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                Have Questions?
              </h2>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
                We're Here to Help. Find out more about our cultural wellbeing experiences, community activities and ways to get involved.
              </p>

              {/* Get in Touch Card */}
              <div className="bg-green-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                {/* Avatar Group */}
                <div className="inline-flex -space-x-3 bg-white rounded-3xl mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500 border-4 border-white overflow-hidden">
                    <Image
                      src="/assets/avatar1.jpg"
                      alt="Team member"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-500 border-4 border-white overflow-hidden">
                    <Image
                      src="/assets/avatar2.jpg"
                      alt="Team member"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500 border-4 border-white overflow-hidden">
                    <Image
                      src="/assets/avatar3.jpg"
                      alt="Team member"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Still have a question?
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-600 mb-5 sm:mb-6">
                  We're happy to hear from you and help you find the right place to start.
                </p>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 sm:py-3 rounded-full font-semibold transition-colors group w-full text-sm sm:text-base"
                >
                  Get in Touch
                  <svg
                    className="w-5 h-5"
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
            </div>
          </ScrollAnimationWrapper>

          {/* Right Side - FAQ Accordion */}
          <ScrollAnimationWrapper animation="fadeInRight">
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-100 transition-colors min-h-[56px] sm:min-h-[60px]"
                  >
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 pr-3 sm:pr-4 leading-snug">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-gray-900 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}
