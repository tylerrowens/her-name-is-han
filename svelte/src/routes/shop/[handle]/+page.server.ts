import { error } from '@sveltejs/kit';
import { placeholderProducts } from '$lib/data/placeholderProducts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	const product = placeholderProducts.find(
		(product) => product.handle === params.handle
	);

	if (!product) error(404, 'Product not found');

	return { product };
};