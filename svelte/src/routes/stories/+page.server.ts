import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';
import { BLOG_OVERVIEW_QUERY } from '$lib/sanity/queries';

export const load: PageServerLoad = async () => {
	const blogPosts = await client.fetch(BLOG_OVERVIEW_QUERY);

	return {
		blogPosts
	};
};
