import type { CollectionSlug, Payload } from "payload";
import { registrationForm } from "./registration-form";
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

  // Delete form_submissions first
  await payload.db.deleteMany({ collection: "form-submissions", where: {} });

  // Delete all other collections in parallel except 'forms'
  const otherCollections = collections.filter((c) => c !== "forms");
  await Promise.all(
    otherCollections.map((collection) =>
      payload.db.deleteMany({ collection, where: {} }),
    ),
  );

  // Finally delete the 'forms' collection
  await payload.db.deleteMany({ collection: "forms", where: {} });

  payload.logger.info(`— Seeding admin user...`);

  await payload.delete({
    collection: "users",
    depth: 0,
    where: {},
  });

  await payload.create({
    collection: "forms",
    depth: 0,
    data: registrationForm,
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
