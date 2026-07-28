import {defineType, defineField, defineArrayMember} from 'sanity'

export const creditsBlock = defineType({
  name: 'creditsBlock',
  title: 'Credits',
  type: 'object',
  fields: [
    defineField({
      name: 'credits',
      title: 'Credits',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'creditEntry',
          title: 'credit',
          type: 'object',
          fields: [
            defineField({
              name: 'creditTitle',
              title: 'Credit Title',
              type: 'string',
              validation: (rule) =>
                rule
                  .required()
                  .min(1)
                  .max(60)
                  .error('Enter a credit title of 60 characters or fewer.'),
            }),
            defineField({
              name: 'creditName',
              title: 'Name',
              type: 'string',
              validation: (rule) =>
                rule
                  .required()
                  .min(1)
                  .max(100)
                  .error('Enter a credited name of 100 characters or fewer.'),
            }),
          ],
          preview: {
            select: {
              title: 'creditTitle',
              subtitle: 'creditName',
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1).error('Add at least one credit.'),
    }),
    defineField({
      name: 'additionalInfo',
      title: 'Additional Information',
      type: 'text',
    }),
  ],
})
