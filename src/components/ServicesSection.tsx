import Image from 'next/image'

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-12 sm:py-20 bg-[#FAF8F5]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/assets/what-we-do-bg.png" alt="" fill className="object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 sm:mb-12">
          <div>
            <p className="text-gold text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
              EXPLORE BY CATEGORY
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-serif mb-2">
              Find what moves
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gold">your spirit.</h2>
          </div>
          <div className="text-left md:text-right max-w-xs">
            <p className="text-gray-600 text-xs sm:text-sm">
              From the table to the stage -- discover experiences across every dimension of culture.
            </p>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Music & Entertainment */}
          <div className="bg-[#D0982A1A] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group">
            <div className="relative h-40 sm:h-48">
              <Image
                src="/assets/reigner-category.jpg"
                alt="Music & Entertainment"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white text-black px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                200+ Events
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFF4E6] rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Image
                  src="/assets/reigner-music.png"
                  alt="Music icon"
                  width={20}
                  height={20}
                  className="object-contain sm:w-[24px] sm:h-[24px]"
                />
              </div>
              <h3 className="text-lg sm:text-xl text-black font-serif mb-2">
                Music & Entertainment
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                Live concerts, DJ nights, open mics. Afrobeat sessions and performances that make
                you move.
              </p>
              <a
                href="#"
                className="text-[#D0982A] font-semibold text-xs sm:text-sm hover:underline inline-flex items-center gap-2"
              >
                Browse
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Culture & Creativity */}
          <div className="bg-[#E45F6D1A] text-black rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group">
            <div className="relative h-48">
              <Image
                src="/assets/reigner-category2.jpg"
                alt="Culture & Creativity"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 text-black bg-white px-3 py-1 rounded-full text-sm font-semibold">
                80+ Events
              </div>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-[#FFF4E6] rounded-lg flex items-center justify-center mb-4">
                <Image
                  src="/assets/reigner-culture.png"
                  alt="Culture icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl text-black font-serif mb-2">Culture & Creativity</h3>
              <p className="text-gray-600 text-sm mb-4">
                Art exhibitions, storytelling nights, fashion showcases, film screenings, and
                creative workshops.
              </p>
              <a
                href="#"
                className="text-[#E45F6D] font-semibold text-sm hover:underline inline-flex items-center gap-2"
              >
                Browse
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Community & Social */}
          <div className="bg-[#58BD621A] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group">
            <div className="relative h-48">
              <Image
                src="/assets/reigner-category4.jpg"
                alt="Community & Social"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">
                90+ Events
              </div>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-[#E3F2FD] rounded-lg flex items-center justify-center mb-4">
                <Image
                  src="/assets/reigner-community.png"
                  alt="Community icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl text-black font-serif mb-2">Community & Social</h3>
              <p className="text-gray-600 text-sm mb-4">
                Meet-ups, cultural forums, networking socials and gatherings where real connections
                are made.
              </p>
              <a
                href="#"
                className="text-[#58BD62] font-semibold text-sm hover:underline inline-flex items-center gap-2"
              >
                Browse
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Food & Dining */}
          <div className="bg-[#F47F2F1A] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group">
            <div className="relative h-48">
              <Image
                src="/assets/reigner-category5.jpg"
                alt="Food & Dining"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">
                120+ Events
              </div>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-[#FFF4E6] rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                <Image
                  src="/assets/reigner-food.png"
                  alt="Food"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl text-black font-serif mb-2">Food & Dining</h3>
              <p className="text-gray-600 text-sm mb-4">
                Pop-up dinners, street food markets, chef tables and tasting tours that turn eating
                into an experience.
              </p>
              <a
                href="#"
                className="text-[#F47F2F] font-semibold text-sm hover:underline inline-flex items-center gap-2"
              >
                Browse
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
