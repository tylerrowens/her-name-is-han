import {defineType, defineField} from 'sanity'

export const imageDiptych = defineType({
  name: 'imageDiptych',
  title: 'Image Diptych',
  type: 'object',
  fields: [
    defineField({
      name: 'image1',
      title: 'Image 1',
      type: 'image',
      validation: (rule) => rule.required().error('Upload an image'),
    }),
    defineField({
      name: 'image2',
      title: 'Image 2',
      type: 'image',
      validation: (rule) => rule.required().error('Upload an image'),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'simplePortableText',
    }),
  ],
  preview: {
    select: {
      media: 'image1',
      title: 'title',
    },
    prepare({media, title}) {
      return {
        media: media,
        title: 'Diptych Image',
      }
    },
  },
})
