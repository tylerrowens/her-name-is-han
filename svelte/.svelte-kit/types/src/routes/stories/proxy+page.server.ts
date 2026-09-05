// @ts-nocheck
import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';
import { BLOG_OVERVIEW_QUERY } from '$lib/sanity/queries';

export const load = async () => {
	const blogPosts = await client.fetch(BLOG_OVERVIEW_QUERY);

	return {
		blogPosts
	};
};
;null as any as PageServerLoad;