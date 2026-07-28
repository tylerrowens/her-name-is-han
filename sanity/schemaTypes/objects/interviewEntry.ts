import {defineType, defineField} from 'sanity'

export const interviewEntry = defineType({
  name: 'interviewEntry',
  title: 'Interview Entry',
  type: 'object',
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
})
