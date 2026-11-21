import type { PageServerLoad } from "./$types";
import { client } from "$lib/sanity/client";
import { NEWSLETTER_CARD_QUERY } from "$lib/sanity/queries";


export const load: PageServerLoad = async () => {
    const newsletterCard = await client.fetch(NEWSLETTER_CARD_QUERY);
    return {
        newsletterCard
    };
};