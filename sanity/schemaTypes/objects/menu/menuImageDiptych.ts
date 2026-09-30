import {defineField, defineType} from 'sanity'

export const menuImageDiptych = defineType({
  name: 'menuImageDiptych',
  title: 'Image Diptych',
  type: 'object',

  fields: [
    defineField({
      name: 'leftImage',
      title: 'Left Image',
      type: 'menuPhoto',
      validation: (rule) => rule.required().error('Add the left image.'),
    }),
    defineField({
      name: 'rightImage',
      title: 'Right Image',
      type: 'menuPhoto',
      validation: (rule) => rule.required().error('Add the right image.'),
    }),
  ],

  preview: {
    select: {
      subtitle: 'leftImage.caption',
      media: 'leftImage',
    },
    prepare({subtitle, media}) {
      return {
        title: 'Image diptych',
        subtitle,
        media,
      }
    },
  },
})