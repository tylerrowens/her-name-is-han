import {defineType, defineField, defineArrayMember} from 'sanity'

export const ingredientsBlock = defineType({
  name: 'ingredientsBlock',
  title: 'Ingredients',
  type: 'object',
  fields: [
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'simplePortableText',
        }),
      ],
      validation: (rule) => rule.required().min(1).error('Add at least one ingredient.'),
    }),
  ],
})
