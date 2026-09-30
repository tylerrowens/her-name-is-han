import {defineField, defineType} from 'sanity'

export const menuPhoto = defineType({
  name: 'menuPhoto',
  title: 'Menu Photo',
  type: 'image',

  options: {
    hotspot: true,
  },

  validation: (rule) => rule.required().assetRequired().error('Upload or select an image.'),

  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      description: 'Briefly describe the photograph for screen readers.',
      validation: (rule) => rule.required().error('Add alternative text.'),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional text displayed below the image.',
    }),
  ],
})
