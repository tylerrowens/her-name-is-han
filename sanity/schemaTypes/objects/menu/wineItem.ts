import {defineField, defineType} from 'sanity'

export const wineItem = defineType({
  name: 'wineItem',
  title: 'Wine Item',
  type: 'object',

  fields: [
    defineField({
      name: 'title',
      title: 'Wine Name',
      type: 'string',
      validation: (rule) => rule.required().error('Enter wine name.'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'glassPrice',
      title: 'Glass Price',
      type: 'number',
    }),
    defineField({
      name: 'bottlePrice',
      title: 'Bottle Price',
      type: 'number',
    }),
  ],

  validation: (rule) =>
    rule.custom((value) => {
      if (!value) return true

      const hasGlassPrice = typeof value.glassPrice === 'number'
      const hasBottlePrice = typeof value.bottlePrice === 'number'

      return hasGlassPrice || hasBottlePrice || 'Enter a glass price or a bottle price.'
    }),

  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
