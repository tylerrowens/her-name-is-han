// @ts-nocheck
import { error } from '@sveltejs/kit';
import { placeholderProducts } from '$lib/data/placeholderProducts';
import type { PageServerLoad } from './$types';

export const load = ({ params }: Parameters<PageServerLoad>[0]) => {
	const product = placeholderProducts.find(
		(product) => product.handle === params.handle
	);

	if (!product) error(404, 'Product not found');

	return { product };
};