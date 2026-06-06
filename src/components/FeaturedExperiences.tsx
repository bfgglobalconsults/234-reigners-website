import Image from 'next/image'

const experiences = [
  {
    img: '/assets/reigner-experience-1.jpg',
    title: 'London Suya & Street Food Festival',
    category: 'Food & Dining',
    date: 'Saturday, 12 April, 2025 · 7:00 PM',
    location: 'Brixton Village, London',
    organizer: 'Meme Cooks Coll...',
    categoryColor: 'bg-[#FFF4E6] text-[#FF9800]',
  },
  {
    img: '/assets/reigner-experience2.jpg',
    title: 'Afrobeat & Chill: Rooftop Sessions',
    category: 'Music & Entertainment',
    date: 'Saturday, 12 April, 2025 · 7:00 PM',
    location: 'Brixton Village, London',
    organizer: 'Reigns Sound Co...',
    categoryColor: 'bg-[#FFF4E6] text-[#FF9800]',
  },
  {
    img: '/assets/reigner-experience3.jpg',
    title: 'Yoruba Storytelling & Poetry Night',
    category: 'Culture & Creativity',
    date: 'Saturday, 12 April, 2025 · 7:00 PM',
    location: 'Brixton Village, London',
    organizer: 'By 234Reigners',
    categoryColor: 'bg-[#FCE4EC] text-[#E45F6D]',
  },
  {
    img: '/assets/reigner-experience4.jpg',
    title: 'Naija Diaspora Connect - London',
    category: 'Community & Social',
    date: 'Saturday, 12 April, 2025 · 7:00 PM',
    location: 'Brixton Village, London',
    organizer: 'Naija Connect U...',
    categoryColor: 'bg-[#E8F5E9] text-[#58BD62]',
  },
  {
    img: '/assets/reigner-experience5.jpg',
    title: 'Ankara & Aso-Oke Fashion Showcase',
    category: 'Culture & Creativity',
    date: 'Saturday, 12 April, 2025 · 7:00 PM',
    location: 'Brixton Village, London',
    organizer: 'Reigns Sound Co...',
    categoryColor: 'bg-[#FCE4EC] text-[#E45F6D]',
  },
  {
    img: '/assets/reigner-experience6.jpg',
    title: 'Jollof Wars: Ultimate Cook-Off',
    category: 'Food & Dining',
    date: 'Saturday, 12 April, 2025 · 7:00 PM',
    location: 'Brixton Village, London',
    organizer: 'By 234Reigners',
    categoryColor: 'bg-[#FFF4E6] text-[#FF9800]',
  },
]

export default function FeaturedExperiences() {
  return (
    <section className="relative py-20 bg-[#FAF8F5]">
      {/* Background Image */}
      {/* <div className="absolute inset-0 z-0">
        <Image src="/assets/what-we-do-bg.png" alt="" fill className="object-cover" />
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
              FEATURED EXPERIENCES
            </p>
            <h2 className="text-4xl md:text-5xl text-black font-serif mb-2">Experiences worth</h2>
            <h2 className="text-4xl md:text-5xl font-serif text-gold">showing up for.</h2>
          </div>
          <div className="text-right max-w-xs">
            <p className="text-gray-600 text-sm">
              A glimpse of what's happening. Download the app to discover all events and reserve
              your spot.
            </p>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="relative h-56">
                <Image src={exp.img} alt={exp.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <span
                    className={`${exp.categoryColor} px-3 py-1 rounded-full text-xs font-semibold`}
                  >
                    {exp.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-black font-serif mb-3">{exp.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{exp.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <span className="text-sm text-gray-700">{exp.organizer}</span>
                  </div>
                  <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition">
                    View Experience
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* App Download CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">Want to see all events and reserve a spot?</p>
          <div className="flex items-center justify-center gap-4">
            <a href="#" className="hover:opacity-80 transition">
              <Image
                src="/assets/reigners-googleplay.png"
                alt="Get it on Google Play"
                width={160}
                height={48}
              />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Image
                src="/assets/reigners-appstore.png"
                alt="Download on the App Store"
                width={160}
                height={48}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
