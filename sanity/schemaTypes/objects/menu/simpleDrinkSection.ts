import {defineArrayMember, defineField, defineType} from 'sanity'

export const simpleDrinkSection = defineType({
  name: 'simpleDrinkSection',
  title: 'Drink Items (No Description)',
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
      of: [defineArrayMember({type: 'drinkItem'})],
      validation: (rule) => rule.required().min(1).error('Add at least one menu item.'),
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Drink group without heading',
      }
    },
  },
})
