import React from 'react'
import './styles.css'

export const metadata = {
  description: 'Red Hat Assessment',
  title: 'Landing Page for registration for the Red Hat webinar - 26 March 2026',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
