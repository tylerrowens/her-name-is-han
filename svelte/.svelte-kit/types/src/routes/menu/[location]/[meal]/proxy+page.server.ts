// @ts-nocheck
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';
import { MENU_PAGE_QUERY } from '$lib/sanity/queries';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
	const menuContents = await client.fetch(
		MENU_PAGE_QUERY,
		{
			location: params.location,
			meal: params.meal
		},
		{
			perspective: 'published'
		}
	);

	if (!menuContents) {
		error(404, 'Location not found');
	}

	if ((menuContents.menuMatchCount ?? 0) > 1) {
		error(500, 'Menu configuration error');
	}

	if (!menuContents.menu) {
		error(404, 'Menu not found');
	}

	return {
		menuContents
	};
};
