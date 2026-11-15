import type { LayoutServerLoad } from './$types';
import { client } from '$lib/sanity/client';
import { LOCATIONS_NAV_QUERY } from '$lib/sanity/queries';
import { MENU_NAV_QUERY } from '$lib/sanity/queries';
import { RESERVATION_NAV_QUERY } from '$lib/sanity/queries';
import { shopifyFetch } from '$lib/server/shopify';
import type { ShopifyCart } from '$lib/types/shopify';

const cartQuery = /* GraphQL */ `
	query SavedCart($id: ID!) {
		cart(id: $id) {
			checkoutUrl
			totalQuantity
			cost {
				subtotalAmount {
					amount
					currencyCode
				}
			}
			lines(first: 10) {
				edges {
					node {
						id
						quantity
						merchandise {
							... on ProductVariant {
								id
								title
								price {
									amount
									currencyCode
								}
								image {
									url
									altText
								}
								product {
									title
									handle
								}
							}
						}
					}
				}
			}
		}
	}
`;

export const load: LayoutServerLoad = async ({ cookies }) => {
	const cartId = cookies.get('cartId');

	const [locationsNav, menuNav, reservationNav, savedCart] = await Promise.all([
		client.fetch(LOCATIONS_NAV_QUERY),
		client.fetch(MENU_NAV_QUERY),
		client.fetch(RESERVATION_NAV_QUERY),
		cartId
			? shopifyFetch(cartQuery, { id: cartId })
					.then((result) => (result as { cart: Omit<ShopifyCart, 'id'> | null }).cart)
					.catch(() => {
						console.error('Failed to load saved Shopify cart');
						return null;
					})
			: null
	]);

	return { locationsNav, menuNav, reservationNav, savedCart };
};
