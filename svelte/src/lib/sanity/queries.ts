import { defineQuery } from 'groq';

export const BLOG_POST_QUERY = defineQuery(`
    *[
        _type == "blogPost" &&
        slug.current == $slug
    ] [0] {
        _id,
        title,
        "slug": slug.current,
        author,
        publishedDate,
        categories,

        mainImage {
            alt,
            crop,
            hotspot,
            asset-> {
                _id,
                url,
                metadata {
                    dimensions
                }
            }
        },

        featuredText,

        content[] {
            ...,

            _type == "postImage" => {
                image {
                    alt,
                    crop,
                    hotspot,
                    asset-> {
                        _id,
                        url,
                        metadata {
                            dimensions
                        }
                    }
                }
            },

            _type == "imageDiptych" => {
                image1 {
                    alt,
                    crop,
                    hotspot,
                    asset-> {
                        _id,
                        url,
                        metadata {
                            dimensions
                        }
                    }
                },
                image2 {
                    alt,
                    crop,
                    hotspot,
                    asset-> {
                        _id,
                        url,
                        metadata {
                            dimensions
                        }
                    }
                }
            }
        },

        credits,

        relatedStories[]-> {
            _id,
            title,
            "slug": slug.current,
            author,
            publishedDate,
            categories,
            mainImage {
                alt,
                crop,
                hotspot,
                assets-> {
                    _id,
                    url,
                    metadata {
                        dimensions
                    }
                }
            }
        }
    }
`);
