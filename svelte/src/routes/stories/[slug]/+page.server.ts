import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { client } from '$lib/sanity/client';
import { BLOG_POST_QUERY } from '$lib/sanity/queries';

export const load: PageServerLoad = async ({ params }) => {
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