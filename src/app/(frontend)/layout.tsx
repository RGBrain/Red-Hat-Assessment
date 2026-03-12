import React from 'react'
import { Red_Hat_Display } from 'next/font/google'
import './globals.css'

const redHatDisplay = Red_Hat_Display({
  variable: '--font-red-hat-display',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  description: 'Red Hat Assessment',
  title: 'Landing Page for registration for the Red Hat webinar - 26 March 2026',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="font-primary antialiased">
        <main>{children}</main>
      </body>
    </html>
  )
}
