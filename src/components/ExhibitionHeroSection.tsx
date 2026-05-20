import Image from 'next/image'

export default function ExhibitionHeroSection() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 min-h-[70vh] flex items-center bg-[#1a1a1a]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/reigners-banner.jpg"
          alt="Exhibition Hero"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
      </div>
      <div className="relative z-10 max-w-7xl ml-10 px-4 sm:px-6 text-white">
        <div className="max-w-3xl">
          <p className="text-gold text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            EXHIBITIONS
          </p>
          <p className="text-sm sm:text-base text-gray-300 mb-6">Home / Exhibitions</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 leading-tight">
            African Culture
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
            African culture is a rich and diverse tapestry of traditions, languages, and customs
            that have evolved over thousands of years. It encompasses a wide range of artistic
            expressions, from music and dance to visual arts and storytelling.
          </p>
        </div>
      </div>
    </section>
  )
}
