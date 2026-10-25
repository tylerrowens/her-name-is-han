import {defineField, defineType} from 'sanity'

export const drinkItem = defineType({
  name: 'drinkItem',
  title: 'Drink Item',
  type: 'object',

  fields: [
    defineField({
      name: 'title',
      title: 'English Name',
      type: 'string',
      validation: (rule) => rule.required().error('Enter item name.'),
    }),
    defineField({
      name: 'koreantitle',
      title: 'Korean Name',
      type: 'string',
    }),
    defineField({
      name: 'simpleInfo',
      title: 'Size / Serving',
      type: 'string',
    }),
    defineField({
      name: 'singleServingPrice',
      title: 'Single Serving Price',
      type: 'number',
    }),
    defineField({
      name: 'pitcherPrice',
      title: 'Pitcher Price',
      type: 'number',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'koreantitle',
    },
  },
})
