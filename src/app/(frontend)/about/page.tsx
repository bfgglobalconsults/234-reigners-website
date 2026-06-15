import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MissionCardsSection from '@/components/MissionCardsSection'
import OurApproachSection from '@/components/OurApproachSection'
import CTASection from '@/components/CTASection'
import OurStorySection from '@/components/OurStorySection'

const teamMembers = [
  {
    name: 'Peter Okefe',
    role: 'Co-Founder & Chief Executive Officer (CEO)',
    bio: 'Peter leads strategy and cultural development at 234Reigners, shaping the vision that connects communities through authentic cultural experiences across the UK.',
    image: '/assets/peter-okefe-ceo.jpeg',
  },
  {
    name: 'Kunle Adesuyi',
    role: 'Co-Founder & CFO',
    bio: 'Kunle oversees finance and partnership operations, building the relationships and financial infrastructure that keep 234Reigners growing sustainably across UK markets.',
    image: '/assets/kunle-adesuyi-cfo.jpeg',
  },
  {
    name: 'Isaac Omale',
    role: 'Co-Founder & COO',
    bio: 'Isaac runs operations and systems, ensuring every event, hub, and digital touchpoint delivers a seamless experience for the community.',
    image: '/assets/isaac-omole-co-founder-director-operations.jpeg',
  },
  {
    name: 'Ebere Nnanna',
    role: 'Co-Founder & CMO',
    bio: 'Ebere drives marketing and sales, crafting the voice of 234Reigners and building the brand presence that brings new communities into the fold.',
    image: '/assets/ebere-nnana-co-founder-marketing.jpeg',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#1a1a1a] text-white relative">
        <div className="absolute inset-0 ">
          <Image
            src="/assets/reigner-comingsoon-banner.jpg"
            alt="Background"
            fill
            className="object-cover  brightness-[0.4]"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">ABOUT US</p>
          <h2 className="text-5xl md:text-6xl mb-6">Bridging cultures</h2>
          <h2 className="text-5xl md:text-6xl text-gold mb-8">through experience.</h2>
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
            <div className="text-4xl font-serif text-white mb-2">200+</div>
            <div className="text-sm text-white">EXPERIENCES HOSTED</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif text-white mb-2">5k+</div>
            <div className="text-sm text-white">COMMUNITY MEMBERS</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif text-white mb-2">40+</div>
            <div className="text-sm text-white">UK CITIES</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif text-white mb-2">40+</div>
            <div className="text-sm text-white">CORE FOUNDERS</div>
          </div>
        </div>
      </section>
      <OurStorySection />
      {/* Mission Section - Commented out
      <section className="py-20 bg-[#FAF8F5] relative">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/what-we-do-bg.png" alt="" fill className="object-cover" />
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
      End Mission Section comment */}

      {/* Mission Cards Section */}
      <MissionCardsSection />

      {/* Core Values */}
      <section className="py-20 bg-cream relative">
        {/* <div className="absolute inset-0">
          <Image src="/assets/what-we-do-bg.png" alt="Background" fill className="object-cover" />
        </div> */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
              WHAT DRIVES US
            </p>
            <h2 className="text-4xl text-black font-serif">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-[#D0982A33] p-6 rounded-xl">
              <div className="p-3 rounded-2xl bg-[#FFFFFF4D] inline-block mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(208,152,42,1)"
                >
                  <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-3">Community</h3>
              <p className="text-sm text-gray-600">
                We believe strong communities are built through shared experiences and meaningful
                connections.
              </p>
            </div>
            <div className="bg-[#D0982A33] p-6 rounded-xl">
              <div className="p-3 rounded-2xl bg-[#FFFFFF4D] inline-block mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(208,152,42,1)"
                >
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-3">Cultural Diversity</h3>
              <p className="text-sm text-gray-600">
                We celebrate cultural heritage and encourage intercultural understanding across all
                backgrounds.
              </p>
            </div>
            <div className="bg-[#D0982A33] p-6 rounded-xl">
              <div className="p-3 rounded-2xl bg-[#FFFFFF4D] inline-block mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(208,152,42,1)"
                >
                  <path d="M9.97308 18H11V13H13V18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM10 20V21H14V20H10ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992Z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-3">Innovation</h3>
              <p className="text-sm text-gray-600">
                BlendWe use technology and creative programming to create new ways for people to
                connect through culture.ing tradition with modern approaches to create unique
                experiences.
              </p>
            </div>
            <div className="bg-[#D0982A33] p-6 rounded-xl">
              <div className="p-3 rounded-2xl bg-[#FFFFFF4D] inline-block mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(208,152,42,1)"
                >
                  <path d="M20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736ZM5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701C17.3397 4.67979 14.9458 4.60806 13.3743 5.98376L9.17157 10.1869L7.75736 8.77264L10.582 5.946L10.5002 5.87701C8.92545 4.61197 6.62322 4.71993 5.17157 6.17157Z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-3">Well-being</h3>
              <p className="text-sm text-gray-600">
                We support social well-being by creating environments that encourage belonging and
                cultural participation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <OurApproachSection />

      {/* Team Section */}
      {/* <section className="py-20 bg-cream relative">
      
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
              OUR PEOPLE
            </p>
            <h2 className="text-4xl text-black font-serif">Meet the Team</h2>
          </div>
          <div className="flex justify-center">
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              The passionate people behind every experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <div key={i} className="bg-[#D0982A33] rounded-2xl overflow-hidden">
                <div className="w-full h-[280px]  relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-5">
                  <div className="text-gold capitalize font-semibold text-xs mb-2">
                    {member.role}
                  </div>
                  <h3 className="text-base text-black font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <CTASection />
      <Footer />
    </div>
  )
}
