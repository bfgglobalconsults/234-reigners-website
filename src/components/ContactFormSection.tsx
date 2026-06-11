'use client'

import { useState } from 'react'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventType: '',
    guestCount: '',
    date: '',
    budget: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 bg-cream relative">
      {/* Background Image */}

      {/* <div className="absolute inset-0">
        <Image src="/assets/what-we-do-bg.png" alt="Background" fill className="object-cover" />
      </div> */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Form Intro */}
          <ScrollAnimationWrapper animation="fadeInLeft">
            <div>
              <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
                GET IN TOUCH
              </p>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">Let's Start a</h2>
              <h2 className="text-4xl md:text-5xl font-serif text-gold mb-6">Conversation</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Whether you want to host an event partner with us, or simply say hello - we&apos;d
                love to hear from you. Every great experience starts with a message.
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
          </ScrollAnimationWrapper>

          {/* Right Column - Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-serif mb-6 text-gray-900">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 bg-[#D0982A1A] text-black rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-[#D0982A1A] text-black rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-[#D0982A1A] text-black rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition"
                    placeholder="+234 123 456 7890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 bg-[#D0982A1A] text-black rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition"
                  placeholder="Your company name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="eventType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-[#D0982A1A] text-black rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="cultural">Cultural Festival</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="guestCount"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Expected Guests
                  </label>
                  <input
                    type="number"
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-[#D0982A1A] text-black rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition"
                    placeholder="e.g., 50-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-[#D0982A1A] text-black rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-[#D0982A1A] text-black rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-500k">Under ₦500,000</option>
                    <option value="500k-1m">₦500,000 - ₦1,000,000</option>
                    <option value="1m-3m">₦1,000,000 - ₦3,000,000</option>
                    <option value="3m-5m">₦3,000,000 - ₦5,000,000</option>
                    <option value="above-5m">Above ₦5,000,000</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your event *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 bg-[#D0982A1A] text-black rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition resize-none"
                  placeholder="Share your vision, ideas, or any specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-white py-4 rounded-lg transition font-semibold text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
