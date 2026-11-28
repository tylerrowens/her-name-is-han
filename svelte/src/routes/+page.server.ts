import type { PageServerLoad } from './$types';
import { NEWSLETTER_CARD_QUERY } from '$lib/sanity/queries';

export const load: PageServerLoad = async ({ locals }) => {
	const newsletterCard = await locals.sanity.client.fetch(NEWSLETTER_CARD_QUERY);
	return { newsletterCard };
};
