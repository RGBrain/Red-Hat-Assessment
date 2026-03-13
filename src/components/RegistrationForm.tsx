/*********************
 * File: RegistrationForm.tsx
 * Description: RegistrationForm component
 * There are five text inputs, as well as a checkbox which must be checked for the form to be submittable
 ********************/

"use client";

import React from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton styles
import emailCSV from "@/lib/emailCSV";

const RegistrationForm = () => {
  const [cmsForm, setCmsForm] = useState(null);
  const [error, setError] = useState(null);
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [contactFormJustSubmitted, setContactFormJustSubmitted] =
    useState(false);

  const formId = 1;

  // 1) get the form from payload

  // Fetch form configuration

  useEffect(() => {
    fetch(`/api/forms/${formId}`)
      .then((res) => res.json())
      .then((data) => {
        setCmsForm(data);
      })
      .catch((err) => setError("Error loading form"));
  }, [formId]);

  //* 2) render the form based on field types

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    //! ADD TRACKING

    setContactFormJustSubmitted(true);

    const formData = new FormData(e.currentTarget);

    // convert the form data to a json object, for fields that are not files
    const dataToSend = Array.from(formData.entries()).map(([name, value]) => ({
      field: name,
      value: value.toString(),
    }));

    // send the form data to payload

    const response = await fetch("/api/form-submissions", {
      method: "POST",
      body: JSON.stringify({
        form: 1, // form id
        submissionData: dataToSend,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setSuccess(true);
    } else {
      setError("Form submission failed");
      setSuccess(false);
    }

    // reset the form
    formRef.current?.reset();

    emailCSV(
      "Ciena form submissions",
      "Please find a list of all Ciena form submissions attached \n\n\nBrain Web Dev",
      "ciena-form-submissions",
    );
  };

  if (!cmsForm)
    return (
      <>
        {/* MOBILE SKELETON */}
        <div className="mx-auto w-full max-w-xl px-2 py-0 text-sm md:hidden">
          <div className="">
            <Skeleton count={4} height={42} className="my-[6px] rounded-3xl" />
            <div className="flex justify-center">
              <Skeleton
                count={1}
                height={42}
                className="mx-auto mt-[8px] rounded-3xl text-center"
                width={180}
                baseColor="#d1d5db"
                highlightColor="#9ca3af"
              />
            </div>
          </div>
        </div>

        {/* SKELETON > 768PX */}
        <div className="mx-auto hidden w-full max-w-[650px] px-0 py-0 pt-[2px] text-sm md:block">
          <div className="">
            <Skeleton
              count={1}
              height={45}
              className="my-[9px] rounded-3xl xl:my-[11px]"
              baseColor="#d1d5db"
              highlightColor="#9ca3af"
            />
            <Skeleton
              count={1}
              height={45}
              className="my-[9px] rounded-3xl xl:my-[11px]"
              baseColor="#d1d5db"
              highlightColor="#9ca3af"
            />
            <Skeleton
              count={1}
              height={45}
              className="mt-[9px] mb-[9px] rounded-3xl xl:my-[11px]"
              baseColor="#d1d5db"
              highlightColor="#9ca3af"
            />
            <Skeleton
              count={1}
              height={45}
              className="mt-[9px] mb-[9px] rounded-3xl xl:my-[11px]"
              baseColor="#d1d5db"
              highlightColor="#9ca3af"
            />
          </div>
        </div>
      </>
    );

  if (contactFormJustSubmitted) {
    setTimeout(() => {
      setContactFormJustSubmitted(false);
    }, 5000);
    return (
      <div className="mx-auto block pt-40 pb-28 text-center text-xl font-bold md:pb-19 xl:pb-26">
        <RichText data={cmsForm.confirmationMessage} />
      </div>
    );
  }

  return (
    <>
      <div className="p-8 px-0 pt-2 pb-0 text-sm text-gray-600 md:pb-8">
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="flex flex-col items-stretch justify-between space-y-4 md:space-y-4 xl:space-y-5">
            <input
              type={cmsForm.fields[0].blockType}
              name={cmsForm.fields[0].name}
              id={cmsForm.fields[0].name}
              className="placeholder-inputPlaceholder bg-inputbg h-6 rounded-3xl p-5 pl-8 text-xl outline-1 outline-gray-300 md:py-6 xl:h-12 xl:text-[1.40rem]"
              placeholder={cmsForm.fields[0].label}
              required
            />
            <div className="flex flex-col justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-4">
              <input
                type={cmsForm.fields[1].blockType}
                name={cmsForm.fields[1].name}
                id={cmsForm.fields[1].name}
                size="10"
                className="bg-inputbg placeholder-inputPlaceholder h-6 grow-1 rounded-3xl p-5 pl-8 text-xl outline-1 outline-gray-300 md:py-6 xl:h-12 xl:text-[1.40rem]"
                placeholder={cmsForm.fields[1].label}
                required
              />

              <input
                type={cmsForm.fields[2].blockType}
                name={cmsForm.fields[2].name}
                id={cmsForm.fields[2].name}
                size="10"
                className="bg-inputbg placeholder-inputPlaceholder h-6 grow-1 rounded-3xl p-5 pl-8 text-xl outline-1 outline-gray-300 md:py-6 xl:h-12 xl:text-[1.40rem]"
                placeholder={cmsForm.fields[2].label}
                required
              />
            </div>
            <input
              type={cmsForm.fields[3].blockType}
              name={cmsForm.fields[3].name}
              id={cmsForm.fields[3].name}
              className="bg-inputbg placeholder-inputPlaceholder h-6 rounded-3xl p-5 pl-8 text-xl outline-1 outline-gray-300 md:py-6 xl:h-12 xl:text-[1.40rem]"
              placeholder={cmsForm.fields[3].label}
              required
            />
            <button
              className="bg-red1 hover:bg-btn-hover cursor-pointer self-center rounded-3xl p-[10px] px-14 text-xl font-bold text-white transition md:self-stretch xl:text-[1.40rem]"
              type="submit"
            >
              SEND
            </button>
            ;
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
