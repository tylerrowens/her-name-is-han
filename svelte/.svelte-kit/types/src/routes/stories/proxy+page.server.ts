// @ts-nocheck
import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';
import { BLOG_OVERVIEW_QUERY, STORIES_PAGE_QUERY } from '$lib/sanity/queries';

export const load = async () => {
	const blogPosts = await client.fetch(BLOG_OVERVIEW_QUERY);
	const storiesPage = await client.fetch(STORIES_PAGE_QUERY);
	return {
		blogPosts,
		storiesPage
	};
};
;null as any as PageServerLoad;