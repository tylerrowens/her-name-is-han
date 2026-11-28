// @ts-nocheck
import type { PageServerLoad } from "./$types";
import { LOCATIONS_PAGE_QUERY, LOCATIONS_PAGE_INFO_QUERY } from "$lib/sanity/queries";

export const load = async ({ locals }: Parameters<PageServerLoad>[0]) => {
	const [locations, locationsPageInfo] = await Promise.all([
		locals.sanity.client.fetch(LOCATIONS_PAGE_QUERY),
		locals.sanity.client.fetch(LOCATIONS_PAGE_INFO_QUERY)
	]);

	return { locations, locationsPageInfo };
};
