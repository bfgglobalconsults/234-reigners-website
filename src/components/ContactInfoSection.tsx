export default function ContactInfoSection() {
  const contactMethods = [
    {
      title: 'Email',
      value: 'hello@234reigners.com',
      description: 'Drop us a line anytime',
    },
    {
      title: 'Phone',
      value: '+234 (0) 123 456 7890',
      description: 'Mon-Fri from 9am to 6pm',
    },
    {
      title: 'Location',
      value: 'Lagos, Nigeria',
      description: 'Visit our office',
    },
    {
      title: 'Social Media',
      value: '@234reigners',
      description: 'Follow us on Instagram',
    },
  ]

  return (
    <section className="py-16 bg-[#f5f1e8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-[#f9f6ed] p-8 rounded-lg border border-[#e8dfc8] hover:shadow-md transition"
            >
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                {method.title}
              </h3>
              <p className="text-xl font-semibold text-gray-900 mb-1">{method.value}</p>
              <p className="text-sm text-gray-600">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
