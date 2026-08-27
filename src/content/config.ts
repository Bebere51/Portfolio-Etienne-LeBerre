import { defineCollection } from "astro:content";
import { z } from "astro:schema";

const projects = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        url: z.string(),
        linkLabel: z.optional(z.string())
    })
});

export const collections = {
    projects
}
