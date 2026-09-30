import {defineArrayMember, defineField, defineType} from 'sanity'

export const location = defineType({
  name: 'location',
  title: 'Location',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Location Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Add a location name.'),
    }),

    defineField({
      name: 'locationType',
      title: 'locationType',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
      options: {
        list: [
          {title: 'Restaurant', value: 'restaurant'},
          {title: 'Bakery', value: 'bakery'},
          {title: 'Bakery & Resturant', value: 'bakeryAndResturant'},
        ],
        layout: 'grid',
      },
      validation: (rule) => rule.required().max(1).error('Select only one category.'),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Generate a slug.'),
    }),

    defineField({
      name: 'images',
      title: 'Image Carousel',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              validation: (Rule) => Rule.required().error('Add alt text.'),
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required().min(1).error('Add at least one image.'),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'simplePortableText',
      validation: (Rule) => Rule.required().error('Add location description.'),
    }),

    defineField({
      name: 'hours',
      title: 'Hours',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'hoursGroup',
          title: 'Hours Group',
          type: 'object',

          fields: [
            defineField({
              name: 'days',
              title: 'Days',
              type: 'string',
              validation: (Rule) => Rule.required().error('Add days (ex. Sun-Thurs).'),
            }),

            defineField({
              name: 'times',
              title: 'Times',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'string',
                }),
              ],
              validation: (Rule) => Rule.required().min(1).error('Add at least one time.'),
            }),
          ],

          preview: {
            select: {
              title: 'days',
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required().error('Add address.'),
    }),

    defineField({
      name: 'mapsUrl',
      title: 'Google Maps Link',
      type: 'url',
      validation: (Rule) => Rule.required().uri({scheme: ['http', 'https']}),
    }),

    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required().error('Add phone number.'),
    }),

    defineField({
      name: 'reservationUrl',
      title: 'Reservation Link',
      type: 'url',
      validation: (Rule) => Rule.required().uri({scheme: ['http', 'https']}),
    }),

    defineField({
      name: 'additionalInformation',
      title: 'Additional Information',
      type: 'simplePortableText',
    }),

    defineField({
      name: 'menus',
      title: 'Menus',
      type: 'array',
      description:
        'Arrange menus in navigation order. The first is the default. Leave empty for locations without menus.',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'menu'}],
        }),
      ],
      validation: (rule) =>
        rule.unique().custom(async (value, context) => {
          if (!value?.length) return true

          const ids = value
            .map((entry) => (entry as {_ref?: string})._ref)
            .filter((id): id is string => Boolean(id))

          if (!ids.length) return true

          const client = context.getClient({apiVersion: '2025-02-19'}).withConfig({
            perspective: 'drafts',
            useCdn: false,
          })

          const menus = await client.fetch<Array<{slug?: string}>>(
            `*[_type == "menu" && _id in $ids]{
              "slug": slug.current
            }`,
            {ids},
          )

          const seen = new Set<string>()

          for (const menu of menus) {
            if (!menu.slug) {
              return 'Each selected menu needs a meal URL slug.'
            }

            if (seen.has(menu.slug)) {
              return `Two selected menus use "${menu.slug}". Each menu at this location needs a different meal slug.`
            }

            seen.add(menu.slug)
          }

          return true
        }),
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'images.0',
    },
  },
})
