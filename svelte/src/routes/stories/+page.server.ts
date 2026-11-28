import type { PageServerLoad } from './$types';
import { BLOG_OVERVIEW_QUERY, STORIES_PAGE_QUERY } from '$lib/sanity/queries';

export const load: PageServerLoad = async ({ locals }) => {
	const [blogPosts, storiesPage] = await Promise.all([
		locals.sanity.client.fetch(BLOG_OVERVIEW_QUERY),
		locals.sanity.client.fetch(STORIES_PAGE_QUERY)
	]);

	return { blogPosts, storiesPage };
};
