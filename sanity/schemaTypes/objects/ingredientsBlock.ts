import {defineType, defineField, defineArrayMember} from 'sanity'
import {LemonIcon} from '@sanity/icons/Lemon'

export const ingredientsBlock = defineType({
  name: 'ingredientsBlock',
  title: 'Ingredients',
  type: 'object',
  icon: LemonIcon,
  fields: [
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
      validation: (rule) => rule.required().min(1).error('Add at least one ingredient.'),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Ingredients',
      }
    },
  },
})
