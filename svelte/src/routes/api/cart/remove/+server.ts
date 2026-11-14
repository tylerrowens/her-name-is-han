import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { shopifyFetch } from '$lib/server/shopify';
import type { CartLinesRemoveResponse } from '$lib/types/cart';

const removeCartLinesMutation = `
    mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
        cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
            cart {
                id
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
            userErrors {
                field
                message
            }    
        }
    }
`;

export const POST: RequestHandler = async ({ request, cookies }) => {
	const { lineId } = (await request.json()) as {
		lineId?: string;
	};

	if (!lineId) {
		return json(
			{
				error: 'Missing lineId'
			},
			{ status: 400 }
		);
	}

	const cartId = cookies.get('cartId');

	if (!cartId) {
		return json(
			{
				error: 'Missing cartId cookie'
			},
			{ status: 400 }
		);
	}

	const data = (await shopifyFetch(removeCartLinesMutation, {
		cartId,
		lineIds: [lineId]
	})) as CartLinesRemoveResponse;

	const userErrors = data.cartLinesRemove.userErrors;

	if (userErrors.length > 0) {
		return json(
			{
				error: 'Shopify cartLinesRemove user error',
				userErrors
			},
			{ status: 400 }
		);
	}

	const cart = data.cartLinesRemove.cart;

	if (!cart) {
		return json(
			{
				error: 'Shopify did not return a cart'
			},
			{ status: 500 }
		);
	}

	return json({ cart });
};
