import { defineField, defineType } from "sanity"

export default defineType({
  name: "pricing",
  title: "Pricing",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "prices",
      title: "Prices",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
})
