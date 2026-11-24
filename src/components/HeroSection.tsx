'use client'

import Image from 'next/image'
import Link from 'next/link'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <ScrollAnimationWrapper animation="fadeIn">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-red-500 rounded-full">
                <div className="w-6 h-6 flex items-center justify-center">
                  <Image
                    src="/assets/ribbon.svg"
                    alt="Ribbon icon"
                    width={20}
                    height={20}
                    className="text-red-500"
                  />
                </div>
                <span className="text-sm font-medium text-black">
                  Intercultural Experience To Mental Wellbeing
                </span>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fadeInLeft" delay={100}>
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold text-gray-900">
                Mental wellbeing through Intercultural Experience.
              </h1>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fadeInLeft" delay={200}>
              {/* Description */}
              <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                Facing anxiety, depression or feelings of isolation can be difficult. We create
                welcoming spaces supporting mental wellbeing through culture, creativity and
                meaningful human connection.
              </p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fadeIn" delay={300}>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/experiences"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition font-medium"
                >
                  Explore Experiences
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://www.youtube.com/@234Reigners"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-red-600 hover:bg-red-600 hover:text-white text-gray-900 px-6 py-3 rounded-full transition font-medium group"
                >
                  <svg
                    className="w-5 h-5 text-red-600 group-hover:text-white transition-colors"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Find Us on Youtube
                </Link>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fadeIn" delay={400}>
              {/* Info Footer */}
              <div className="flex flex-col sm:flex-row gap-6 pt-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    fill="rgba(227,4,37,1)"
                  >
                    <path d="M12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995L16.9497 15.9497ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
                  </svg>
                  <span>Rooted in Brighton, reaching across the UK</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    fill="rgba(227,4,37,1)"
                  >
                    <path d="M11 2C15.0675 2 18.426 5.03562 18.9337 8.96494L21.1842 12.5037C21.3324 12.7367 21.3025 13.0847 20.9593 13.2317L19 14.071V17C19 18.1046 18.1046 19 17 19H15.001L15 22H6L6.00025 18.3061C6.00033 17.1252 5.56351 16.0087 4.7555 15.0011C3.65707 13.6313 3 11.8924 3 10C3 5.58172 6.58172 2 11 2ZM11 4C7.68629 4 5 6.68629 5 10C5 11.3849 5.46818 12.6929 6.31578 13.7499C7.40965 15.114 8.00036 16.6672 8.00025 18.3063L8.00013 20H13.0007L13.0017 17H17V12.7519L18.5497 12.0881L17.0072 9.66262L16.9501 9.22118C16.5665 6.25141 14.0243 4 11 4ZM10.4697 7.76256L11 8.29289L11.5303 7.76256C12.2137 7.07915 13.3218 7.07915 14.0052 7.76256C14.6886 8.44598 14.6886 9.55402 14.0052 10.2374L11 13.2426L7.9948 10.2374C7.31138 9.55402 7.31138 8.44598 7.9948 7.76256C8.67821 7.07915 9.78625 7.07915 10.4697 7.76256Z"></path>
                  </svg>
                  <span>Non-clinical - Complimentary to professional care</span>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>

          {/* Right Hero Image */}
          <ScrollAnimationWrapper animation="fadeInRight" delay={200}>
            <div className="relative w-full aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden group">
              <Image
                src="/assets/hero-new-img.png"
                alt="234reigners Hero"
                fill
                className="object-cover"
                priority
              />
              {/* YouTube Play Button Overlay */}
              <Link
                href="https://www.youtube.com/@234Reigners"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center z-10 transition-opacity hover:opacity-90"
              >
                <div className="relative w-20 h-20  transition-transform group-hover:scale-110 duration-300">
                  {/* Red Circle Background */}
                  <div className="absolute inset-0 bg-red-600 rounded-full shadow-2xl"></div>
                  {/* White Play Triangle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 ml-1"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}
