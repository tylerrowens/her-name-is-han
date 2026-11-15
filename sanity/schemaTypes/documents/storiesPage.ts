import {defineField, defineType, defineArrayMember} from 'sanity'

export const storiesPage = defineType({
  name: 'storiesPage',
  title: 'Stories Page',
  type: 'document',

  fields: [
    defineField({
      name: 'englishTitle',
      title: 'English Title',
      type: 'string',
    }),
    defineField({
      name: 'koreanTitle',
      title: 'Korean Title',
      type: 'string',
    }),
    defineField({
      name: 'topBanner',
      title: 'Top Banner',
      type: 'mainMedia',
      validation: (rule) => rule.required().error('Add image or video.'),
    }),
    defineField({
      name: 'playlistCards',
      title: 'Playlist Cards',
      type: 'array',
      validation: (rule) => rule.required().length(3).error('Add exactly three playlist cards.'),
      of: [
        defineArrayMember({
          name: 'playlistCard',
          title: 'Playlist Card',
          type: 'object',
          fields: [
            defineField({
              name: 'cardTitle',
              title: 'Card Title',
              type: 'simplePortableText',
              validation: (rule) => rule.required().error('Add a title.'),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required().error('Add a title.'),
            }),
            defineField({
              name: 'author',
              title: 'Author',
              type: 'string',
              validation: (rule) => rule.required().error('Add an author.'),
            }),
            defineField({
              name: 'backgroundColor',
              title: 'Background Color',
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
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'textColor',
              title: 'Text Color',
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
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'spotifyUrl',
              title: 'Spotify Link',
              type: 'url',
              validation: (Rule) => Rule.required().uri({scheme: ['http', 'https']}),
            }),
          ],
          preview: {
            select: {
              title: 'backgroundColor',
              media: 'image',
            },
          },
        }),
      ],
    }),
  ],
})
