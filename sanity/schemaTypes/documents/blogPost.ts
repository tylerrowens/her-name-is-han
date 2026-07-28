import {defineArrayMember, defineField, defineType} from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().error('Add a title.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (rule) => rule.required().error('Add an author.'),
    }),
    defineField({
      name: 'publishedDate',
      title: 'Published Date',
      type: 'date',
      validation: (rule) => rule.required().error('Add date.'),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
      options: {
        list: [
          {title: 'Feature', value: 'feature'},
          {title: 'News', value: 'news'},
          {title: 'Recipe', value: 'recipe'},
          {title: 'Playlist', value: 'playlist'},
        ],
        layout: 'grid',
      },
      validation: (rule) => rule.required().min(1).unique().error('Select at least one category.'),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (rule) => rule.required().error('Add alt text.'),
        }),
      ],
      validation: (rule) => rule.required().error('Upload an image.'),
    }),
    defineField({
      name: 'featuredText',
      title: 'Featured Text',
      type: 'simplePortableText',
      validation: (rule) =>
        rule.required().max(180).error('Enter a featured text of 100 characters or fewer.'),
    }),
    defineField({
      name: 'content',
      title: 'Post Content',
      type: 'array',
      of: [
        defineArrayMember({type: 'textBlock'}),
        defineArrayMember({type: 'postImage'}),
        defineArrayMember({type: 'imageDiptych'}),
        defineArrayMember({type: 'pullQuote'}),
        defineArrayMember({type: 'interviewEntry'}),
        defineArrayMember({type: 'ingredientsBlock'}),
        defineArrayMember({type: 'instructionsBlock'}),
      ],
      validation: (rule) => rule.required().min(1).error('Add at least one content module.'),
    }),
    defineField({
      name: 'credits',
      title: 'Credits',
      type: 'creditsBlock',
    }),
    defineField({
      name: 'relatedStories',
      title: 'Related Stories',
      type: 'array',
      description: 'Stories displayed at the bottom of this post.',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'blogPost'}],
        }),
      ],
      validation: (rule) => rule.unique().max(3),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'author',
      media: 'mainImage',
    },
  },
})
