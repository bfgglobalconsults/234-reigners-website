'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/services', label: 'Services', page: '/services' },
  { href: '/#approach', label: 'Exhibitions', hash: '#approach' },
  { href: '/about', label: 'About', page: '/about' },
  { href: '/contact', label: 'Contact', page: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [activeHash, setActiveHash] = useState('')

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash)
    }

    setActiveHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const isActive = (link: (typeof navLinks)[0]) => {
    if (link.page) {
      return pathname === link.page
    }
    return activeHash === link.hash || (pathname === '/' && link.hash === activeHash)
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
        <Link href="/">
          <Image src="/assets/reigners-logo.png" alt="234REIGNERS" width={150} height={40} />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition font-medium ${
                isActive(link) ? 'text-gold' : 'text-gray-600 hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button className="bg-gold hover:bg-gold-dark text-white px-6 py-2 rounded-full transition font-medium">
          Explore Experiences
        </button>
      </nav>
    </header>
  )
}
