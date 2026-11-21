import {defineArrayMember, defineField, defineType} from 'sanity'
import { colorOptions } from '../colorOptions'

export const dialogueCard = defineType({
  name: 'dialogueCard',
  title: 'Dialogue',
  type: 'object',
  fields: [
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {list: colorOptions},
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      options: {list: colorOptions},
    }),
    defineField({name: 'introText', title: 'Intro Text', type: 'text'}),
    defineField({
      name: 'entries',
      title: 'Dialogue Entries',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'dialogueEntry',
          title: 'Dialogue Entry',
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Name', type: 'string'}),
            defineField({name: 'quote', title: 'Quote', type: 'text'}),
          ],
          preview: {select: {title: 'name', subtitle: 'quote'}},
        }),
      ],
      validation: (rule) => rule.length(3).error('Add exactly three dialogue entries.'),
    }),
    defineField({name: 'outroText', title: 'Outro Text', type: 'text'}),
  ],
  preview: {
    select: {title: 'introText', subtitle: 'outroText'},
  },
})