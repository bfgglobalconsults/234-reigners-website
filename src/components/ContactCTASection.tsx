import Image from 'next/image'

export default function ContactCTASection() {
  return (
    <section className="relative h-[400px] flex items-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/reigner-comingsoon-banner.jpg"
          alt="Book a discovery call"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(101.41deg, rgba(41, 66, 45, 0.85) 0%, rgba(39, 57, 41, 0.85) 51.2%, rgba(34, 42, 35, 0.85) 100%)',
          }}
        ></div>
      </div>
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
          PREFER TO TALK?
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Book a discovery call</h2>
        <p className="text-white/90 leading-relaxed max-w-2xl mx-auto mb-8 text-lg">
          Sometimes a 15-minute call is faster than email. Pick a time that works for you and we
          will walk you through everything.
        </p>
        <button className="bg-gold hover:bg-gold-dark text-white px-4 py-2 rounded-full transition font-semibold text-sm">
          Book a Call
        </button>
      </div>
    </section>
  )
}
