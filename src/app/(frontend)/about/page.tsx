import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Founder & CEO',
    bio: 'With over 15 years in cultural programming, Jane leads our vision of making culture accessible to all.',
    image: '/assets/team-member1.jpg',
  },
  {
    name: 'John Smith',
    role: 'Creative Director',
    bio: 'John brings creativity and innovation to every project, ensuring a unique and memorable experience.',
    image: '/assets/team-member2.jpg',
  },
  {
    name: 'Sarah Johnson',
    role: 'Cultural Consultant',
    bio: 'Sarah works with communities worldwide to ensure authenticity in all our programs.',
    image: '/assets/team-member3.jpg',
  },
  {
    name: 'Michael Brown',
    role: 'Operations Manager',
    bio: 'Michael ensures every event runs smoothly from planning to execution.',
    image: '/assets/team-member4.jpg',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/assets/reigner-comingsoon-banner.png"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">ABOUT US</p>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Bridging cultures</h1>
          <h1 className="text-5xl md:text-6xl font-serif text-gold mb-8">through experience.</h1>
          <p className="text-white/90 max-w-2xl text-lg leading-relaxed">
            An intercultural experience platform designed to connect people through shared cultural
            moments across the UK.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#D0982A]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">200+</div>
            <div className="text-sm text-white">EXPERIENCES HOSTED</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">5k+</div>
            <div className="text-sm text-white">COMMUNITY MEMBERS</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">40+</div>
            <div className="text-sm text-white">UK CITIES</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">40+</div>
            <div className="text-sm text-white">CORE FOUNDERS</div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 opacity-20">
          <Image src="/assets/what-we-do-bg.jpg" alt="Background" fill className="object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/assets/reigner-ourstory.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
                OUR MISSION
              </div>
              <h2 className="text-4xl text-black font-serif mb-4">Born from culture</h2>
              <h2 className="text-4xl font-serif text-gold mb-6">Built for people.</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                234Reigners started with a simple feeling: that the richest experiences in life
                happen when people come together around culture — food, music, art, and belonging.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                In a world where loneliness and social disconnection are quietly feeding depression
                for many people, we saw a deeper problem beyond just finding events — people were
                struggling to find real community. We also saw how hard it was to discover
                meaningful cultural experiences, let alone actually get there. 234Reigners is an
                intercultural community platform built to bridge that gap — helping people move from
                isolation to connection through shared experiences rooted in culture. By making it
                easy to discover events, hold your spot, and show up, the platform helps combat
                loneliness and creates moments of belonging that support emotional wellbeing.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We are community-first, using technology as a quiet tool — to surface the events
                worth your time, make participation effortless, and ensure you never miss the
                moments that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-cream relative">
        <div className="absolute inset-0 opacity-20">
          <Image src="/assets/what-we-do-bg.jpg" alt="Background" fill className="object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
              WHAT DRIVES US
            </p>
            <h2 className="text-4xl font-serif">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold mb-3">Authenticity</h3>
              <p className="text-sm text-gray-600">
                We honor and preserve the essence of every culture we represent.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold mb-3">Cultural Reverence</h3>
              <p className="text-sm text-gray-600">
                Deep respect for traditions and the communities we serve.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold mb-3">Innovation</h3>
              <p className="text-sm text-gray-600">
                Blending tradition with modern approaches to create unique experiences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold mb-3">Unity & Love</h3>
              <p className="text-sm text-gray-600">
                Building bridges between cultures and fostering understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 opacity-20">
          <Image src="/assets/what-we-do-bg.jpg" alt="Background" fill className="object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
              OUR PEOPLE
            </p>
            <h2 className="text-4xl font-serif">Meet the Team</h2>
          </div>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            The passionate people behind every experience.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="bg-cream p-6 rounded-2xl">
                <div className="h-64 bg-gray-200 rounded-xl overflow-hidden mb-4 relative">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <div className="text-gold text-sm mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
