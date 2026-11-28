import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { BLOG_POST_QUERY } from '$lib/sanity/queries';

export const load: PageServerLoad = async ({ params, locals }) => {
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
