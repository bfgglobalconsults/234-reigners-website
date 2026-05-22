import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const services = [
  {
    icon: '/assets/offer-culture.png',
    label: 'LEARN IT. MAKE IT. LIVE IT.',
    title: 'Cultural Workshops',
    description:
      'Hands-on workshops that immerse participants in the art, craft, music, and traditions of diverse cultures. From West African drumming and Caribbean storytelling to South Asian textile art and East African beadwork, our workshops are led by skilled cultural practitioners who make heritage tangible and unforgettable.',
    features: [
      'Drumming, dance, and movement workshops',
      'Textile, beadwork, and craft masterclasses',
      'Cooking and food heritage sessions',
      'Spoken word, storytelling, and poetry',
      'Team-building cultural immersion days',
      'School and corporate programme delivery',
    ],
    image: '/assets/service-portrait4.png',
    position: 'left',
  },
  {
    icon: '/assets/offer-dining.png',
    label: 'A SEAT AT EVERY TABLE',
    title: 'Dining Experiences',
    description:
      'Curated dining experiences that take guests on a culinary journey through Africa, the Caribbean, South Asia, and beyond. From intimate supper clubs and chefs table events to large-scale food festivals and private cultural dinners, every plate tells a story and every table is a bridge.',
    features: [
      'Intimate supper clubs with cultural storytelling',
      'Large-scale outdoor food festivals and markets',
      'Chefs table and private dining experiences',
      'Pop-up kitchens and street food showcases',
      'Wine, spice, and ingredient tastings',
      'Cultural food education and history talks',
    ],
    image: '/assets/service-portrait1.png',
    position: 'right',
  },
  {
    icon: '/assets/offer-entertainment.png',
    label: 'FEEL THE CULTURE LIVE.',
    title: 'Live Entertainment',
    description:
      'Dynamic live performances and curated entertainment that bring cultural expression centre stage. From Afrobeats concerts and spoken word nights to traditional dance showcases and comedy showcases, we produce live events that make audiences feel the rhythm, the story, and the joy.',
    features: [
      'Afrobeats, Amapiano, and live music concerts',
      'Spoken word, poetry, and storytelling nights',
      'Traditional and contemporary dance showcases',
      'Comedy and cultural variety shows',
      'Theatre, film screenings, and panel events',
      'Festival programming and stage management',
    ],
    image: '/assets/service-portrait2.png',
    position: 'left',
  },
  {
    icon: '/assets/offer-venue.png',
    label: 'SPACES MADE FOR CULTURE',
    title: 'Venue Hire',
    description:
      'We curate and manage unique venue spaces across the UK that are purpose-built for cultural events, workshops, dining experiences, and live performances. Whether you need an intimate gallery, a blank-canvas warehouse, or a rooftop with soul — we match you to the space and handle the logistics.',
    features: [
      'Gallery and exhibition spaces for hire',
      'Warehouse and industrial event venues',
      'Rooftop and outdoor cultural event spaces',
      'Intimate supper club and dining rooms',
      'Music and performance-ready stages',
      'Full venue management and on-site support',
    ],
    image: '/assets/service-portrait3.png',
    position: 'right',
  },
]

