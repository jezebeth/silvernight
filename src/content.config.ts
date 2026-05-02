import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const chapters = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/chapters' }),
  schema: z.object({
    title: z.string(),
    chapter: z.number(),
    description: z.string().optional(),
    publishedAt: z.coerce.date(),
    illustration: z.string().optional(),
  }),
});

export const collections = { chapters };
