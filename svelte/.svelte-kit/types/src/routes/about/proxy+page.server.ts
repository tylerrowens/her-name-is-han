// @ts-nocheck
import type { PageServerLoad } from "./$types";
import { client } from "$lib/sanity/client";
import { ABOUT_PAGE_QUERY } from "$lib/sanity/queries";

export const load = async () => {
    const aboutPage = await client.fetch(ABOUT_PAGE_QUERY);
    return {
        aboutPage
    };
};;null as any as PageServerLoad;