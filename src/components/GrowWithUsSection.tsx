import Image from 'next/image'

const partners = [
  { name: 'CHOICE FM', logo: '/assets/partner-image.png' },
  { name: 'UNITY TRUST', logo: '/assets/partner-image.png' },
  { name: 'AFROBEATS', logo: '/assets/partner-image.png' },
  { name: 'OHEMAA FOODS', logo: '/assets/partner-image.png' },
  { name: 'BARBICAN', logo: '/assets/partner-image.png' },
  { name: 'ARTS COUNCIL', logo: '/assets/partner-image.png' },
]

const benefits = [
  'Brand Visibility',
  'Cultural Alignment',
  'Community Access',
  'Event Sponsorship',
  'Impact Reporting',
]

const stats = [
  {
    icon: '/assets/grow-people.png',
    value: '5000+',
    label: 'Active community members reached per event',
  },
  {
    icon: '/assets/grow-location.png',
    value: '40+',
    label: 'Cultural backgrounds represented in our network',
  },
  {
    icon: '/assets/grow-network.png',
    value: '30+',
    label: 'Active brand and institutional partnerships',
  },
  {
    icon: '/assets/grow-stats.png',
    value: '92%',
    label: 'Partner satisfaction and renewal rate',
  },
]

export default function GrowWithUsSection() {
  return (
    <section className="py-20 bg-cream relative">
      <div className="absolute inset-0">
        <Image src="/assets/what-we-do-bg.png" alt="Background" fill className="object-cover" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Side - Heading */}
          <div>
            <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
              GROW WITH US
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-900">The right people</h2>
            <h2 className="text-4xl md:text-5xl font-serif text-gold mb-8">are already here.</h2>
          </div>

          {/* Right Side - Description & CTA */}
          <div className="flex flex-col justify-end h-full">
            <p className="text-gray-600 text-sm mb-6">
              Whether you organize events, own a space or run a cultural brand -- 234Reigners puts
              you in front of an audience that is already looking for what you offer.
            </p>
            <button className="bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded-full transition font-semibold w-fit">
              Partner With Us
            </button>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition"
            >
              <div className="w-16 h-16 relative mb-3">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
              <span className="text-xs font-semibold text-gray-700 text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-12 bg-white p-4">
          {/* Left Side - Why Partner */}
          <div>
            <h3 className="text-3xl md:text-4xl font-serif mb-4 text-gray-900">
              Why Brands Partner with
            </h3>
            <h3 className="text-3xl md:text-4xl font-serif text-gold mb-6">234Reigners</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We sit at the intersection of culture community and commerce giving brands authentic
              access to a highly engaged, culturally conscious audience across the UK. Partnering
              with us isn't advertising it's belonging.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {benefits.map((benefit, i) => (
                <span
                  key={i}
                  className="bg-[#D0982A1A] text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {benefit}
                </span>
              ))}
            </div>
            <button className="bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded-full transition font-semibold">
              Partner With Us
            </button>
          </div>

          {/* Right Side - Stats */}
          <div className="space-y-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 flex items-start gap-4"
                style={{ boxShadow: '0px 4px 48px 0px #0000001A' }}
              >
                <div className="w-12 h-12 relative flex-shrink-0">
                  <Image src={stat.icon} alt={stat.label} fill className="object-contain" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
