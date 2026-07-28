import { defineArrayMember, defineField, defineType } from "sanity";

export const simplePortableText = defineType({
    name: 'simplePortableText',
    title: 'Formatted Text',
    type: 'array',
    of: [
        defineArrayMember({
            type: 'block',
            styles: [{title: 'Normal', value: 'normal'}],
            lists: [],
            marks: {
                decorators: [
                    {title: 'Italic', value: 'em'},
                    {title: 'Small Caps', value: 'smallCaps'},
                ],
                annotations: [
                    {
                        name: 'link',
                        title: 'Link',
                        type: 'object',
                        fields: [
                            defineField({
                                name: 'href',
                                title: 'URL',
                                type: 'url',
                                validation: (rule) => rule.uri({
                                    scheme: ['http', 'https', 'mailto', 'tel'],
                                }),
                            }),
                        ],
                    },
                ],
            },
        }),
    ],
})