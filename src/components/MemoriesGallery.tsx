import Image from 'next/image'

const memories = [
  '/assets/reigner-memory1.jpg',
  '/assets/reigner-memory2.jpg',
  '/assets/reigner-memory3.jpg',
  '/assets/reigner-memory4.jpg',
  '/assets/reigner-memory5.jpg',
]

export default function MemoriesGallery() {
  return (
    <section className="py-20 bg-cream relative">
      <div className="absolute inset-0">
        <Image src="/assets/what-we-do-bg.png" alt="Background" fill className="object-cover" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          {/* Left Side - Heading */}
          <div>
            <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
              IN THE MOMENT
            </p>
            <h2 className="text-4xl text-black md:text-5xl font-serif mb-4">These memories</h2>
            <h2 className="text-4xl md:text-5xl font-serif text-gold">were once just events.</h2>
          </div>

          {/* Right Side - Description */}
          <div className="flex items-end h-full">
            <p className="text-gray-600 text-sm">
              A glimpse into what happens when people show up. Real moments from our community.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* Large image - spans 5 columns and 2 rows */}
          <div className="col-span-12 md:col-span-5 row-span-2 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden group cursor-pointer">
            <Image
              src={memories[0]}
              alt="Memory 1"
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* Top right - 2 medium images */}
          <div className="col-span-6 md:col-span-3 relative h-[190px] md:h-[240px] rounded-3xl overflow-hidden group cursor-pointer">
            <Image
              src={memories[1]}
              alt="Memory 2"
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="col-span-6 md:col-span-4 relative h-[190px] md:h-[240px] rounded-3xl overflow-hidden group cursor-pointer">
            <Image
              src={memories[2]}
              alt="Memory 3"
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* Bottom right - 2 medium images */}
          <div className="col-span-6 md:col-span-4 relative h-[190px] md:h-[240px] rounded-3xl overflow-hidden group cursor-pointer">
            <Image
              src={memories[3]}
              alt="Memory 4"
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="col-span-6 md:col-span-3 relative h-[190px] md:h-[240px] rounded-3xl overflow-hidden group cursor-pointer grayscale hover:grayscale-0 transition duration-500">
            <Image
              src={memories[4]}
              alt="Memory 5"
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
