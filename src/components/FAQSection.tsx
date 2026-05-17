const faqs = [
  {
    q: 'How do I book an event?',
    a: "Simply fill out our contact form or give us a call. We'll discuss your needs and create a custom experience.",
  },
  {
    q: 'Do you host outside the UK?',
    a: 'Yes! We offer experiences globally and can travel to your location.',
  },
  {
    q: 'Can I make changes after booking?',
    a: "Absolutely. We're flexible and can adjust details up until the event date.",
  },
  {
    q: 'How do you handle the event?',
    a: 'We manage everything from planning to execution, ensuring a seamless experience.',
  },
  {
    q: 'What is your typical response time?',
    a: 'We typically respond within 24 hours on business days.',
  },
  {
    q: 'Do you work with partners?',
    a: 'Yes, we collaborate with various partners and accept multiple payment methods.',
  },
]

export default function FAQSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-gold text-sm mb-4 font-semibold">FREQUENTLY ASKED</div>
          <h2 className="text-4xl font-serif mb-4">Quick answers</h2>
          <p className="text-gray-600">
            Everything you need to know about our cultural experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold mb-3">{faq.q}</h3>
              <p className="text-gray-600 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
