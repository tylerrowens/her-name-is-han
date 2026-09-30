import {defineArrayMember, defineField, defineType} from 'sanity'

export const wineSubsection = defineType({
  name: 'wineSubsection',
  title: 'Wine Subsection',
  type: 'object',

  fields: [
    defineField({
      name: 'title',
      title: 'Subsection Title',
      type: 'string',
      validation: (rule) => rule.required().error('Enter a subsection title'),
    }),
    defineField({
      name: 'items',
      title: 'Wines',
      type: 'array',
      of: [defineArrayMember({type: 'wineItem'})],
      validation: (rule) => rule.required().min(1).error('Add at least one wine.'),
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
