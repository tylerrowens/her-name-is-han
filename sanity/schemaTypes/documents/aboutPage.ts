import {defineArrayMember, defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'story',
      title: 'Our Story',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cards',
      title: 'Press Cards',
      type: 'array',
      of: [
        defineArrayMember({type: 'fullQuoteCard'}),
        defineArrayMember({type: 'simpleQuoteCard'}),
        defineArrayMember({type: 'dialogueCard'}),
      ],
    }),
  ],
})