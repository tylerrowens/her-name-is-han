import {defineField, defineType} from 'sanity'
import {colorOptions} from '../colorOptions'

export const fullQuoteCard = defineType({
  name: 'fullQuoteCard',
  title: 'Full Quote',
  type: 'object',
  fields: [
    defineField({name: 'source', title: 'Source', type: 'string'}),
    defineField({name: 'publishedDate', title: 'Date', type: 'date'}),
    defineField({name: 'bigQuote', title: 'Big Quote', type: 'text'}),
    defineField({name: 'smallQuote', title: 'Small Quote', type: 'text'}),
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
    select: {title: 'source', subtitle: 'publishedDate'},
  },
})
