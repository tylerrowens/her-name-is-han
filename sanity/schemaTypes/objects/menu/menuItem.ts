import {defineArrayMember, defineField, defineType} from 'sanity'

export const menuItem = defineType({
  name: 'menuItem',
  title: 'Menu Item',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (rule) => rule.required().error('Enter price'),
    }),
    defineField({
      name: 'addons',
      title: 'Add-ons and Variations',
      type: 'array',
      of: [defineArrayMember({type: 'menuAddon'})],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'koreanTitle',
    },
  },
})
