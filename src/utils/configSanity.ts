import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "q5mlg9mj",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
});
