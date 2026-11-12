import { SHOPIFY_STORE_DOMAIN, SHOPIFY_STOREFRONT_ACCESS_TOKEN } from '$env/static/private';

export async function shopifyFetch(query: string, variables = {}) {
	const response = await fetch(`https://${SHOPIFY_STORE_DOMAIN}/api/2026-04/graphql.json`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Shopify-Storefront-Private-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN
		},
		body: JSON.stringify({
			query,
			variables
		})
	});

	const json = await response.json();
	if (json.errors) {
		console.error('Shopify API errors:', JSON.stringify(json.errors, null, 2));
		console.error('Full Shopify response', JSON.stringify(json, null, 2));
		throw new Error('Shopify API error');
	}

	return json.data;
}
