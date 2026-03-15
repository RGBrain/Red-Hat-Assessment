/*********************
 * File: SectionTwo.tsx
 * Description: SectionTwo component - it has info text (in two paragraphs)
 * This section has a red background with white text (and wavy top and bottom borders)
 * ADDITIONAL INFO - this page has complexity because of the top and bottom wavy borders on screens > 1100px wide. On smaller screens, the wavy borders are removed and the section has a solid red background to ensure readability and a clean design.  So, a breakpoint of 1100px is used to switch between the two (i.e. the simplicity for is a version of <section> element for the two versions, one with wavy borders and one without, and CSS classes are used to show/hide the appropriate version based on screen width).
 ********************/

import React from "react";

const SectionTwo = () => {
  return (
    <>
      {/* MOBILE VERSION */}
      <section className="bg-red-hat-red relative overflow-hidden py-10 text-white min-[1100px]:hidden md:py-12 lg:py-20">
        {/* Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1300px] flex-col gap-4 px-10 text-lg leading-snug md:px-16 lg:gap-10 lg:px-10 lg:text-2xl lg:leading-normal">
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

      {/* DESKTOP VERSION  */}
      <section className="relative hidden h-[300px] w-full overflow-hidden py-10 text-white min-[1100px]:block lg:h-[450px] lg:py-20">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <path
            fill="#ee0000"
            /* TOP EDGE: Starts at (0,15). 
             C 25,0 (Pull Up) 75,30 (Pull Down) 100,15 (End Top)
          */
            d="M0,5 
             C 20,20, 80,3, 100,5 
             L 100,95 
             C 75,80, 25,100, 0,95 
             Z"
          />
        </svg>

        {/* Content */}
        {/* THE BELOW DIV CONTENT SHOWS AND WORKS SOMEHOW, MAYBE DUE TO THE RELATIVE POSITIONING - I.E. IT KIND OF OVERLAPS ONTO OF THE WAVY DIV */}
        <div className="relative z-10 mx-auto mt-10 flex max-w-[1300px] flex-col gap-4 px-6 text-sm leading-tight min-[1100px]:px-0 sm:text-base md:text-lg lg:gap-y-10 lg:text-2xl lg:leading-normal">
          <p className="px-16">
            Keeping your Linux environment secure, compliant, and cost-effective
            is harder than ever—especially with sprawling estates, legacy
            configurations, and rising operational pressure.
          </p>

          <p className="px-16">
            In this session, we’ll walk through how a RHEL Estate Assessment can
            transform the way you manage your Red Hat environment by providing
            deep insights into configuration drift, security posture,
            performance issues, and subscription alignment.
          </p>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
