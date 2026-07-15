import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    link: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/books" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      status: z.enum(["reading", "favorite", "read"]).default("read"),
      note: z.string().optional(),
      cover: image().optional(),
      order: z.number().default(99),
      link: z.string().url().optional(),
      glow: z.string().optional(),
    }),
});

const movies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/movies" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      director: z.string(),
      year: z.number(),
      status: z.enum(["watching", "favorite", "watched"]).default("watched"),
      note: z.string().optional(),
      poster: image().optional(),
      order: z.number().default(99),
      link: z.string().url().optional(),
      glow: z.string().optional(),
    }),
});

export const collections = { projects, books, movies };
