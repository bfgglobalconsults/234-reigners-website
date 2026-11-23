import React from 'react'
import { DM_Sans } from 'next/font/google'
import '../globals.css'
import './styles.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  description:
    '234 Reigners is a technology-enabled intercultural experience platform that connects people through curated cultural events, food, music and community-driven experiences. Our platform allows you to discover, book and engage with cultural experiences across cities, both digitally and through our physical experience hubs.',
  title: '234 Reigners Website',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans bg-white`}>
        <main className="">{children}</main>
      </body>
    </html>
  )
}
