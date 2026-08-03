// @ts-nocheck
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { client } from '$lib/sanity/client';
import { BLOG_POST_QUERY } from '$lib/sanity/queries';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
    const post = await client.fetch(BLOG_POST_QUERY, {
        slug: params.slug
    });

    if (!post) {
        error(404, 'Blog post not found');
    }

    return {
        post
    };
};