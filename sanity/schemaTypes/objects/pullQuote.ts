import {defineType, defineField} from 'sanity'
import {DoubleQuoteIcon} from '@sanity/icons/DoubleQuote'

export const pullQuote = defineType({
  name: 'pullQuote',
  title: 'Pull Quote',
  type: 'object',
  icon: DoubleQuoteIcon,
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Pull Quote',
      }
    },
  },
})
