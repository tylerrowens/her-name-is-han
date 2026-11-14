import { json } from "@sveltejs/kit";
import type { RequestHandler } from "../../$types";
import type { CartCreateResponse, CartLinesAddResponse } from "$lib/types/cart";
import { shopifyFetch } from "$lib/server/shopify";

const createCartMutation = `
    mutation cartCreate($input: CartInput!) {
        cartCreate(input: $input) {
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

const addCartLinesMutation = `
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!){
        cartLinesAdd(cartId: $cartId, lines: $lines) {
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
                lines(first:10) {
                    edges {
                        node {
                            id
                            quantity
                            merchandise {
                                ... on ProductVariant {
                                    id
                                    title
                                    price{
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
    const { variantId } = (await request.json()) as {
        variantId?: string;
    };

    if (!variantId) {
        return json (
            {
                error: 'Missing variantId'
            },
            { status: 400 }
        );
    }

    const existingCartId = cookies.get('cartId');

    if (existingCartId) {
        const data = (await shopifyFetch(addCartLinesMutation, {
            cartId: existingCartId,
            lines: [
                {
                    merchandiseId: variantId,
                    quantity: 1
                }
            ]
        })) as CartLinesAddResponse;

        const userErrors = data.cartLinesAdd.userErrors;

        if (userErrors.length > 0) {
            return json(
                {
                    error: 'Shopify cartLinesAdd user error',
                    userErrors
                },
                { status: 400}
            );
        }

        const cart = data.cartLinesAdd.cart;

        if (!cart) {
            return json(
                {
                    error: 'Shopify did not return a cart'
                },
                { status: 500 }
            );
        }

        return json({ cart });
    }

    const data = (await shopifyFetch(createCartMutation, {
        input: {
            lines: [
                {
                    merchandiseId: variantId,
                    quantity: 1
                }
            ]
        }
    })) as CartCreateResponse;

    const userErrors = data.cartCreate.userErrors;

    if (userErrors.length > 0) {
        return json(
            {
                error: 'Shopify cartCreate user error',
                userErrors
            },
            { status: 400 }
        );
    }

    const cart = data.cartCreate.cart;

    if (!cart) {
        return json(
            {
                error: 'Shopify did not return a cart'
            },
            { status: 500 }
        );
    }

    cookies.set('cartId', cart.id, {
        path: '/',
        httpOnly: true,
        sameSite: 'lax',
        secure: false,
        maxAge: 60 * 60 * 24 * 30
    });

    return json({
        cart
    });
};