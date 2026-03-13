/*********************
 * File: SectionFour.tsx
 * Description: SectionFour component
 * Registration form
 ********************/

import React from 'react'
import Image from 'next/image'
import RegistrationForm from './RegistrationForm'

const SectionFour = () => {
  return (
    <section id="s4" className="min-h-120 bg-red-hat-gray pt-4 pb-18">
      <div className="mx-auto flex max-w-[1150px] flex-col justify-start">
        <h2 className="text-red-hat-red font-bold text-3xl text-center mx-auto mb-10">
          Registration
        </h2>
        <div className="flex justify-center mt-10">
          <div className="flex-1">
            {/* WEBINAR INFO */}
            <p className="text-lg leading-relaxed font-bold">
              Live Webinar -
              <br />
              Unlocking the Value of Your Linux Estate: A Red
              <br />
              Hat Assessment Deep Dive
            </p>
            {/* WEBINAR DATE/TIME/PRESENTER */}
            <ul className="mt-8 flex flex-col gap-3 text-lg">
              <li>Date: 26th March</li>
              <li>Time: 1:00-11:00</li>
              <li>Presenter: Daryl Kelly</li>
            </ul>
            <Image
              src="/daryl-kelly.png"
              alt="Webinar"
              width={200}
              height={200}
              className="mt-12 mr-auto rounded-full object-cover"
            />
          </div>
          <div className="flex-1">
            {/* REGISTRATION FORM */}
            {/* //TODO WAIT FOR PAYLOAD FORM SETUP */}
            {/* <RegistrationForm /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionFour
