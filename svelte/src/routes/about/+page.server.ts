import type { PageServerLoad } from "./$types";
import { ABOUT_PAGE_QUERY } from "$lib/sanity/queries";

export const load: PageServerLoad = async ({locals}) => {
    const aboutPage = await locals.sanity.client.fetch(ABOUT_PAGE_QUERY)
  
    return {aboutPage}
  }