const workProcess = [
  {
    title: 'Host a workshop',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="rgba(208,152,42,1)"
      >
        <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path>
      </svg>
    ),
    description:
      'Book a cultural workshop for your school, workplace, or community group — hands-on, immersive, and led by skilled practitioners.',
  },
  {
    title: 'Book a Dining Experience',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="rgba(208,152,42,1)"
      >
        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path>
      </svg>
    ),
    description:
      'From supper clubs to food festivals, reserve your seat at tables where every dish carries a story and a tradition.',
  },
  {
    title: 'Book Live Entertainment',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="rgba(208,152,42,1)"
      >
        <path d="M16 4C16.5523 4 17 4.44772 17 5V9.2L22.2133 5.55071C22.4395 5.39235 22.7513 5.44737 22.9096 5.6736C22.9684 5.75764 23 5.85774 23 5.96033V18.0397C23 18.3158 22.7761 18.5397 22.5 18.5397C22.3974 18.5397 22.2973 18.5081 22.2133 18.4493L17 14.8V19C17 19.5523 16.5523 20 16 20H2C1.44772 20 1 19.5523 1 19V5C1 4.44772 1.44772 4 2 4H16ZM15 6H3V18H15V6ZM7.4 8.82867C7.47607 8.82867 7.55057 8.85036 7.61475 8.8912L11.9697 11.6625C12.1561 11.7811 12.211 12.0284 12.0924 12.2148C12.061 12.2641 12.0191 12.306 11.9697 12.3375L7.61475 15.1088C7.42837 15.2274 7.18114 15.1725 7.06254 14.9861C7.02169 14.9219 7 14.8474 7 14.7713V9.22867C7 9.00776 7.17909 8.82867 7.4 8.82867ZM21 8.84131L17 11.641V12.359L21 15.1587V8.84131Z"></path>
      </svg>
    ),
    description:
      'Find and book concerts, spoken word nights, dance showcases, and comedy shows that bring culture to the stage.',
  },
  {
    title: 'Hire a Venue',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="rgba(208,152,42,1)"
      >
        <path d="M3.16113 4.46875C5.58508 2.0448 9.44716 1.9355 12.0008 4.14085C14.5528 1.9355 18.4149 2.0448 20.8388 4.46875C23.2584 6.88836 23.3716 10.741 21.1785 13.2947L13.4142 21.0858C12.6686 21.8313 11.4809 21.8652 10.6952 21.1874L10.5858 21.0858L2.82141 13.2947C0.628282 10.741 0.741522 6.88836 3.16113 4.46875ZM4.57534 5.88296C2.86819 7.59011 2.81942 10.3276 4.42902 12.0937L4.57534 12.2469L12 19.6715L17.3026 14.3675L13.7677 10.8327L12.7071 11.8934C11.5355 13.0649 9.636 13.0649 8.46443 11.8934C7.29286 10.7218 7.29286 8.8223 8.46443 7.65073L10.5656 5.54823C8.85292 4.17713 6.37076 4.23993 4.7286 5.73663L4.57534 5.88296ZM13.0606 8.71139C13.4511 8.32086 14.0843 8.32086 14.4748 8.71139L18.7168 12.9533L19.4246 12.2469C21.1819 10.4896 21.1819 7.64032 19.4246 5.88296C17.7174 4.17581 14.9799 4.12704 13.2139 5.73663L13.0606 5.88296L9.87864 9.06494C9.51601 9.42757 9.49011 9.99942 9.80094 10.3919L9.87864 10.4792C10.2413 10.8418 10.8131 10.8677 11.2056 10.5569L11.2929 10.4792L13.0606 8.71139Z"></path>
      </svg>
    ),
    description:
      'Discover unique gallery, warehouse, rooftop, and performance spaces — curated and managed for cultural events.',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#1A1A1AE5] text-white relative">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/assets/services-hero-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
            OUR SERVICES
          </p>
          <h2 className="text-5xl md:text-6xl font-serif mb-6">Services built for</h2>
          <h2 className="text-5xl md:text-6xl font-serif text-gold mb-8">cultural impact.</h2>
          <p className="text-white/90 max-w-2xl text-lg leading-relaxed">
            We create experiences that bring culture to life - from intimate workshops to
            large-scale events. Every service is designed to connect, educate, and inspire.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#D0982A]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex justify-center my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="rgba(255,255,255,1)"
              >
                <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
              </svg>
            </div>
            <div className="text-4xl font-serif text-white mb-2">4</div>
            <div className="text-sm text-white">Core Service Pillars</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="rgba(255,255,255,1)"
              >
                <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path>
              </svg>
            </div>
            <div className="text-4xl font-serif text-white mb-2">200+</div>
            <div className="text-sm text-white">Experiences Produced</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="rgba(255,255,255,1)"
              >
                <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
              </svg>
            </div>
            <div className="text-4xl font-serif text-white mb-2">15+</div>
            <div className="text-sm text-white">UK Cities Covered</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="rgba(255,255,255,1)"
              >
                <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM4 18.3851L5.76282 17H20V5H4V18.3851ZM11 13H13V15H11V13ZM11 7H13V12H11V7Z"></path>
              </svg>
            </div>
            <div className="text-4xl font-serif text-white mb-2">8K+</div>
            <div className="text-sm text-white">People Reached</div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-cream relative">
        <div className="absolute inset-0">
          <Image
            src="/assets/what-we-do-bg.png"
            alt="Background"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
              OUR SERVICE PILLARS
            </p>
            <h2 className="text-4xl md:text-5xl text-black font-serif mb-4">Four ways we bring</h2>
            <h2 className="text-4xl md:text-5xl font-serif text-gold mb-6">culture to life.</h2>
            <div className="flex justify-center">
              <p className="text-gray-600 max-w-2xl mx-auto text-center">
                Each service is thoughtfully designed to create meaningful cultural experiences that
                educate, inspire, and bring communities together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-12 items-center relative py-12 ${
                  service.position === 'right' ? 'md:grid-flow-dense' : ''
                }`}
              >
                <div className="absolute inset-0">
                  <Image
                    src="/assets/what-we-do-bg.png"
                    alt="Background"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className={service.position === 'right' ? 'md:col-start-2' : ''}>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  </div>
                </div>
                <div
                  className={service.position === 'right' ? 'md:col-start-1 md:row-start-1' : ''}
                >
                  <div className="inline-flex items-center gap-3 bg-[#D0982A] px-4 py-3 rounded-xl mb-6">
                    <div className="w-5 h-4 bg-[#D0982A] relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(255,255,255,1)"
                      >
                        <path d="M7 4V20H17V12H19V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2H13V4H7ZM19 6H22L18 10L14 6H17V2H19V6ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18Z"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-[#D0982A] mb-6 font-bold">{service.label}</p>
                  <h3 className="text-3xl font-serif mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-gold"
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
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="bg-gold hover:bg-gold-dark text-white px-6 py-3 rounded-full transition font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Work With Us */}
      <section className="py-20 bg-cream relative">
        <div className="absolute inset-0">
          <Image
            src="/assets/what-we-do-bg.png"
            alt="Background"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
              BOOK WITH US
            </p>
            <h2 className="text-4xl text-black font-serif mb-4">How to work with us</h2>
            <div className="flex justify-center">
              <p className="text-gray-600 max-w-2xl mx-auto text-center">
                Getting started is simple. Choose the service that fits your needs and we'll guide
                you through the rest.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workProcess.map((step, i) => (
              <div key={i} className="bg-[#D0982A33] p-6 rounded-xl">
                <div
                  className="inline-flex justify-center p-4 rounded-2xl mb-4"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                >
                  {step.icon}
                </div>
                <h3 className="font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/reigner-comingsoon-banner.jpg"
            alt="Your Culture Awaits"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(101.41deg, rgba(41, 66, 45, 0.9) 0%, rgba(39, 57, 41, 0.9) 51.2%, rgba(34, 42, 35, 0.9) 100%)',
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
              YOUR CULTURE AWAITS
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">Stop scrolling.</h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
              Start experiencing.
            </h2>
            <p className="text-white/90 leading-relaxed max-w-lg">
              Hundreds of cultural experiences are happening right now -- food, music, art and
              community. Explore what's on or download the app to reserve your spot.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <a href="#" className="hover:opacity-80 transition">
              <Image
                src="/assets/reigners-googleplay.png"
                alt="Get it on Google Play"
                width={180}
                height={54}
                className="h-14 w-auto"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Image
                src="/assets/reigners-appstore.png"
                alt="Download on the App Store"
                width={180}
                height={54}
                className="h-14 w-auto"
              />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
