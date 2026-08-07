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
          {title: 'Large Image', value: 'large'},
          {title: 'Medium Image', value: 'medium'},
          {title: 'Small Image', value: 'small'},
          {title: 'Tiny Image', value: 'tiny'},
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
  preview: {
    select: {
      size: 'size',
      media: 'image',
    },
    prepare({size, media}) {
      const sizeTitles: Record<string, string> = {
        large: 'Large Image',
        medium: 'Medium Image',
        small: 'Small Image',
        tiny: 'Tiny Image',
      }

      return {
        title: sizeTitles[size] ?? 'Image',
        media,
      }
    },
  },
})
