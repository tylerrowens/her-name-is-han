import {defineType, defineField, defineArrayMember} from 'sanity'
import {ListIcon} from '@sanity/icons/List'

export const instructionsBlock = defineType({
  name: 'instructionsBlock',
  title: 'Instructions',
  type: 'object',
  icon: ListIcon,
  fields: [
    defineField({
      name: 'instructions',
      title: 'Instructions',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
      validation: (rule) => rule.required().min(1).error('Add at least one instruction.'),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Instructions',
      }
    },
  },
})
