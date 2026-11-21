import type { PageServerLoad } from "./$types";
import { client } from "$lib/sanity/client";
import { ABOUT_PAGE_QUERY } from "$lib/sanity/queries";

export const load: PageServerLoad = async () => {
    const aboutPage = await client.fetch(ABOUT_PAGE_QUERY);
    return {
        aboutPage
    };
};