import Image from 'next/image'

export default function ExhibitionIntroSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-cream">
      <div className="absolute inset-0 z-0">
        <Image src="/assets/what-we-do-bg.png" alt="" fill className="object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-2 mb-6">
              <span className="text-gold text-xs sm:text-sm font-semibold tracking-wider uppercase">
                ABOUT THIS EXHIBITION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 text-gray-900">
              Art that carries the weight of generations.
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The African Culture exhibition brings together over 120 works spanning sculpture,
              textiles, photography, beadwork, and mixed media. Each piece is selected not just for
              its visual power, but for the story it carries — of ritual, resistance, migration, and
              renewal.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              From Yoruba bronze castings to contemporary Ethiopian photography, this is a space
              where ancient tradition and modern voice exist side by side. The exhibition rotates
              quarterly, with new acquisitions and guest curators from across the diaspora.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div>
                <div className="text-3xl sm:text-4xl font-semibold text-gold mb-1">120+</div>
                <div className="text-sm text-gray-600">Works on Display</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-semibold text-gold mb-1">15</div>
                <div className="text-sm text-gray-600">African Nations</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-semibold text-gold mb-1">3</div>
                <div className="text-sm text-gray-600">Guest Curators</div>
              </div>
            </div>

            <button className="bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded-full transition font-semibold">
              Book Your Visit
            </button>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/reigner-exhibition1.jpg"
                alt="African Art"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mt-8">
              <Image
                src="/assets/reigner-exhibition2.jpg"
                alt="African Culture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
