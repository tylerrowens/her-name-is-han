import type { BLOG_POST_QUERY_RESULT } from '$lib/sanity/sanity.types';

/**
 * Complete blog post after server confirmation of returned post.
 */
export type BlogPostData = NonNullable<BLOG_POST_QUERY_RESULT>;

/**
 * Drill into content array to get all possible individual object shapes.
 */
export type BlogPostContentBlock = NonNullable<BlogPostData['content']>[number];

/**
 * Query Derived block types.
 */

export type ImageDiptychData = Extract<BlogPostContentBlock, { _type: 'imageDiptych' }>;

export type IngredientsBlockData = Extract<BlogPostContentBlock, { _type: 'ingredientsBlock' }>;

export type InstructionsBlockData = Extract<BlogPostContentBlock, { _type: 'instructionsBlock' }>;

export type InterviewEntryData = Extract<BlogPostContentBlock, { _type: 'interviewEntry' }>;

export type PostImageData = Extract<BlogPostContentBlock, { _type: 'postImage' }>;

export type PullQuoteData = Extract<BlogPostContentBlock, { _type: 'pullQuote' }>;

export type TextBlockData = Extract<BlogPostContentBlock, { _type: 'textBlock' }>;

export type CreditsBlockData = Extract<BlogPostContentBlock, { _type: ''}>;
