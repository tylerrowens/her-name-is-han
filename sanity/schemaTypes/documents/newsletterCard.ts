import {defineField, defineType} from 'sanity'

const colorOptions = [
  {title: 'Brown', value: 'brown'},
  {title: 'Beige', value: 'beige'},
  {title: 'Cool Grey', value: 'coolGrey'},
  {title: 'Warm Grey', value: 'warmGrey'},
  {title: 'Light Navy', value: 'lightNavy'},
  {title: 'Medium Navy', value: 'mediumNavy'},
  {title: 'Dark Navy', value: 'darkNavy'},
  {title: 'Yellow', value: 'yellow'},
  {title: 'Green', value: 'green'},
  {title: 'Blue', value: 'blue'},
]

export const newsletterCard = defineType({
  name: 'newsletterCard',
  title: 'Newsletter Card',
  type: 'document',

  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (rule) => rule.required().error('Add an author.'),
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {list: colorOptions},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      options: {list: colorOptions},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'headline',
      media: 'image',
    },
  },
})
