import {defineType, defineField} from 'sanity'

export const interviewText = defineType({
  name: 'interviewText',
  title: 'Interview Text',
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
        type: 'text',
        validation: (rule) => rule.required(),
    })
  ],
})
