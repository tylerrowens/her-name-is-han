// @ts-nocheck
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { shopifyFetch } from '$lib/server/shopify';
import type { ProductByHandleResponse } from '$lib/types/shopify';

const query = /* GraphQL */ `
	query ProductByHandle($handle: String!) {
		product(handle: $handle) {
			id
			title
			handle
			description
			featuredImage {
				url
				altText
			}
			priceRange {
				minVariantPrice {
					amount
					currencyCode
				}
			}
			options {
				id
				name
				values
			}
			variants(first: 100) {
				edges {
					node {
						id
						title
						availableForSale
						price {
							amount
							currencyCode
						}
						image {
							url
							altText
						}
						selectedOptions {
							name
							value
						}
					}
				}
			}
		}
	}
`;

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
	const data = (await shopifyFetch(query, {
		handle: params.handle
	})) as ProductByHandleResponse;

	console.log('PRODUCT FETCH:', new Date().toISOString());
	console.dir(
		{
			options: data.product?.options,
			variants: data.product?.variants.edges.map(({ node }) => ({
				id: node.id,
				title: node.title,
				availableForSale: node.availableForSale,
				selectedOptions: node.selectedOptions
			}))
		},
		{ depth: null }
	);

	if (!data.product) {
		throw error(404, 'Product not found');
	}

	return {
		product: data.product,
		variants: data.product.variants.edges.map((edge) => edge.node)
	};
};
