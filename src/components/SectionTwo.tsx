/*********************
 * File: SectionTwo.tsx
 * Description: SectionTwo component
 * This section has a red background with white text (and wavy top and bottom borders)
 ********************/

import React from 'react'

const SectionTwo = () => {
  return (
    <section id="s2" className="py-20 bg-red-hat-red text-white relative overflow-hidden">
      {/* Top Curve */}
      {/* TODO This svg code is auto generated, but next can try and make the wavyness to match the figma */}
      <svg
        className="absolute top-0 left-0 w-full h-[40px]"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path fill="white" d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z" />
      </svg>

      {/* Content */}
      <div className="w-full mx-auto flex flex-col text-2xl gap-10 max-w-[1300px] relative z-10">
        <p>
          Keeping your Linux environment secure, compliant, and cost-effective is harder than
          ever—especially with sprawling estates, legacy configurations, and rising operational
          pressure.
        </p>

        <p>
          In this session, we’ll walk through how a RHEL Estate Assessment can transform the way you
          manage your Red Hat environment by providing deep insights into configuration drift,
          security posture, performance issues, and subscription alignment.
        </p>
      </div>

      {/* Bottom Curve */}
      {/* TODO This svg code is auto generated, but next can try and make the wavyness to match the figma */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[40px]"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          d="M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,100 L0,100 Z"
        />
      </svg>
    </section>
  )
}

export default SectionTwo
