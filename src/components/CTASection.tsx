import Image from 'next/image'

export default function CTASection() {
  return (
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Start experiencing.</h2>
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
  )
}
