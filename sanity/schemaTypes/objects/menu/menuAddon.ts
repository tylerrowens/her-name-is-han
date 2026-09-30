import {defineField, defineType} from 'sanity'

export const menuAddon = defineType({
  name: 'menuAddon',
  title: 'Add-on or Variation',
  type: 'object',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().error('Enter an add-on title.'),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
