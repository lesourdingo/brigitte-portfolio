import { defineCollection, defineContentConfig } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    peintures: defineCollection({
      type: "page",
      source: "peintures/**",
    }),
    scultures: defineCollection({
      type: "page",
      source: "scultures/**",
    }),
  },
});
