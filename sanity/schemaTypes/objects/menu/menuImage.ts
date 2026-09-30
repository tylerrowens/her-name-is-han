import {defineField, defineType} from 'sanity'

const layoutOptions = [
  {title: 'Full-width Landscape', value: 'fullbleed'},
  {title: 'Medium Landscape', value: 'mediumLandscape'},
  {title: 'Medium Square', value: 'mediumSquare'},
  {title: 'Small Left', value: 'smallLeft'},
  {title: 'Small Right', value: 'smallRight'},
]

export const menuImage = defineType({
  name: 'menuImage',
  title: 'Single Image',
  type: 'object',

  fields: [
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: layoutOptions,
      },
      initialValue: 'mediumLandscape',
      validation: (rule) => rule.required().error('Select an image layout.'),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'menuPhoto',
      validation: (rule) => rule.required().error('Add an image.'),
    }),
  ],

  preview: {
    select: {
      caption: 'image.caption',
      layout: 'layout',
      media: 'image',
    },
    prepare({caption, layout, media}) {
      const layoutTitle = layoutOptions.find(
        (option) => option.value === layout,
      )?.title

      return {
        title: caption || 'Single image',
        subtitle: layoutTitle || 'Select a layout',
        media,
      }
    },
  },
})