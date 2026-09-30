import {defineArrayMember, defineField, defineType} from 'sanity'

export const wineSection = defineType({
  name: 'wineSection',
  title: 'Wine Group',
  type: 'object',

  fields: [
    defineField({
      name: 'title',
      title: 'Heading',
      type: 'string',
      initialValue: 'Wine',
      validation: (rule) => rule.required().error('Enter a heading.'),
    }),
    defineField({
      name: 'subsections',
      title: 'Wine Subsections',
      type: 'array',
      description: 'Add and arrange Red, White, Sparkling, and other groups.',
      of: [
        defineArrayMember({type: 'wineSubsection'}),
      ],
      validation: (rule) =>
        rule.required().min(1).error('Add at least one wine subsection.'),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      description: 'Displayed after this wine group, in this order.',
      of: [
        defineArrayMember({type: 'menuImage'}),
        defineArrayMember({type: 'menuImageDiptych'}),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})