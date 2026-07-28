import {defineType, defineField} from 'sanity'

export const textBlock = defineType({
  name: 'textBlock',
  title: 'Text Block',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'simplePortableText',
      validation: (rule) => rule.required(),
    }),
  ],
})
