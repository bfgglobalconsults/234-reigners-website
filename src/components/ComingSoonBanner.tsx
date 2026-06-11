'use client'

import Image from 'next/image'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function ComingSoonBanner() {
  return (
    <section className="relative h-[400px] md:h-[500px] flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <Image
          src="/assets/reigner-comingsoon-banner.jpg"
          alt="Coming Soon"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(101.41deg, rgba(41, 66, 45, 0.9) 0%, rgba(39, 57, 41, 0.9) 51.2%, rgba(34, 42, 35, 0.9) 100%)',
          }}
        ></div>
      </div>
      <ScrollAnimationWrapper animation="fadeIn">
        <div className="relative z-10 text-center px-6">
          {/* <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">COMING SOON</p> */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 max-w-4xl mx-auto">
            Download the app and your next great experience awaits
          </h2>
          <button className="bg-gold text-black px-8 py-3 rounded-full font-semibold hover:opacity-90 transition inline-flex items-center gap-2">
            Get the App
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </ScrollAnimationWrapper>
    </section>
  )
}
