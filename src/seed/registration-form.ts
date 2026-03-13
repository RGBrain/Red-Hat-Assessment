import { RequiredDataFromCollectionSlug } from "payload";

export const eventContactForm: RequiredDataFromCollectionSlug<"forms"> = {
  title: "Event Contact Form",

  fields: [
    {
      id: "6861f482f6964e3c47b4c5ef",
      name: "event",
      label: "Event",
      width: null,
      defaultValue: null,
      placeholder: null,
      required: true,
      blockName: null,

      options: [
        {
          id: "6861f4b3f6964e3c47b4c5f0",
          label: "Fintech Dinner Club",
          value: "1-femitech",
        },
        {
          id: "6861f543f6964e3c47b4c5f1",
          label: "Rooftop BBQ",
          value: "2-rooftop",
        },

        {
          id: "6861f576f6964e3c47b4c5f2",
          label: "CISO @ The O2 Club",
          value: "3-ciso",
        },
      ],
      blockType: "select",
    },
    {
      id: "6861f670f6964e3c47b4c5f3",
      name: "fullName",
      label: "Full Name",
      width: null,
      defaultValue: null,
      required: true,
      blockName: null,
      blockType: "text",
    },
    {
      id: "6861f681f6964e3c47b4c5f4",
      name: "organisation",
      label: "Organisation",
      width: null,
      defaultValue: null,
      required: true,
      blockName: null,
      blockType: "text",
    },
    {
      id: "6861f6d9f6964e3c47b4c5f5",
      name: "jobTitle",
      label: "Job Title",
      width: null,
      defaultValue: null,
      required: true,
      blockName: null,
      blockType: "text",
    },
    {
      id: "6861f6f5f6964e3c47b4c5f6",
      name: "email",
      label: "Email",
      width: null,
      required: true,
      blockName: null,
      blockType: "email",
    },
    {
      id: "6861f708f6964e3c47b4c5f7",
      name: "contactNumber",
      label: "Contact Number",
      width: null,
      defaultValue: null,
      required: true,
      blockName: null,
      blockType: "text",
    },
    {
      id: "6861f72af6964e3c47b4c5f8",
      name: "dietaryRequirements",
      label: "Dietary Requirements",
      width: null,
      defaultValue: null,
      required: null,
      blockName: null,
      blockType: "text",
    },

    {
      id: "6861f741f6964e3c47b4c5f9",
      name: "agreement",
      label:
        "I agree to my data being handled in line with Remitech's privacy policy",
      width: null,
      required: true,
      defaultValue: null,
      blockName: null,
      blockType: "checkbox",
    },
  ],
  submitButtonLabel: "Send",
  confirmationType: "message",
  confirmationMessage: {
    root: {
      type: "root",
      format: "",
      indent: 0,
      version: 1,

      children: [
        {
          type: "paragraph",
          format: "",
          indent: 0,
          version: 1,

          children: [
            {
              mode: "normal",
              text: "Form submitted successfully",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: "ltr",
          textStyle: "",
          textFormat: 0,
        },
      ],
      direction: "ltr",
    },
  },
  redirect: {
    url: null,
  },
  emails: [
    {
      id: "6861f194f6964e3c47b4c5ee",
      emailTo: "richard.brain@hotmail.co.uk",
      cc: null,
      bcc: null,
      replyTo: null,
      emailFrom: "emails.bwd@zohomail.com",
      subject: "Remitech Event Contact Form Submission",

      message: {
        root: {
          type: "root",
          format: "",
          indent: 0,
          version: 1,

          children: [
            {
              type: "paragraph",
              format: "",
              indent: 0,
              version: 1,

              children: [
                {
                  mode: "normal",
                  text: "Remitech Event Contact Form has been submitted:",
                  type: "text",
                  style: "",
                  detail: 0,
                  format: 0,
                  version: 1,
                },
                {
                  type: "linebreak",
                  version: 1,
                },
                {
                  type: "linebreak",
                  version: 1,
                },
                {
                  mode: "normal",
                  text: "{{*:table}}",
                  type: "text",
                  style: "",
                  detail: 0,
                  format: 0,
                  version: 1,
                },
                {
                  type: "linebreak",
                  version: 1,
                },
                {
                  type: "linebreak",
                  version: 1,
                },

                {
                  mode: "normal",
                  text: "BWD email services",
                  type: "text",
                  style: "",
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: "ltr",
              textStyle: "",
              textFormat: 0,
            },
          ],
          direction: "ltr",
        },
      },
    },
  ],
  updatedAt: "2025-06-30T02:35:43.317Z",
  createdAt: "2025-06-30T02:35:43.258Z",
};
