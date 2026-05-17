import Image from 'next/image'

export default function WhatWeDoSection() {
  return (
    <section className="relative py-20 bg-[#f5f3f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#d4a574] text-sm font-medium tracking-wider uppercase mb-4">
            WHAT WE DO
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">How We Bring</h2>
          <h2 className="text-4xl md:text-5xl font-serif text-[#d4a574] mb-6">Culture to Life.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything at 234Reigners is connected - experiences, community, real spaces, and a
            mobile app that ties it all together.
          </p>
        </div>

        {/* Central Image with Orbiting Icons */}
        <div className="relative flex justify-center items-center mb-20 min-h-[600px]">
          {/* Dotted circles */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[500px] h-[500px] border-2 border-dotted border-gray-300 rounded-full"></div>
            <div className="absolute w-[350px] h-[350px] border-2 border-dotted border-gray-300 rounded-full"></div>
          </div>

          {/* Central devices */}
          <div className="relative z-10">
            <Image
              src="/assets/reigner-banner.png"
              alt="234Reigners App"
              width={300}
              height={600}
              className="drop-shadow-2xl"
            />
          </div>

          {/* Orbiting icons */}
          <div className="absolute w-[500px] h-[500px]">
            {/* Community Engagement - Top Right */}
            <div className="absolute top-[15%] right-[10%] w-12 h-12 bg-[#e57373] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>

            {/* Cultural Experiences - Top Left */}
            <div className="absolute top-[25%] left-[5%] w-12 h-12 bg-[#ff9800] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>

            {/* Digital Platform - Right */}
            <div className="absolute top-[50%] right-[5%] w-12 h-12 bg-[#66bb6a] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Physical Hubs - Bottom */}
            <div className="absolute bottom-[15%] left-[35%] w-12 h-12 bg-[#d4a574] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-serif mb-2">One ecosystem.</h3>
          <h3 className="text-3xl md:text-4xl font-serif mb-6">Infinite experiences.</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At 234Reigners, everything is interconnected. Real experiences happen in physical hubs,
            community is built around shared culture, and the app ties everything together so you
            never miss a moment.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#fff4e6] p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#ff9800] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[#ff9800] font-semibold mb-2">Cultural Experiences</h4>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Dictum ordo aliquet ornare dolor sem.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#fce4ec] p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#e57373] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[#e57373] font-semibold mb-2">Community Engagement</h4>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Pellentesque turpis nunc.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#fff9e6] p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#d4a574] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-[#d4a574] font-semibold mb-2">Physical Hubs</h4>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Feugiat sit vitae tempus.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#e8f5e9] p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#66bb6a] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-[#66bb6a] font-semibold mb-2">Digital Platform</h4>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Massa imperdiet quam amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
