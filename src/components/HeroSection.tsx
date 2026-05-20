import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 mt-16 sm:mt-20 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/reigners-banner.jpg"
          alt="Hero"
          fill
          className="object-cover brightness-10"
          priority
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-white text-center w-full">
        <h1 className="text-3xl sm:text-5xl font-serif md:text-7xl mb-4 sm:mb-6 leading-tight">
          Connecting
          <span className="text-gold"> Cultures</span>
        </h1>
        <h1 className="text-3xl sm:text-5xl font-serif md:text-7xl mb-4 sm:mb-6 leading-tight">
          Across The UK.
        </h1>
        <div className="flex justify-center">
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto my-8 sm:my-20 px-4">
            234Reigners is a technology-enabled intercultural experience platform that connects
            people through curated cultural events, food, music and community-driven experiences.
            Our platform allows you to discover, book and engage with cultural experiences across
            cities, both digitally and through our physical experience hubs.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-12 sm:mb-16">
          <a href="#" className="hover:opacity-80 transition w-full sm:w-auto">
            <Image
              src="/assets/reigners-googleplay.png"
              alt="Get it on Google Play"
              width={160}
              height={48}
              className="mx-auto"
            />
          </a>
          <a href="#" className="hover:opacity-80 transition w-full sm:w-auto">
            <Image
              src="/assets/reigners-appstore.png"
              alt="Download on the App Store"
              width={160}
              height={48}
              className="mx-auto"
            />
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">200+</div>
            <div className="text-xs sm:text-sm text-gray-300 tracking-wider">EVENTS YEARLY</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">5k+</div>
            <div className="text-xs sm:text-sm text-gray-300 tracking-wider">COMMUNITY MEMBERS</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">40+</div>
            <div className="text-xs sm:text-sm text-gray-300 tracking-wider">
              CULTURES CELEBRATED
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
