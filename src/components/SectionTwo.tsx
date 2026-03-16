/*********************
 * File: SectionTwo.tsx
 * Description: SectionTwo component - it has info text (in two paragraphs)
 * This section has a red background with white text (and wavy top and bottom borders)
 ********************/

import React from "react";

const SectionTwo = () => {
  return (
    <>
      {/* MOBILE VERSION */}
      <section
        id="s2"
        className="bg-red-hat-red relative overflow-hidden py-10 text-white min-[1100px]:hidden lg:py-20"
      >
        {/* Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1300px] flex-col gap-4 px-10 text-lg leading-snug min-[1400px]:px-0 lg:gap-10 lg:px-20 lg:text-2xl lg:leading-normal">
          <p>
            Keeping your Linux environment secure, compliant, and cost-effective
            is harder than ever—especially with sprawling estates, legacy
            configurations, and rising operational pressure.
          </p>

          <p>
            In this session, we’ll walk through how a RHEL Estate Assessment can
            transform the way you manage your Red Hat environment by providing
            deep insights into configuration drift, security posture,
            performance issues, and subscription alignment.
          </p>
        </div>
      </section>

      {/* DESKTOP VERSION */}
      <section
        id="s2"
        className="relative hidden h-[470px] overflow-hidden py-10 text-white min-[1100px]:block lg:py-20"
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 z-45 h-full w-full"
        >
          <path
            fill="#ee0000"
            /* TOP EDGE: Left (0,50) to Right (100,50)
      BOTTOM EDGE: Right (100,90) to Left (0,90)
    */
            d="M 0,2
             C 25,-5, 70,20, 100,0
             L 100,90
             C 75,85, 25,70, 0,90
             Z"

            //       d="M 0,10
            //  C 25,0, 25,15, 50,20
            //  C 60,30, 80,20, 90,18
            //  L 100,80
            //  C 75,100, 25,30, 0,90
            //  Z"
          />
        </svg>

        {/* Content */}
        <div className="relative z-48 mx-auto mt-9 flex w-full max-w-[1300px] flex-col gap-4 px-10 text-lg leading-snug font-semibold min-[1400px]:px-0 lg:gap-10 lg:px-20 lg:text-2xl lg:leading-snug">
          <p>
            Keeping your Linux environment secure, compliant, and cost-effective
            is harder than ever—especially with sprawling estates, legacy
            configurations, and rising operational pressure.
          </p>

          <p>
            In this session, we’ll walk through how a RHEL Estate Assessment can
            transform the way you manage your Red Hat environment by providing
            deep insights into configuration drift, security posture,
            performance issues, and subscription alignment.
          </p>
        </div>

        {/* Bottom Curve */}
        {/* TODO This svg code is auto generated, but next can try and make the wavyness to match the figma */}
      </section>
    </>
  );
};

export default SectionTwo;
