/**********************
 * File: RegistrationForm.tsx
 * Description: RegistrationForm component
 * There are five text inputs, as well as a checkbox which must be checked for the form to be submittable
 *********************/

"use client";

import React from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { useState, useEffect, useRef } from "react";
import Skeleton from "react-loading-skeleton"; //TODO  skeleton for form is still to do
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton styles
import emailCSV from "@/lib/emailCSV";
import posthog from "posthog-js";
import { useSearchParams } from "next/navigation";

const RegistrationForm = ({ formId }: { formId: string | null | number }) => {
  const [cmsForm, setCmsForm] = useState<any | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [contactFormJustSubmitted, setContactFormJustSubmitted] =
    useState<boolean>(false);

  //* GET utm_source FROM THE URL

  //* ARRAY OF ALL ACCEPTED 23 UTM SOURCES:
  const arrayOfUtmSources = [
    "red-hat",
    "softcat",
    "scc",
    "computacenter",
    "northdoor",
    "meridian",
    "crayon",
    "elyzium",
    "cdw",
    "xma",
    "microlise",
    "red-helix",
    "insight",
    "prolifics",
    "responsiv",
    "formuspro",
    "celerity",
    "bytes",
    "integres",
    "innovecom",
    "securelinx",
    "modenlogic",
    "service-express",
  ];

  //* ARRAY OF ALL ACCEPTED 23 UTM SOURCES:
  //! IT IS IMPORTANT, THAT THE INDEXES LINE UP EXACTLY BETWEEN THE ABOVE AND BELOW ARRAYS, TO GIVE ACCURATE UTM SOURCE DATA
  const arrayOfUtmSourcesReadable = [
    "Red Hat",
    "Softcat",
    "SCC",
    "Computacenter",
    "Northdoor",
    "Meridian",
    "Crayon",
    "Elyzium",
    "CDW",
    "XMA",
    "Microlise",
    "Red Helix",
    "Insight",
    "Prolifics",
    "Responsiv",
    "FormusPro",
    "Celerity",
    "Bytes",
    "Integres",
    "Innovecom",
    "Securelinx",
    "ModenLogic",
    "Service Express",
  ];

  // const UtmSourceComponent = () => {
  const searchParams = useSearchParams();

  // Get the specific UTM source
  let utmSource = searchParams.get("utm_source");

  // If utmSource is either undefined OR if it is not in the arrayOfUtmSources, then return "undefined"
  if (!utmSource || !arrayOfUtmSources.includes(utmSource)) {
    utmSource = "undefined";
  } else {
    // find the index of the utmSource in the arrayOfUtmSources and use that index to get the readable version from arrayOfUtmSourcesReadable
    const index = arrayOfUtmSources.indexOf(utmSource);
    utmSource = arrayOfUtmSourcesReadable[index];
  }
  //* END OF CODE TO GET utm_source FROM URL

  /////////////////////

  //*   CHECK IF ALL FIELDS ARE FILLED-OUT AND ENABLE/DISABLE THE SUBMIT BUTTON ACCORDINGLY
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    businessMobile: "",
    company: "",
    jobTitle: "",
    agreement: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name } = e.target;
    let { value } = e.target;

    if (name === "agreement") {
      value = (e.target as HTMLInputElement).checked ? "1" : "";
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Check if all required fields are filled
  useEffect(() => {
    const isFormComplete = Object.values(formData).every(
      (value) => value !== "",
    );
    setIsButtonDisabled(!isFormComplete);
  }, [formData]); // Re-run whenever formData changes

  //* END OF CODE RE REGISTER BUTTON ENABLE/DISABLE BASED ON WHETHER FIELDS ARE FILLED OUT

  ////////////////////////////

  //* BUSINESS MOBILE INPUT VALIDATION - SUPPRESS DEFAULT TOOLTIP AND SHOW CUSTOM ONE INSTEAD, WHEN THE INPUT IS INVALID

  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);

    // Validate the input using the pattern
    const regex =
      /^(?:(?:\+|00)44|0)[1-3578](?:[ \t-]?\d){8,10}$|^(?:\+|00)(?!44)[1-9]\d{6,14}$/;
    if (!regex.test(value)) {
      const msg = "Please enter a valid phone number";
      setErrorMessage(msg);
      e.target.setCustomValidity(msg); // show custom validation tooltip
    } else {
      setErrorMessage("");
      e.target.setCustomValidity(""); // clear custom validation message
    }
  };

  //* END OF CODE FOR BUSINESS MOBILE INPUT VALIDATION

  ////////////////////////////

  // 1) get the form from payload
  // Fetch form configuration

  useEffect(() => {
    fetch(`/api/forms/${formId}`)
      .then((res) => res.json())
      .then((data) => {
        // setTimeout(() => setCmsForm(data), 3000);
        setCmsForm(data);
      })
      .catch((err) => {
        console.error("Error fetching form configuration:", err);
      });
  }, [formId]);

  //* 2) render the form based on field types

  //! TEST
  //! console.log("utmSource:", utmSource); // Log the utmSource to verify it's being captured correctly

  // handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setContactFormJustSubmitted(true);

    const formDataA = new FormData(e.currentTarget);

    // convert the form data to a json object, for fields that are not files
    const dataToSend = Array.from(formDataA.entries()).map(([name, value]) => ({
      field: name,
      value: value.toString(),
    }));

    // send the form data to payload

    const response = await fetch("/api/form-submissions", {
      method: "POST",
      body: JSON.stringify({
        form: formId,
        submissionData: dataToSend,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // setSuccess(true);
      const emailField = dataToSend.find((d) => d.field === "email");
      if (emailField?.value) {
        posthog.identify(emailField.value, { email: emailField.value });
      }
      posthog.capture("registration_form_submitted", {
        form_id: formId,
      });
    } else {
      // setError("Form submission failed");
      // setSuccess(false);
      posthog.capture("registration_form_submission_failed", {
        form_id: formId,
        status: response.status,
      });
    }

    // reset the form
    formRef.current?.reset();

    emailCSV(
      "CSV Red Hat form submissions",
      "Please find a list of all Red Hat form submissions attached \n\n\nBrain Web Dev",
      "red-hat-form-submissions",
    );

    setPhone("");
  };

  if (!cmsForm)
    return (
      <>
        {/* MOBILE SKELETON */}
        <div className="-mx-40 mt-12 flex w-full justify-stretch">
          <div className="border-red-hat-red block w-full max-w-[500px] min-w-[350px] flex-1 rounded-md border bg-white px-6 pt-3 lg:hidden">
            <div className="mx-auto w-full px-0 py-0 pt-4 text-sm">
              <div className="w-full">
                <Skeleton count={6} height={52} className="my-6 rounded-3xl" />

                <Skeleton
                  count={1}
                  height={52}
                  className="my-6 mt-10 rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP SKELETON */}
        <div className="border-red-hat-red -mx-8 hidden max-w-[500px] min-w-[350px] rounded-md border bg-white px-0 pt-3 lg:mr-4 lg:block lg:h-[746px] lg:w-[640px] lg:max-w-[1500px]">
          <div className="mx-auto w-full max-w-xl px-0 py-0 pt-4 text-sm">
            <div className="w-full">
              <Skeleton count={6} height={52} className="my-6 rounded-3xl" />

              <Skeleton
                count={1}
                height={52}
                className="my-6 mt-10 rounded-3xl"
              />
            </div>
          </div>
        </div>
      </>
    );

  // console.log("Final utmSource value being used:", utmSource);    // Log the final utmSource value to verify the catch-all logic is working

  if (contactFormJustSubmitted) {
    setTimeout(() => {
      setContactFormJustSubmitted(false);
    }, 4000);
    return (
      <div className="mx-auto block pt-40 pb-28 text-center text-xl font-bold md:pb-19 xl:pb-26">
        <RichText data={cmsForm.confirmationMessage} />
      </div>
    );
  }

  return (
    <>
      <div className="border-red-hat-red lg:max-auto -mx-8 mt-12 rounded-md border bg-white p-6 text-sm text-gray-600 lg:mt-0 lg:mr-4">
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="flex flex-col items-stretch justify-between gap-y-6">
            {cmsForm.fields.map((field: any, idx: number) => {
              const id = field.name ?? `field-${idx}`;
              const inputType = field.blockType ?? field.type ?? "text";
              const isCheckbox = inputType === "checkbox";
              const isUtmSourceField = field.name === "utmSource";

              return (
                <div
                  key={id}
                  className={
                    isCheckbox
                      ? "flex items-start space-x-3"
                      : isUtmSourceField
                        ? "hidden"
                        : "mb-0"
                  }
                >
                  {!isCheckbox && field.label}
                  <br />
                  <input
                    type={isCheckbox ? "checkbox" : inputType}
                    name={field.name}
                    id={id}
                    {...(Boolean(field.required) && {
                      onChange: handleChange,
                    })}
                    {...(field.name === "businessMobile" && {
                      title: "Please enter a valid phone number",
                      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                        handlePhoneChange(e);
                        handleChange(e);
                      },
                      value: phone,
                    })}
                    className={
                      isCheckbox
                        ? "mt-0.5 h-4 w-4 rounded-sm"
                        : "bg-inputbg placeholder-inputPlaceholder mt-2 box-border h-6 w-full rounded-md p-4 pl-4 text-xl outline-1 outline-gray-300 md:py-6 xl:h-12 xl:text-[1.40rem]"
                    }
                    placeholder={``}
                    required={Boolean(field.required)}
                    {...(isUtmSourceField && {
                      readOnly: true,
                      value: utmSource,
                    })}
                  />
                  {isCheckbox && (
                    <label htmlFor={id} className="text-sm text-gray-700">
                      {`I have read and agree to the Microsoft event terms and conditions*`}
                    </label>
                  )}
                </div>
              );
            })}
            <button
              className="cursor-pointer rounded-lg bg-black p-4 text-white disabled:cursor-not-allowed disabled:bg-[#aaaaaa] disabled:text-[#eeeeee]"
              type="submit"
              disabled={isButtonDisabled}
            >
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
