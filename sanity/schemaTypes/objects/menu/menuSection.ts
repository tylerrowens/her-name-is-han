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
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          {title: 'Light Blue', value: 'blue'},
          {title: 'Pale Yellow', value: 'yellow'},
        ],
        layout: 'radio',
      },
      initialValue: 'blue',
      validation: (rule) =>
        rule.required().error('Select a background color.'),
    }),
    defineField({
      name: 'content',
      title: 'Content Groups',
      type: 'array',
      description: 'Displayed in the right-hand column in this order.',
      of: [
        defineArrayMember({type: 'foodSection'}),
        defineArrayMember({type: 'wineSection'}),
      ],
      validation: (rule) =>
        rule.required().min(1).error('Add at least one content group.'),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'backgroundColor',
    },
  },
})