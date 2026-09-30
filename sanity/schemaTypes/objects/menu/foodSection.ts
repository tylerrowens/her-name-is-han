import {defineArrayMember, defineField, defineType} from 'sanity'

export const foodSection = defineType({
  name: 'foodSection',
  title: 'Food / General Items',
  type: 'object',

  fields: [
    defineField({
      name: 'title',
      title: 'Heading',
      type: 'string',
      description: 'Optional. For example: Soups or Meat & Seafood.',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        defineArrayMember({type: 'menuItem'}),
      ],
      validation: (rule) =>
        rule.required().min(1).error('Add at least one menu item.'),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      description: 'Displayed after this group’s items, in this order.',
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
    prepare({title}) {
      return {
        title: title || 'Food group without heading',
        subtitle: 'Food / General Items',
      }
    },
  },
})