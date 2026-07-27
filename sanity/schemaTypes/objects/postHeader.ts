import {defineType, defineField} from 'sanity'

export const postHeader = defineType({
  name: 'postHeader',
  title: 'Post Header',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Feature', value: 'feature'},
          {title: 'News', value: 'news'},
          {title: 'Recipe', value: 'recipe'},
          {title: 'Playlist', value: 'playlist'},
        ],
        layout: 'tags',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'introText',
      title: 'Intro Text',
      type: 'text',
    }),
  ],
})
