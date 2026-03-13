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
      name: "job",
      label: "Job",
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
  emails: [],
  updatedAt: "2026-03-13T13:07:44.320Z",
  createdAt: "2026-03-13T13:07:44.318Z",
};
