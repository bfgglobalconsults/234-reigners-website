import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative pt-21 pb-16 mt-25 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/reigners-banner.jpg"
          alt="Hero"
          fill
          className="object-cover brightness-10"
          priority
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
          Connecting
          <span className="text-gold"> Cultures</span>
        </h1>
        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">Across The UK.</h1>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto my-20">
          234Reigners is a technology-enabled intercultural experience platform that connects people
          through curated cultural events, food, music and community-driven experiences. Our
          platform allows you to discover, book and engage with cultural experiences across cities,
          both digitally and through our physical experience hubs.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="#" className="hover:opacity-80 transition">
            <Image
              src="/assets/reigners-googleplay.png"
              alt="Get it on Google Play"
              width={160}
              height={48}
            />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <Image
              src="/assets/reigners-appstore.png"
              alt="Download on the App Store"
              width={160}
              height={48}
            />
          </a>
        </div>
      </div>
    </section>
  )
}
