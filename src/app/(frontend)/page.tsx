/*********************
 * File: page.tsx
 * Description: Home page component for the frontend of the Red Hat Assessment project. This file holds everything that goes on the landing page (i.e. header and all sections and footer). The page is styled using Tailwind CSS and uses the Red Hat Display font
 ********************/

import Header from '@/components/Header'
import SectionOne from '@/components/SectionOne'

export default function Home() {
  return (
    <>
      <Header />
      <SectionOne />
    </>
  )
}
