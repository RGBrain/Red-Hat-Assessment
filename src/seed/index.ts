import type { CollectionSlug, Payload } from "payload";
// import { contactForm as contactFormData } from "./contact-form";
import { eventContactForm } from "./eventContactForm";
import { gateForm } from "./gateForm";
import { getPayload } from "payload";
import config from "@payload-config";

const payload = await getPayload({ config });

const collections: CollectionSlug[] = ["media", "forms"];

export const seed = async ({
  payload,
}: {
  payload: Payload;
}): Promise<void> => {
  payload.logger.info("Seeding database...");

  payload.logger.info(`— Clearing collections...`);

  await Promise.all(
    collections.map((collection) =>
      payload.db.deleteMany({ collection, where: {} }),
    ),
  );

  payload.logger.info(`— Seeding admin user...`);

  await payload.delete({
    collection: "users",
    depth: 0,
    where: {},
  });

  await payload.create({
    collection: "forms",
    depth: 0,
    data: eventContactForm,
  });

  await payload.create({
    collection: "forms",
    depth: 0,
    data: gateForm,
  });

  payload.logger.info(`— Seeding form done`);

  const [notUsed1] = await Promise.all([
    payload.create({
      collection: "users",
      data: {
        email: "admin@testing.com",
        password: "admin",
        name: "Admin",
        roles: ["admin"],
      },
    }),
  ]);

  payload.logger.info("Seeded database successfully!");

  process.exit();
};

await seed({ payload });
