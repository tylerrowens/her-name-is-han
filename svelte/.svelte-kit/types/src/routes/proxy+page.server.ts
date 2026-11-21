// @ts-nocheck
import type { PageServerLoad } from "./$types";
import { client } from "$lib/sanity/client";
import { NEWSLETTER_CARD_QUERY } from "$lib/sanity/queries";


export const load = async () => {
    const newsletterCard = await client.fetch(NEWSLETTER_CARD_QUERY);
    return {
        newsletterCard
    };
};;null as any as PageServerLoad;