// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Astroship'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const outreachCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Astroship'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    description: z.string(),
    publicationLink: z.string().optional(),
    githubLink: z.string().optional(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    group: z.string(),
    publishDate: z.string().transform(str => new Date(str)),
    isFormerMember: z.boolean().default(false)
  }),
});

const experimentCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    short_description: z.string(),
    description: z.string(),
    long_description: z.string(),
    publishDate: z.string().transform(str => new Date(str)),
    rank: z.number(),
    image1: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    image2: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'team': teamCollection,
  'visitors': teamCollection,
  'experiments': experimentCollection,
  'outreach': outreachCollection
};