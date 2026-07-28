import {defineType, defineField} from 'sanity'

export const pullQuote = defineType({
  name: 'pullQuote',
  title: 'Pull Quote',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
})
