import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

// Homepage collection schema
const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    banner: z.object({
      title: z.string(),
      content: z.string(),
      image: z.string(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),
    factionIntro: z.object({
      tag: z.string(),
      title: z.string(),
      content: z.string(),
    }),
    features: z.array(
      z.object({
        title: z.string(),
        image: z.string(),
        content: z.string(),
        bulletpoints: z.array(z.string()),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      }),
    ),
  }),
});

// Team collection schema
const teamCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/team" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string(),
    order: z.number(),
    github: z.string().optional(),
    linkedin: z.string().optional(),
    itchio: z.string().optional(),
  }),
});

// Characters collection schema
const charactersCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/characters" }),
  schema: z.object({
    name: z.string(),
    faction: z.string(),
    factionColor: z.string(),
    bgColor: z.string(),
    image: z.string(),
    order: z.number(),
    portraitSide: z.enum(["left", "right"]),
    bottomAlign: z.boolean().default(false),
  }),
});

// Export collections
export const collections = {
  homepage: homepageCollection,
  characters: charactersCollection,
  team: teamCollection,
};
