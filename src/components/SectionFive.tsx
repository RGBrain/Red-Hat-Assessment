/*********************
 * File: SectionFive.tsx
 * Description: SectionFive component
 * This is the 'Get in Touch' section with email address
 ********************/

"use client";

import React from "react";
import { Mail } from "lucide-react";
import posthog from "posthog-js";
import FadeTextWrapper from "./FadeTextWrapper";

const SectionFive = () => {
  const handleEmailClick = () => {
    posthog.capture("contact_email_clicked", {
      email: "estate-assessment@businesstech.tech",
    });
  };

  return (
    <section id="s5" className="py-8">
      <div className="mx-auto flex max-w-[1350px] flex-col items-center">
        <FadeTextWrapper>
          <h2 className="text-red-hat-red mx-auto mb-6 text-center text-3xl font-normal lg:mb-10">
            Get in Touch
          </h2>
          <Mail size={70} strokeWidth={0.8} className="text-red-hat-red mb-4" />

          <p className="mx-auto mt-2 mb-4 text-center text-lg">
            <a
              href="mailto:estate-assessment@businesstech.tech"
              className="text-red-hat-red underline"
              onClick={handleEmailClick}
            >
              estate-assessment@businesstech.tech
            </a>
          </p>

          <div className="mt-8 w-full">
            {/* LOGOS */}
            <div className="flex w-full justify-center lg:justify-end">
              <img
                src="/logos-td-synnex-and-red-hat.png"
                alt="TD Synnex and Red Hat"
                className="h-12 object-contain md:h-16 lg:pr-10"
              />
            </div>
          </div>
        </FadeTextWrapper>
      </div>
    </section>
  );
};

export default SectionFive;
