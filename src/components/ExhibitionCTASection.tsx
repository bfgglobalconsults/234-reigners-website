import Image from 'next/image'
import Link from 'next/link'

export default function ExhibitionCTASection() {
  return (
    <section className="relative py-20 sm:py-32 bg-forest">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/reigner-comingsoon-banner.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
        <p className="text-gold text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6">
          START THE CONVERSATION
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 leading-tight">
          Experience it in person
        </h2>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          Join us for an unforgettable journey through African culture. Book your visit today and
          immerse yourself in the art, music, and stories that have shaped a continent.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full transition font-semibold text-base w-full sm:w-auto text-center"
          >
            Book Your Visit
          </Link>
          <a
            href="#schedule"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-forest text-white px-8 py-4 rounded-full transition font-semibold text-base w-full sm:w-auto text-center"
          >
            View Schedule
          </a>
        </div>
      </div>
    </section>
  )
}
