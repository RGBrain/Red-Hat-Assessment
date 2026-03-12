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
      <div className="w-full mx-auto flex justify-evenly items-center gap-10 max-w-[1400px]">
        {/* ADDED A MAX-WIDTH SO THE SECTION IS CROPPED ON VERY WIDE SCREENS */}
        <Image
          src="/red-hat-server.png"
          alt="Red Hat Server"
          width={500}
          height={500}
          className="w-full flex-1"
        />
        <div className="flex-1 flex flex-col gap-10">
          {/* THIS DIV IS ONE FLEX ITEM (used as a container for the two Paragraph elements) */}
          <p className="text-7xl leading-snug font-bold">
            Unlocking the Value of Your Linux Estate
          </p>
          <p className="text-4xl font-semibold">A Red Hat Assessment Deep Dive</p>
        </div>
      </div>
    </section>
  )
}

export default SectionOne
