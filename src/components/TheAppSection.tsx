import Image from 'next/image'

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: 'Discover Nearby',
    description:
      'Find cultural events happening around you -- music, food, art and community, all in one place.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
        <path
          fillRule="evenodd"
          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: 'Reserve Instantly',
    description: 'Claim your spot in seconds. No payment. No hassle. Just confirm and show up.',
    color: 'text-pink-500',
    bgColor: 'bg-pink-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
      </svg>
    ),
    title: 'Explore by City',
    description: 'Browse events across multiple cities and plan your cultural calendar with ease.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
    title: 'Connect with people',
    description:
      'Meet others going to the same events. Build friendships through shared experiences.',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
]

export default function TheAppSection() {
  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/assets/what-we-do-bg.png" alt="Background" fill className="object-cover" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-2 items-center">
          {/* Left Side - Phone Image */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative w-[400px] h-[600px]">
              <Image
                src="/assets/device.png"
                alt="234Reigners App"
                fill
                className="object-contain drop-shadow-2xl"
              />
              {/* Badge Overlay */}
              <div className="absolute top-12 left-8 bg-white rounded-2xl px-4 py-3 shadow-lg">
                <div className="text-2xl font-bold text-gray-900">400+ Events</div>
                <div className="text-xs text-gray-500">Every month</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">THE APP</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-900">
              Culture in your pocket.
            </h2>
            <h2 className="text-4xl md:text-5xl font-serif text-gold mb-6">Everywhere you go.</h2>

            <p className="text-gray-700 mb-8 leading-relaxed">
              The 234Reigners app is where you discover, reserve and experience culture -- from food
              pop-ups to city-wide festivals. Find your next favorite memory in a single tap.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-3">
                  <div className={`${feature.bgColor} ${feature.color} p-3 rounded-lg h-fit`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="hover:opacity-80 transition">
                <Image
                  src="/assets/reigners-googleplay.png"
                  alt="Get it on Google Play"
                  width={150}
                  height={45}
                  className="h-12 w-auto"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Image
                  src="/assets/reigners-appstore.png"
                  alt="Download on the App Store"
                  width={150}
                  height={45}
                  className="h-12 w-auto"
                />
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
