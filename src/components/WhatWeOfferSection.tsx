import Image from 'next/image'

const offerings = [
  {
    icon: '/assets/offer-culture.png',
    title: 'Cultural Workshops',
    description:
      'Hands-on sessions in Afro-heritage crafts, cooking techniques, traditional dance and storytelling.',
    cta: 'Explore workshops',
    link: '#workshops',
  },
  {
    icon: '/assets/offer-dining.png',
    title: 'Dining Experiences',
    description:
      'Curated supper clubs, pop-up restaurants and communal feasts celebrating global cuisines.',
    cta: 'Book a table',
    link: '#dining',
  },
  {
    icon: '/assets/offer-entertainment.png',
    title: 'Live Entertainment',
    description: 'Afrobeats, Highlife, Jazz, spoken word and performance nights across London.',
    cta: 'See shows',
    link: '#entertainment',
  },
  {
    icon: '/assets/offer-venue.png',
    title: 'Venue Hire',
    description:
      'Host your own cultural event in one of our partner spaces - curated for community moments.',
    cta: 'Enquire now',
    link: '#venue',
  },
]

export default function WhatWeOfferSection() {
  return (
    <section className="py-20 bg-cream relative">
      <div className="absolute inset-0">
        <Image src="/assets/what-we-do-bg.png" alt="Background" fill className="object-cover" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Side - Heading */}
          <div>
            <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
              WHAT WE OFFER
            </p>
            <h2 className="text-4xl text-black md:text-5xl font-serif mb-4">Four ways to live</h2>
            <h2 className="text-4xl md:text-5xl font-serif text-gold">Culture fully.</h2>
          </div>

          {/* Right Side - Description */}
          <div className="flex items-end h-full">
            <p className="text-gray-600 text-sm">
              Whether you come for the food, the music, the art or the people -- there is always a
              door open for you.
            </p>
          </div>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition duration-300"
            >
              <div className="w-16 h-16 bg-[#D0982A33] rounded-md p-6 mb-6 relative">
                <Image src={item.icon} alt={item.title} fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{item.description}</p>
              <a
                href={item.link}
                className="text-gold text-sm font-semibold hover:underline inline-flex items-center gap-1"
              >
                {item.cta}
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
          ))}
        </div>
      </div>
    </section>
  )
}
