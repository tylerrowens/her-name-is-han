import {defineField, defineType} from 'sanity'

export const postImage = defineType({
  name: 'postImage',
  title: 'Post Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'size',
      title: 'Image Size',
      type: 'string',
      options: {
        list: [
          {title: 'Large', value: 'large'},
          {title: 'Medium', value: 'medium'},
          {title: 'Small', value: 'small'},
          {title: 'Tiny', value: 'tiny'},
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'simplePortableText',
    }),
  ],
})
