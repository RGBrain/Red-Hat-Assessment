/*********************
 * File: SectionFive.tsx
 * Description: SectionFive component
 * This is the 'Get in Touch' section with email
 ********************/

import React from 'react'
import { Mail } from 'lucide-react'

const SectionFive = () => {
  return (
    <section
      id="s5"
      // explicitly bg-white class
      className="bg-white py-8"
    >
      <div className="mx-auto flex max-w-[1350px] flex-col items-center">
        <h2 className="text-red-hat-red font-normal text-3xl text-center mx-auto mb-10">
          Get in Touch
        </h2>
        <Mail size={70} strokeWidth={0.8} className="text-red-hat-red mb-4" />

        <p className="text-lg text-center mx-auto mb-4 mt-2">
          <a
            href="mailto:estate-assessment@businesstech.tech"
            className="text-red-hat-red underline"
          >
            estate-assessment@businesstech.tech
          </a>
        </p>

        <div className="w-full mt-8">
          {/* LOGOS */}
          <div className="w-full flex justify-end">
            <img
              src="/logos-td-synnex-and-red-hat.png"
              alt="TD Synnex and Red Hat"
              className="h-12 md:h-16 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionFive
