import Image from 'next/image'

export default function MissionCardsSection() {
  return (
    <section className="py-20 bg-cream relative">
      {/* Background Image */}

      {/* <div className="absolute inset-0">
                <Image src="/assets/what-we-do-bg.png" alt="Background" fill className="object-cover" />
              </div> */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Our Mission - Gold Card */}
          <div className="bg-[#D0982A] text-white p-6 rounded-3xl">
            <div className="p-3 rounded-2xl bg-[#FFFFFF33] inline-block mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif mb-4">Our Mission</h3>
            <p className="text-white/90 leading-relaxed">
              To address social disconnection and limited intercultural engagement in the UK by
              enabling people to access and participate in meaningful cultural experiences that
              foster community, belonging, and well-being.
            </p>
          </div>

          {/* Our Vision - Dark Card */}
          <div className="bg-[#2A2A2A] text-white p-6 rounded-3xl">
            <div className="p-3 rounded-2xl bg-[#FFFFFF33] inline-block mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path d="M12 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12 21C6.60756 21 2.12163 17.1202 1.18109 12C2.12163 6.87976 6.60756 3 12 3ZM12 19C16.2359 19 19.8603 16.0537 20.7777 12C19.8603 7.94633 16.2359 5 12 5C7.7641 5 4.13975 7.94633 3.22228 12C4.13975 16.0537 7.7641 19 12 19ZM12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12C16.5 14.4853 14.4853 16.5 12 16.5ZM12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif mb-4">Our Vision</h3>
            <p className="text-white/90 leading-relaxed">
              To become a leading culture Tech platform connecting cultural experience and
              communities across the UK.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
