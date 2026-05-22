import Image from 'next/image'

export default function CultureToLifeSection() {
  return (
    <section className="relative py-20 bg-[#FAF8F5]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/assets/what-we-do-bg.png" alt="" fill className="object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-gold text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            WHAT WE DO
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-serif mb-4">
            How We Bring
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gold mb-6">
            Culture to Life.
          </h2>
          <div className="flex justify-center px-4">
            <p className="text-gray-600 max-w-2xl text-center text-sm sm:text-base">
              Everything at 234Reigners is connected - experiences, community, real spaces, and a
              mobile app that ties it all together.
            </p>
          </div>
        </div>

        {/* Central Visual */}
        <div className="relative flex justify-center items-center mb-12 sm:mb-20 min-h-[300px] sm:min-h-[500px]">
          {/* Circular dotted lines background - hidden on mobile */}
          <div className="absolute inset-0 hidden sm:flex justify-center items-center">
            <div className="relative w-[400px] sm:w-[600px] h-[400px] sm:h-[600px]">
              {/* Outer circle */}
              <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full"></div>
              {/* Middle circle */}
              <div className="absolute inset-[15%] border-2 border-dashed border-gray-300 rounded-full"></div>
              {/* Inner circle */}
              <div className="absolute inset-[30%] border-2 border-dashed border-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* Floating Icons - hidden on mobile */}
          <div className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] hidden sm:block">
            {/* Top Right - Community */}
            <div className="absolute top-[10%] right-[15%] w-12 h-12 bg-[#E57373] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>

            {/* Right - Digital Platform */}
            <div className="absolute top-[45%] right-[5%] w-12 h-12 bg-[#81C784] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>

            {/* Bottom - Physical Hubs */}
            <div className="absolute bottom-[15%] left-[35%] w-12 h-12 bg-[#FFB74D] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Left - Cultural Experiences */}
            <div className="absolute top-[35%] left-[5%] w-12 h-12 bg-[#FF9800] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Central Phone and Card */}
          <div className="relative z-10">
            <Image
              src="/assets/reigner-banner.png"
              alt="234Reigners Platform"
              width={300}
              height={375}
              className="drop-shadow-2xl sm:w-[400px] sm:h-[500px]"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-black font-serif mb-4">
            One ecosystem.
          </h3>
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-black font-serif mb-6">
            Infinite experiences.
          </h3>
          <div className="flex justify-center">
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              At 234Reigners, everything is interconnected. Real experiences happen in physical
              hubs, community is built around shared culture, and the app ties everything together
              so you never miss a moment.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Cultural Experiences */}
          <div className="bg-[#FFF4E6] border-2 border-[#FF9800] shadow-md  p-4 sm:p-6 rounded-lg">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FF9800] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-base sm:text-lg text-[#F47F2F] font-semibold mb-1">
                  Cultural Experiences
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Where Culture Becomes A Living Moment.
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Immersive events spanning music, food, storytelling, and creative showcases.
                </p>
              </div>
            </div>
          </div>

          {/* Community Engagement */}
          <div className="bg-[#FCE4EC] border-2 border-[#E57373] shadow-md  p-4 sm:p-6 rounded-lg">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E57373] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base sm:text-lg text-[#E45F6D] font-semibold mb-1">
                  Community Engagement
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Where Strangers Become Part of Something.
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Spaces that foster real connection, belonging, and shared cultural interactions.
                </p>
              </div>
            </div>
          </div>

          {/* Physical Hubs */}
          <div className="bg-[#FFF9E6] border-2 border-[#FFB74D] shadow-md p-4 sm:p-6 rounded-lg">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FFB74D] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-base sm:text-lg text-[#D0982A] font-semibold mb-1">
                  Physical Hubs
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">Where Events Find Their Home.</p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Real-world venues and environments. From intimate pop-ups to largescale cultural
                  festivals.
                </p>
              </div>
            </div>
          </div>

          {/* Digital Platform */}
          <div className="bg-[#E8F5E9] border-2 border-[#81C784] shadow-md p-4 sm:p-6 rounded-lg">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#81C784] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base sm:text-lg text-[#58BD62] font-semibold mb-1">
                  Digital Platform
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Where Discovery Happens First.
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  The mobile app that connects everything digitally -
                  discover events, reserve spots and stay plugged into culture across cities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
