/*********************
 * File: SectionOne.tsx
 * Description: SectionOne component
 * This section has the Red Hat Server Laptop image on the left
 ********************/

import React from "react";
import Image from "next/image";

const SectionOne = () => {
  return (
    <section id="s1" className="py-20">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col-reverse items-start justify-evenly gap-10 pl-8 lg:flex-row lg:items-center lg:pl-0">
        {/* ADDED A MAX-WIDTH SO THE SECTION IS CROPPED ON VERY WIDE SCREENS */}
        <Image
          src="/red-hat-server.png"
          alt="Red Hat Server"
          width={500}
          height={500}
          className="-ml-6 w-full flex-1 lg:ml-0"
        />
        <div className="flex flex-1 flex-col gap-10 lg:pr-5">
          {/* Div for title and subtitle */}
          <h1 className="text-4xl leading-snug font-bold lg:text-5xl">
            Unlocking the Value of Your Linux Estate
          </h1>
          <h2 className="text-xl font-semibold lg:text-3xl">
            A Red Hat Assessment Deep Dive
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
