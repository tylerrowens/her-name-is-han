import { defineField, defineType } from "sanity";

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
            validation: (rule) => rule.required().error('Add image or video.')
        }),
    ]
})