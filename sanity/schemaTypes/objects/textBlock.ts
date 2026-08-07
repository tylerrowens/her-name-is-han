import {defineType, defineField} from 'sanity'
import {BlockContentIcon} from '@sanity/icons/BlockContent'

export const textBlock = defineType({
  name: 'textBlock',
  title: 'Text Block',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'simplePortableText',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Text Block',
      }
    },
  },
})
