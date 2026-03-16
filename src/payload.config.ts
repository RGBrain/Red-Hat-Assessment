import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { formBuilderPlugin } from "@payloadcms/plugin-form-builder";

import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import nodemailer from "nodemailer";

// import { sqliteAdapter } from "@payloadcms/db-sqlite";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || "",
    },
  }),
  // db: sqliteAdapter({
  //   client: {
  //     url: "file:./payload.db",
  //   },
  // }),
  sharp,
  plugins: [
    formBuilderPlugin({
      formOverrides: {},
      formSubmissionOverrides: {},
    }),
  ],
  email: nodemailerAdapter({
    defaultFromAddress: process.env.SMTP_USER || "",
    defaultFromName: process.env.SMTP_FROM_NAME || "",
    // Nodemailer transportOptions
    // Any Nodemailer transport
    transport: await nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465, //465, //587
      secure: true, // true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.G_APP_PW,
      },
    }),
  }),
});
