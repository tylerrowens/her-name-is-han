import {defineArrayMember, defineField, defineType} from 'sanity'

export const menu = defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',

  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal Name',
      type: 'string',
      description: 'For Studio only. For example: Nomad — Dinner.',
      validation: (rule) => rule.required().error('Enter an internal name.'),
    }),
    defineField({
      name: 'title',
      title: 'Display Title',
      type: 'string',
      description: 'Displayed in navigation. For example: Dinner.',
      validation: (rule) => rule.required().error('Enter a display title.'),
    }),
    defineField({
      name: 'slug',
      title: 'Meal URL Slug',
      type: 'slug',
      description: 'For example: dinner, lunch, or drinks-desserts.',
      options: {
        source: 'title',
        maxLength: 80,

        isUnique: async (slug, context) => {
          const id = context.document?._id?.replace(/^drafts\./, '')

          if (!id) return true

          const draftId = `drafts.${id}`

          const client = context.getClient({apiVersion: '2025-02-19'}).withConfig({
            perspective: 'drafts',
            useCdn: false,
          })

          return client.fetch<boolean>(
            `count(*[
              _type == "location" &&
              references($id) &&
              count(menus[
                _ref != $id &&
                _ref != $draftId &&
                @->slug.current == $slug
              ]) > 0
            ]) == 0`,
            {id, draftId, slug},
          )
        },
      },
      validation: (rule) => [
        rule.required().error('Generate a meal URL slug.'),
        rule.custom((value) => {
          if (!value?.current) return true

          return (
            /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.current) ||
            'Use lowercase letters, numbers, and single hyphens.'
          )
        }),
      ],
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Menu card color',
      type: 'string',
      options: {
        list: [
          {title: 'Brown', value: 'brown'},
          {title: 'Beige', value: 'beige'},
          {title: 'Cool Grey', value: 'coolGrey'},
          {title: 'Warm Grey', value: 'warmGrey'},
          {title: 'Light Navy', value: 'lightNavy'},
          {title: 'Medium Navy', value: 'mediumNavy'},
          {title: 'Dark Navy', value: 'darkNavy'},
          {title: 'Yellow', value: 'yellow'},
          {title: 'Green', value: 'green'},
          {title: 'Blue', value: 'blue'},
        ],
      },
    }),
    defineField({
      name: 'titleTextColor',
      title: 'Menu card text color',
      type: 'string',
      options: {
        list: [
          {title: 'White', value: 'white'},
          {title: 'Yellow', value: 'yellow'},
        ],
      },
    }),
    defineField({
      name: 'sections',
      title: 'Menu Sections',
      type: 'array',
      of: [defineArrayMember({type: 'menuSection'})],
      validation: (rule) => rule.required().min(1).error('Add at least one menu section.'),
    }),
  ],

  preview: {
    select: {
      title: 'internalTitle',
      subtitle: 'title',
    },
  },
})
