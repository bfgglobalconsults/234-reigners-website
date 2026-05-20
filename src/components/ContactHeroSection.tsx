import Image from 'next/image'

export default function ContactHeroSection() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 min-h-[50vh] sm:min-h-[60vh] flex items-center bg-[#1a1a1a]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/reigners-banner.jpg"
          alt="Contact Hero"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:ml-10 text-white">
        <div className="max-w-3xl">
          <p className="text-gold text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            WE'D LOVE TO HEAR FROM YOU
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif mb-4 sm:mb-6 leading-tight">
            Let's make something
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-gold mb-4 sm:mb-6 leading-tight">
            happen
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Whether you want to host an event, partner with us, or simply say hello - we'd love to
            hear from you. Every great experience starts with a conversation.
          </p>
        </div>
      </div>
    </section>
  )
}
