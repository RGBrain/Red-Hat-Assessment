/*********************
 * File: SectionFour.tsx
 * Description: SectionFour component with Registration form
 ********************/

import React from "react";
import Image from "next/image";
import RegistrationForm from "./RegistrationForm";
import { getPayload } from "payload";
import config from "@/payload.config";

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
      className="bg-red-hat-gray min-h-120 pt-12 pb-12 lg:pt-8 lg:pb-6"
    >
      <div className="mx-auto flex max-w-[1150px] flex-col justify-start">
        <h2 className="text-red-hat-red mx-auto mb-10 text-center text-4xl font-bold">
          Registration
        </h2>
        <div className="mt-4 flex flex-col items-center justify-center px-10 lg:mt-10 lg:flex-row lg:items-start lg:px-0">
          <div className="flex-1">
            {/* WEBINAR INFO */}
            <p className="text-center text-lg leading-relaxed font-bold lg:text-left">
              Live Webinar -
              <br className="hidden lg:block" />
              Unlocking the Value of Your Linux Estate: A Red
              <br className="hidden lg:block" />
              Hat Assessment Deep Dive
            </p>
            {/* WEBINAR DATE/TIME/PRESENTER */}
            {/* This w-fit class allows to center the list yet still keeping the text left aligned */}
            <ul className="mx-auto mt-8 flex w-fit flex-col gap-3 text-left text-lg lg:mx-0 lg:w-full">
              <li>Date: 26th March</li>
              <li>Time: 1:00-11:00</li>
              <li>Presenter: Daryl Kelly</li>
            </ul>
            <Image
              src="/daryl-kelly.png"
              alt="Webinar"
              width={200}
              height={200}
              className="mx-auto mt-12 rounded-full object-cover lg:mx-0 lg:mr-auto"
            />
          </div>
          <div className="flex-1">
            {/* REGISTRATION FORM */}
            {/* //TODO WAIT FOR PAYLOAD FORM SETUP */}
            <RegistrationForm formId={actualFormId} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
