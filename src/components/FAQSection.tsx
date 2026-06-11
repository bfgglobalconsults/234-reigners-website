'use client'

import Image from 'next/image'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

const faqs = [
  {
    q: 'How do I list an event?',
    a: 'Fill in the form above, select &quot; List an Event &quot; as the topic, and tell us what you are planning. We will get back to you with next steps within 24 hours.',
  },
  {
    q: 'Do you host events outside the UK?',
    a: 'Our primary focus is the UK market, but we work with international partners for select cultural programming. Mention it in your message and we will explore it together.',
  },
  {
    q: 'Can I visit your office?',
    a: 'Our London office is open by appointment. Use the form to request a visit and we will coordinate a time that works.',
  },
  {
    q: 'How do partnerships work?',
    a: 'We partner with venues, cultural organisations, brands, and creators. Select "Partnership Opportunity" in the form and share your idea — we love hearing new concepts.',
  },
  {
    q: 'What is your typical response time?',
    a: 'We aim to respond to all enquiries within 24 hours during weekdays. For urgent requests, mark your message clearly and we will prioritise it.',
  },
  {
    q: 'Do you work with press and media?',
    a: 'Yes. Select "Press & Media" in the form and include your publication, deadline, and what you need. Our CMO will be in touch.',
  },
]

export default function FAQSection() {
  return (
    <section className="py-20 bg-cream relative">
      {/* Background Image */}

      {/* <div className="absolute inset-0">
        <Image src="/assets/what-we-do-bg.png" alt="Background" fill className="object-cover" />
      </div> */}
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimationWrapper animation="fadeIn">
          <div className="text-center mb-12">
            <div className="text-gold text-sm mb-4 font-semibold">FREQUENTLY ASKED</div>
            <h2 className="text-4xl text-black font-serif mb-4">Quick answers</h2>
            <p className="text-gray-600">
              Everything you need to know about our cultural experiences
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-3 gap-6">
          {faqs.map((faq, i) => (
            <ScrollAnimationWrapper key={i} animation="fadeInUp" delay={i * 100}>
              <div className="bg-[#D0982A33] p-6 rounded-xl">
                <div className="p-3 rounded-2xl bg-[#FFFFFF4D] inline-block mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(208,152,42,1)"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-black mb-3">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
