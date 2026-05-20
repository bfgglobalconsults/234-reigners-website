import React from 'react'
import { Nunito_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import '../globals.css'
import './styles.css'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
})

const nuosuSIL = localFont({
  src: '../../fonts/NuosuSIL-Regular.ttf',
  variable: '--font-nuosu-sil',
  weight: '400',
  style: 'normal',
  display: 'swap',
})

export const metadata = {
  description: '234 Reigners is a technology-enabled intercultural experience platform that connects people through curated cultural events, food, music and community-driven experiences. Our platform allows you to discover, book and engage with cultural experiences across cities, both digitally and through our physical experience hubs.',
  title: '234 Reigners Website',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} ${nuosuSIL.variable} font-sans`}>
        <main>{children}</main>
      </body>
    </html>
  )
}
