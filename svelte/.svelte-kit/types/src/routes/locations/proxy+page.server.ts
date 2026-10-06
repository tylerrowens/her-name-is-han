// @ts-nocheck
import type { PageServerLoad } from "./$types";
import { client } from "$lib/sanity/client";
import { LOCATIONS_PAGE_QUERY } from "$lib/sanity/queries";

export const load = async () => {
    const locations = await client.fetch(LOCATIONS_PAGE_QUERY);
    return {
        locations
    };
};
;null as any as PageServerLoad;