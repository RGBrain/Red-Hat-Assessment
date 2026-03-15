import { RequiredDataFromCollectionSlug } from "payload";

export const registrationForm: RequiredDataFromCollectionSlug<"forms"> = {
  title: "Red Hat Assessment Form",

  fields: [
    {
      id: "69b40aac4f7a0ab48144642b",
      name: "firstName",
      label: "First Name",
      width: null,
      defaultValue: null,
      required: true,
      blockName: null,
      blockType: "text",
    },

    {
      id: "69b40ae64f7a0ab48144642d",
      name: "lastName",
      label: "Last Name",
      width: null,
      defaultValue: null,
      required: true,
      blockName: null,
      blockType: "text",
    },

    {
      id: "69b40af64f7a0ab48144642f",
      name: "email",
      label: "Email",
      width: null,
      required: true,
      blockName: null,
      blockType: "email",
    },

    {
      id: "69b40b5d4f7a0ab481446431",
      name: "businessMobile",
      label: "Business Mobile",
      width: null,
      defaultValue: null,
      required: true,
      blockName: null,
      blockType: "text",
    },

    {
      id: "69b40b7b4f7a0ab481446433",
      name: "company",
      label: "Company",
      width: null,
      defaultValue: null,
      required: true,
      blockName: null,
      blockType: "text",
    },

    {
      id: "69b40b8a4f7a0ab481446435",
      name: "jobTitle",
      label: "Job Title",
      width: null,
      defaultValue: null,
      required: true,
      blockName: null,
      blockType: "text",
    },

    {
      id: "69b40ba64f7a0ab481446437",
      name: "agreement",
      label: "Agreement",
      width: null,
      required: true,
      defaultValue: null,
      blockName: null,
      blockType: "checkbox",
    },

    {
      id: "69b590d5efd75bbeecf5784a",
      name: "utmSource",
      label: "utmSource",
      width: null,
      defaultValue: null,
      required: null,
      blockName: null,
      blockType: "text",
    },
  ],
  submitButtonLabel: "Register",
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
              text: "Registration form submitted successfully",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: null,
          textStyle: "",
          textFormat: 0,
        },
      ],
      direction: null,
    },
  },

  redirect: {
    url: "",
  },
  emails: [
    {
      id: "69b4453cf732c26593df2bff",
      emailTo: "richard.brain@hotmail.co.uk",
      cc: null,
      bcc: null,
      replyTo: "info@brainweb.dev",
      emailFrom: '"Web Notifications" <info@brainweb.dev>',
      subject: "Red Hat Assessment Registration form submitted",

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
                  text: "Registration Form Submitted",
                  type: "text",
                  style: "",
                  detail: 0,
                  format: 1,
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
                  text: "Event: 26th March - Red Hat Assessment Webinar",
                  type: "text",
                  style: "",
                  detail: 0,
                  format: 1,
                  version: 1,
                },

                {
                  type: "linebreak",
                  version: 1,
                },
              ],
              direction: null,
              textStyle: "",
              textFormat: 1,
            },

            {
              type: "paragraph",
              format: "start",
              indent: 0,
              version: 1,

              children: [
                {
                  mode: "normal",
                  text: '<table><tr><td style="padding-right:25px;">First Name</td><td>{{firstName}}</td></tr><tr><td style="padding-right:25px;">Last Name</td><td>{{lastName}}</td></tr><tr><td style="padding-right:25px;">Email</td><td>{{email}}</td></tr><tr><td style="padding-right:25px;">Business Mobile</td><td>{{businessMobile}}</td></tr><tr><td style="padding-right:25px;">Company</td><td>{{company}}</td></tr><tr><td style="padding-right:25px;">Job Title </td><td>{{jobTitle}}</td></tr><tr><td style="padding-right:25px;">Checkbox</td><td>Yes</td></tr><tr><td style="padding-right:25px;">Tracking link</td><td>{{utmSource}}</td></tr></table>',
                  type: "text",
                  style: "",
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: null,
              textStyle: "",
              textFormat: 0,
            },

            {
              type: "paragraph",
              format: "",
              indent: 0,
              version: 1,

              children: [
                {
                  type: "linebreak",
                  version: 1,
                },
              ],
              direction: null,
              textStyle: "",
              textFormat: 0,
            },
          ],
          direction: null,
        },
      },
    },
  ],
  updatedAt: "2026-03-13T13:07:44.320Z",
  createdAt: "2026-03-13T13:07:44.318Z",
};
