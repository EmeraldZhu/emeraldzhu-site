import { defineCollection, z } from "astro:content"

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
})

// Blog posts and projects share one format. Edited via Pages CMS (see .pages.yml)
const article = z.object({
  title: z.string(),
  summary: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().optional(),
  // Buttons shown under the summary, e.g. "See Demo", "See Repository"
  links: z.array(z.object({
    label: z.string(),
    url: z.string(),
    icon: z.enum(["globe", "link"]).default("link"),
  })).default([]),
})

const blog = defineCollection({
  type: "content",
  schema: article,
})

const projects = defineCollection({
  type: "content",
  schema: article,
})

const legal = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
})

export const collections = { work, blog, projects, legal }
