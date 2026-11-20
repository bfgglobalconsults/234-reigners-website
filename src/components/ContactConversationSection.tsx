'use client'

import Link from 'next/link'
import Image from 'next/image'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function ContactConversationSection() {
  return (
    <section className="py-16 lg:py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Icon/Graphic */}
          <ScrollAnimationWrapper animation="fadeInLeft">
            <div className="flex justify-center lg:justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/assets/red-ribbon.png"
                  width={300}
                  height={300}
                  alt="Contact Us Ribbon"
                  className="w-full h-full object-contain drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Right Side - Content */}
          <ScrollAnimationWrapper animation="fadeInRight">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Let's Start a Conversation.
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Whether you have a question, want to explore our cultural wellbeing experiences or
                are interested in working together, we'd love to hear from you.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                {/* Phone */}
                <a
                  href="tel:+447911123456"
                  className="flex items-center gap-4 text-gray-900 hover:text-green-600 transition group"
                >
                  <div className="w-6 h-6 flex-shrink-0">
                    <svg
                      className="w-full h-full"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-medium">+44 7911 123456</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@234reigners.com"
                  className="flex items-center gap-4 text-gray-900 hover:text-green-600 transition group"
                >
                  <div className="w-6 h-6 flex-shrink-0">
                    <svg
                      className="w-full h-full"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-medium">hello@234reigners.com</span>
                </a>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-semibold text-sm transition-colors group"
              >
                CONTACT US
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
      </div>
    </section>
  )
}
