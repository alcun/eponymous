// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your blog collection with updated schema
const postsCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
      title: z.string(), // Title of the blog post
      date: z.string(), // Date of the blog post. You might also consider z.date() based on your needs
      summary: z.string(), // Summary of the blog post
      tags: z.array(z.string()).optional(), // Tags are optional
      image: z.string().optional(), // Image URL is optional
    }),
  });

// 3. Define your project collection with updated schema
const projectsCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
      title: z.string(), // Title of the project
      date: z.string(), // Date of the project. Again, z.date() is an option if you prefer actual Date objects
      summary: z.string(), // Summary of the project
      tags: z.array(z.string()).optional(), // Tags are optional
      image: z.string().optional(), // Image URL is optional
    }),
});

// 4. Export a single `collections` object to register your collections
export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
};
