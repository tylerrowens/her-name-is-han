// @ts-nocheck
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { BLOG_POST_QUERY } from '$lib/sanity/queries';

export const load = async ({ params, locals }: Parameters<PageServerLoad>[0]) => {
	const post = await locals.sanity.client.fetch(BLOG_POST_QUERY, {
		slug: params.slug
	});

	if (!post) {
		error(404, 'Blog post not found');
	}

	return {
		post
	};
};
