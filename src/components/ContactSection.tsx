import Image from 'next/image'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-cream relative">
      <div className="absolute inset-0">
        <Image src="/assets/what-we-do-bg.png" alt="Background" fill className="object-cover" />
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10">
        <div>
          <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-900">Lets Start a</h2>
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-6">Conversation</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Whether you want to host an event partner with us, or simply say hello - we'd love to
            hear from you. Every great experience starts with a message.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-white p-4 rounded-xl">
              <div className="w-12 h-12 bg-[#D0982A1A] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <div className="font-bold mb-1 text-gray-900">EMAIL US</div>
                <div className="text-gray-600 text-sm">hello@234reigners.com</div>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-4 rounded-xl">
              <div className="w-12 h-12 bg-[#D0982A1A] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
              </div>
              <div>
                <div className="font-bold mb-1 text-gray-900">FOLLOW US</div>
                <div className="text-gray-600 text-sm">@234reigners</div>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-4 rounded-xl">
              <div className="w-12 h-12 bg-[#D0982A1A] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <div className="font-bold mb-1 text-gray-900">BASED IN</div>
                <div className="text-gray-600 text-sm">London, United Kingdom</div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <a
              href="#"
              className="bg-[#D0982A1A] text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#D0982A33] transition"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="bg-[#D0982A1A] text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#D0982A33] transition"
            >
              Instagram
            </a>
            <a
              href="#"
              className="bg-[#D0982A1A] text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#D0982A33] transition"
            >
              Youtube
            </a>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-serif mb-2 text-gray-900">Send Us a Message</h3>
          <p className="text-gray-600 text-sm mb-6">We typically respond within 24 hours</p>
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase">
                Reason for Contact
              </label>
              <select className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-gold text-gray-600">
                <option>select a reason...</option>
                <option>Host an Event</option>
                <option>Partnership Inquiry</option>
                <option>General Question</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase">
                Your Message
              </label>
              <textarea
                placeholder="Tell us about your idea, question or how you'd like to collaborate..."
                rows={4}
                className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-gold resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gold hover:bg-gold-dark text-white py-3 rounded-full transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
