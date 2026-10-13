// @ts-nocheck
import type { LayoutServerLoad } from './$types';
import { client } from '$lib/sanity/client';
import { LOCATIONS_NAV_QUERY } from '$lib/sanity/queries';
import { MENU_NAV_QUERY } from '$lib/sanity/queries';
import { RESERVATION_NAV_QUERY } from '$lib/sanity/queries';

export const load = async () => {
	const locationsNav = await client.fetch(LOCATIONS_NAV_QUERY);
	const menuNav = await client.fetch(MENU_NAV_QUERY);
	const reservationNav = await client.fetch(RESERVATION_NAV_QUERY);
	return {
		locationsNav,
		menuNav,
		reservationNav
	};
};
;null as any as LayoutServerLoad;