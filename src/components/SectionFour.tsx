/*********************
 * File: SectionFour.tsx
 * Description: SectionFour component with Registration form
 ********************/

import React, { Suspense } from "react";
import Image from "next/image";
import RegistrationForm from "./RegistrationForm";
import { getPayload } from "payload";
import config from "@/payload.config";
import ClientOnlyWrapper from "./ClientOnlyWrapper";
import SlideElementWrapper from "./SlideElementWrapper";

let formId: string | null | number = null;

async function fetchOnlyFormId(): Promise<string | null | number> {
  if (formId) return formId;

  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "forms",
    limit: 1,
    depth: 0,
  });

  formId = docs?.[0]?.id ?? null;
  return formId;
}

// Start fetch immediately (server-side); components can await fetchOnlyFormId()
const actualFormId = await fetchOnlyFormId();

const SectionFour = () => {
  return (
    <section
      id="s4"
      className="bg-red-hat-gray min-h-120 pt-14 pb-12 lg:pt-8 lg:pb-14"
    >
      <div className="mx-auto flex max-w-[1150px] flex-col justify-start">
        <h2 className="text-red-hat-red mx-auto mb-2 pt-2 text-center text-4xl font-[800] lg:mb-0 lg:pt-4 xl:text-[2.5rem]">
          Registration
        </h2>
        <div className="mt-4 flex flex-col items-center justify-center px-1 lg:mt-10 lg:flex-row lg:items-start lg:gap-0 lg:px-0 xl:gap-16">
          <div className="flex-1 lg:mt-20 lg:-mr-10 lg:ml-20 xl:-mr-20 xl:ml-0">
            {/* WEBINAR INFO */}
            <p className="text-center text-lg leading-relaxed font-bold lg:text-left lg:text-2xl xl:text-2xl">
              Live Webinar
              <br className="" />
              Unlocking the Value of Your Linux Estate:
              <br className="" />A Red Hat Assessment Deep Dive
            </p>
            {/* WEBINAR DATE/TIME/PRESENTER */}
            {/* This w-fit class allows to center the list yet still keeping the text left aligned */}
            <ul className="mx-auto mt-8 flex w-fit flex-col gap-3 text-left text-lg min-[1200px]:text-2xl lg:mx-0 lg:w-full lg:text-xl xl:text-2xl">
              <li>Date: 26th March</li>
              <li>Time: 10:00-11:00</li>
              <li>Presenter: Darryl Kelly</li>
            </ul>
            <Image
              src="/darryl-kelly.png"
              alt="Webinar"
              width={200}
              height={200}
              className="mx-auto mt-12 mb-8 h-48 w-48 rounded-full object-cover lg:mx-0 lg:mr-auto lg:mb-0 lg:h-64 lg:w-64"
              priority
            />
          </div>
          <div className="flex-1" id="s4-reg-form">
            <Suspense fallback={<div>Loading...</div>}>
              <ClientOnlyWrapper>
                <SlideElementWrapper slideFrom="right" duration="1.0">
                  <RegistrationForm formId={actualFormId} />
                </SlideElementWrapper>
              </ClientOnlyWrapper>
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
