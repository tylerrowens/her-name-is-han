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
        "categories": coalesce(categories, []),

        mainMedia {
            mediaType,

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
            },

            video {
                asset-> {
                    _id,
                    assetId,
                    playbackId,
                    filename,
                    status,
                    "aspectRatio": data.aspect_ratio,
                    "duration": data.duration
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
            "categories": coalesce(categories, []),
            mainMedia {
                mediaType,

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
                },

                video {
                    asset-> {
                        _id,
                        assetId,
                        playbackId,
                        filename,
                        status,
                        "aspectRatio": data.aspect_ratio,
                        "duration": data.duration
                    }
                }
            }
        
        }
    }
`);

export const BLOG_OVERVIEW_QUERY = defineQuery(`
    *[
        _type == "blogPost" &&
        defined(slug.current)
    ] | order(publishedDate desc) {
        _id,
        title,
        "slug": slug.current,
        author,
        publishedDate,
        "categories": coalesce(categories, []),

                mainMedia {
            mediaType,

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
            },

            video {
                asset-> {
                    _id,
                    assetId,
                    playbackId,
                    filename,
                    status,
                    "aspectRatio": data.aspect_ratio,
                    "duration": data.duration
                }
            }
        }
    }
`);

export const STORIES_PAGE_QUERY = defineQuery(`
    *[ _type == "storiesPage" ][0] {
        _id,
        englishTitle,
        koreanTitle,
        topBanner {
            mediaType,

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
            },

            video {
                asset-> {
                    _id,
                    assetId,
                    playbackId,
                    filename,
                    status,
                    "aspectRatio": data.aspect_ratio,
                    "duration": data.duration
                }
            }

        }
    }
    `);
