import {defineField, defineType} from 'sanity'
import { colorOptions } from '../colorOptions'

export const simpleQuoteCard = defineType({
    name: 'simpleQuoteCard',
    title: 'Simple Quote',
    type: 'object',
    fields: [
      defineField({name: 'quote', title: 'Quote', type: 'text'}),
      defineField({name: 'author', title: 'Author', type: 'string'}),
      defineField({name: 'articleLink', title: 'Article Link', type: 'url'}),
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
    ],
    preview: {
      select: {title: 'author', subtitle: 'quote'},
    },
  })