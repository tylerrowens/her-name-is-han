import {defineType, defineField} from 'sanity'

type MainMediaValue = {
  mediaType?: 'image' | 'video'
  image?: {
    asset?: {
      _ref?: string
    }
  }
  video?: {
    asset?: {
      _ref?: string
    };
  };
};

export const mainMedia = defineType({
    name: 'mainMedia',
    title: 'Main Media',
    type: 'object',

    initialValue: {
        mediaType: 'image',
    },

    fields: [
        defineField({
            name: 'mediaType',
            title: 'Media Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Image', value: 'image'},
                    { title: 'Video', value: 'video'}
                ],
                layout: 'radio'
            },
            validation: (rule) => rule.required().error('Choose an image or video.')
        }),

        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
            hidden: ({ parent }) => parent?.mediaType !== 'image',
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    validation: (rule) => rule.required().error('Add alt text')
                })
            ]
        }),

        defineField({
            name: 'video',
            title: 'Video',
            type: 'mux.video',
            options: {
                acceptedMimeTypes: ['video/*']
            },
            hidden: ({ parent }) => parent?.mediaType !== 'video',
        })
    ],

    validation: (rule) =>
        rule.required().custom((value: MainMediaValue | undefined) => {
            if (!value?.mediaType) {
                return 'Choose an image or video.';
            }

            if (value.mediaType === 'image' && !value.image?.asset?._ref) {
                return 'Upload an image';
            }

            if (value.mediaType === 'video' && !value.video?.asset?._ref) {
                return 'Upload a video';
            }
            
            return true;
        })
});