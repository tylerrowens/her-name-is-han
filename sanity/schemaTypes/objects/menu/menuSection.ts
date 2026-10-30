import {defineArrayMember, defineField, defineType} from 'sanity'

export const menuSection = defineType({
  name: 'menuSection',
  title: 'Menu Section',
  type: 'object',

  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Displayed in the colored sticky panel.',
      validation: (rule) => rule.required().error('Enter a section title.'),
    }),
    defineField({
      name: 'koreanTitle',
      title: 'Korean Section Title',
      type: 'string',
      description: 'Displayed in the colored sticky panel.',
      validation: (rule) => rule.required().error('Enter a section korean title.'),
    }),
    defineField({
      name: 'content',
      title: 'Content Groups',
      type: 'array',
      description: 'Displayed in the right-hand column in this order.',
      of: [
        defineArrayMember({type: 'foodSection'}),
        defineArrayMember({type: 'wineSection'}),
        defineArrayMember({type: 'simpleDrinkSection'}),
      ],
      validation: (rule) => rule.required().min(1).error('Add at least one content group.'),
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
