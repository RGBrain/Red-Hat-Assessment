/*********************
 * File: SectionOne.tsx
 * Description: SectionOne component
 * This section has the Red Hat Server Laptop image on the left
 ********************/

import React from 'react'
import Image from 'next/image'

const SectionOne = () => {
  return (
    <section id="s1" className="py-20">
      <div className="w-full mx-auto flex flex-col-reverse lg:flex-row justify-evenly items-start lg:items-center gap-10 max-w-[1400px] pl-8 lg:pl-0">
        {/* ADDED A MAX-WIDTH SO THE SECTION IS CROPPED ON VERY WIDE SCREENS */}
        <Image
          src="/red-hat-server.png"
          alt="Red Hat Server"
          width={500}
          height={500}
          className="w-full flex-1 -ml-6 lg:ml-0"
        />
        <div className="flex-1 flex flex-col gap-10">
          {/* Div for title and subtitle */}
          <p className="text-4xl lg:text-7xl leading-snug font-bold">
            Unlocking the Value of Your Linux Estate
          </p>
          <p className="text-xl lg:text-4xl font-semibold">A Red Hat Assessment Deep Dive</p>
        </div>
      </div>
    </section>
  )
}

export default SectionOne
