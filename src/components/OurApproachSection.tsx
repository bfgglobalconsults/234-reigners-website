import Image from 'next/image'

export default function OurApproachSection() {
  return (
    <section className="py-20 bg-cream text-black relative">
      {/* Background Image */}

      {/* <div className="absolute inset-0">
        <Image src="/assets/what-we-do-bg.png" alt="Background" fill className="object-cover" />
      </div> */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
            HOW WE OPERATE
          </p>
          <h2 className="text-5xl md:text-6xl font-serif mb-6">Our Approach</h2>
          <div className="flex justify-center">
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Built on both physical and digital experiences. We operate through a hybrid model that
              brings culture to life in two different ways.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Digital Platform Card */}
          <div className="bg-[#D0982A33] p-10 rounded-3xl">
            <div className="p-3 rounded-2xl bg-[#D0982A] inline-block mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="rgba(255,255,255,1)"
              >
                <path d="M4 16H20V5H4V16ZM13 18V20H17V22H7V20H11V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H13Z"></path>
              </svg>
            </div>
            <h3 className="text-3xl text-black font-serif mb-4">Digital Platform</h3>
            <p className="text-black/80 mb-6 leading-relaxed">
              A tech-enabled space for discovering, booking, and engaging with cultural events
              across the UK.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-black/80 text-sm">Event discovery and seamless booking</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-black/80 text-sm">
                  Community building and social connection
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-black/80 text-sm">Personalized cultural recommendations</span>
              </li>
            </ul>
          </div>

          {/* Physical Experience Hubs Card */}
          <div className="bg-[#1A1A1A] p-10 rounded-3xl">
            <div className="p-3 rounded-2xl bg-[#D0982A] inline-block mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="rgba(255,255,255,1)"
              >
                <path d="M21 20H23V22H1V20H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20ZM19 20V4H5V20H19ZM8 11H11V13H8V11ZM8 7H11V9H8V7ZM8 15H11V17H8V15ZM13 15H16V17H13V15ZM13 11H16V13H13V11ZM13 7H16V9H13V7Z"></path>
              </svg>
            </div>
            <h3 className="text-3xl text-white font-serif mb-4">Physical Experience Hubs</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Spaces where cultural experiences come to life through food, music, and community
              interaction.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-white/80 text-sm">
                  Immersive cultural events and showcases
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-white/80 text-sm">
                  Community spaces for connection and belonging
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-white/80 text-sm">
                  Food, music, and interactive cultural programming
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
