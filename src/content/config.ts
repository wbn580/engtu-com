import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    ogImage: z.string().optional(),
    category: z.string(),
    pubDatetime: z.string(),
    title: z.string(),
    modDatetime: z.string(),
    description: z.string(),
    readingTime: z.number().optional(),
    tags: z.array(z.string()).default([]),
    publishDate: z.string(),

  },
});

export const collections = { articles };
