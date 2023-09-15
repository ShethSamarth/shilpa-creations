import { defineField, defineType } from "sanity"

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "aboutTitle",
      title: "About Title",
      type: "string",
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
        },
      ],
    }),
    defineField({
      name: "aboutBody",
      title: "About Body",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "serviceAreasTitle",
      title: "Service Areas Title",
      type: "string",
    }),
    defineField({
      name: "serviceAreasBody",
      title: "Service Areas Body",
      type: "text",
    }),
    defineField({
      name: "serviceAreas",
      title: "Service Areas",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "pricingBody",
      title: "Pricing Body",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
})
