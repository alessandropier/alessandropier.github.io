import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    datetime: z.string(),
    dateLabel: z.string(),
    image: z.string(),
    alt: z.string(),
    excerpt: z.string(),

    github: z.string().url().optional(),
    youtube: z.string().url().optional(),
  }),
});

export const collections = { blog };
