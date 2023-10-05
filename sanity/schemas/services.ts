import { defineField, defineType } from "sanity"

export default defineType({
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          validation: (Rule) => Rule.required().min(1),
        },
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "string",
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
