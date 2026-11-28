import {defineField, defineType} from 'sanity'

export const locationsPage = defineType({
  name: 'locationsPage',
  title: 'Locations Page',
  type: 'document',
  fields: [
    defineField({
      name: 'info',
      title: 'Info',
      type: 'simplePortableText',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Locations Page'}
    },
  },
})
