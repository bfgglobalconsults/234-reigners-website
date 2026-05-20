import Image from 'next/image'

const exhibitions = [
  {
    tag: 'ART & DESIGN',
    title: 'Masks & Artifacts',
    description:
      'Discover the spiritual and cultural significance of traditional African masks and ceremonial artifacts from various tribes and regions.',
    image: '/assets/reigner-experience3.jpg',
  },
  {
    tag: 'FASHION',
    title: 'Textiles & Attire',
    description:
      'Explore the vibrant world of African textiles, from Kente cloth to Ankara prints, and see how traditional designs inspire modern fashion.',
    image: '/assets/reigner-experience4.jpg',
  },
  {
    tag: 'MUSIC',
    title: 'Sonic African Roots',
    description:
      'Experience the rhythms and melodies that have shaped African music for centuries, from traditional drums to contemporary Afrobeat.',
    image: '/assets/reigner-experience5.jpg',
  },
  {
    tag: 'HISTORY',
    title: 'Stories & Spirits',
    description:
      'Journey through oral traditions, folklore, and spiritual practices that have been passed down through generations across the continent.',
    image: '/assets/reigner-experience6.jpg',
  },
  {
    tag: 'CONTEMPORARY',
    title: 'Modern Expressions',
    description:
      'Witness how contemporary African artists are redefining cultural narratives through innovative mediums and bold creative visions.',
    image: '/assets/reigner-experience-1.jpg',
  },
  {
    tag: 'CULINARY',
    title: 'Culinary Traditions',
    description:
      'Explore the diverse flavors and cooking traditions that make African cuisine one of the most vibrant and varied in the world.',
    image: '/assets/reigner-experience2.jpg',
  },
]

export default function ExhibitionGridSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-cream">
      <div className="absolute inset-0 z-0">
        <Image src="/assets/what-we-do-bg.png" alt="" fill className="object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-gray-900">
            Explore our exhibitions
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gold mb-6">on display</h3>
          <div className="flex justify-center">
            <p className="text-gray-600 max-w-2xl text-center text-sm sm:text-base">
              Each exhibition offers a unique window into the diverse cultures, traditions, and
              artistic expressions that make Africa extraordinary.
            </p>
          </div>
        </div>

        {/* Exhibition Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {exhibitions.map((exhibition, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={exhibition.image}
                  alt={exhibition.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {exhibition.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-serif mb-3 text-gray-900">
                  {exhibition.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  {exhibition.description}
                </p>
                <button className="text-gold font-semibold text-sm hover:underline inline-flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
