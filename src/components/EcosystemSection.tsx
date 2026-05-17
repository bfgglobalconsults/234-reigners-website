import Image from 'next/image'

export default function EcosystemSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="text-center mb-16">
          <div className="text-gold text-sm mb-4 font-semibold tracking-wider">WHAT WE DO</div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            How We Bring
            <br />
            <span className="text-gold">Culture to Life.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything at 234Reigners is connected - experiences, community, real spaces, and a
            mobile app that ties it all together.
          </p>
        </div>

        {/* Center Image with Orbiting Icons */}
        <div className="relative flex items-center justify-center mb-16 py-12">
          {/* Dotted circles background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[400px] h-[400px] rounded-full border-2 border-dashed border-gray-300 opacity-40"></div>
            <div className="absolute w-[500px] h-[500px] rounded-full border-2 border-dashed border-gray-300 opacity-30"></div>
            <div className="absolute w-[600px] h-[600px] rounded-full border-2 border-dashed border-gray-300 opacity-20"></div>
          </div>

          {/* Center Phone Image */}
          <div className="relative z-10">
            <Image
              src="/assets/reigner-comingsoon-banner.jpg"
              alt="234Reigners App"
              width={300}
              height={600}
              className="rounded-3xl shadow-2xl"
            />
          </div>

          {/* Orbiting Icons */}
          <div className="absolute top-1/4 right-1/4 w-14 h-14 bg-red-400 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">👥</span>
          </div>
          <div className="absolute top-1/3 left-1/4 w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">🎭</span>
          </div>
          <div className="absolute bottom-1/3 right-1/3 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">📱</span>
          </div>
          <div className="absolute bottom-1/4 left-1/3 w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">🏛️</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-serif mb-4">
            One ecosystem.
            <br />
            Infinite experiences.
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At 234Reigners, everything is interconnected. Real experiences happen in physical hubs,
            community is built around shared culture, and the app ties everything together so you
            never miss a moment.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl">🎭</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">Cultural Experiences</h4>
                <p className="text-gray-600">
                  Immersive workshops, dining events, and live performances that celebrate Nigerian
                  heritage and bring people together.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-xl border border-red-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-400 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl">👥</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">Community Engagement</h4>
                <p className="text-gray-600">
                  Connect with others who share your passion for culture. Build lasting
                  relationships through shared experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl">🏛️</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">Physical Hubs</h4>
                <p className="text-gray-600">
                  Dedicated spaces where culture comes alive. From pop-up events to permanent venues
                  across the globe.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-xl border border-green-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl">📱</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">Digital Platform</h4>
                <p className="text-gray-600">
                  Book experiences, connect with community, and stay updated on events - all in one
                  seamless mobile app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
