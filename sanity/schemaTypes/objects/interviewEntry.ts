import {defineType, defineField} from 'sanity'
import {BlockquoteIcon} from '@sanity/icons/Blockquote'

export const interviewEntry = defineType({
  name: 'interviewEntry',
  title: 'Interview Entry',
  type: 'object',
  icon: BlockquoteIcon,
  fields: [
    defineField({
      name: 'speakerName',
      title: 'Speaker Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'dialogue',
      title: 'Dialogue',
      type: 'simplePortableText',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      speakerName: 'speakerName',
    },
    prepare({speakerName}) {
      return {
        title: 'Interview Entry',
        subtitle: speakerName,
      }
    },
  },
})
