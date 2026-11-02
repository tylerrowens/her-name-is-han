import {defineField, defineType} from 'sanity'

export const postImage = defineType({
  name: 'postImage',
  title: 'Post Image',
  type: 'object',
  fields: [
    defineField({
      name: 'media',
      title: 'Media',
      type: 'mainMedia',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'size',
      title: 'Media Size',
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
      mediaType: 'media.mediaType',
      image: 'media.image',
    },
    prepare({size, mediaType, image}) {
      const sizeTitles: Record<string, string> = {
        large: 'Large',
        medium: 'Medium',
        small: 'Small',
        tiny: 'Tiny',
      }

      const label = mediaType === 'video' ? 'Video' : 'Image'

      return {
        title: `${sizeTitles[size] ?? 'Post'} ${label}`,
        media: mediaType === 'image' ? image : undefined,
      }
    },
  },
})
