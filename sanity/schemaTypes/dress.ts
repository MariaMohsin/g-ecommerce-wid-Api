import { defineType } from "sanity"

export const dress = defineType({
  name: "dress",
  title: "Dress",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(), // Title should be between 3-100 characters
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96, // Limit length of slug
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      type: "text",
      validation: (rule) => rule.required().min(10), // Ensure at least 10 characters
      title: "Description",
    },
    {
      name: "productImage",
      type: "image",
      title: "Dress Image",
      validation: (rule) => rule.required(),
    },
    {
      name: "price",
      type: "number",
      title: "Price",
      validation: (rule) => rule.required(), // Price must be a positive number
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
       // Ensure tags are unique
    },
    {
      name: "discountPercentage",
      type: "number",
      title: "Discount Percentage",
      // Discount should be between 0 and 100
    },
    {
      name: "isNew",
      type: "boolean",
      title: "New Badge",
      // Default to false if not specified
    },
    {
      name: "size",
      title: "Size",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Small", value: "small" },
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
          { title: "X-Large", value: "x-large" },
        ],
      },
    },
    {
      name: "color",
      title: "Color",
      type: "string",
      validation: (rule) => rule.required(), 
      description: "Color of the dress"
    },
  ],
})
