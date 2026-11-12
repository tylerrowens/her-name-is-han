import { shopifyFetch } from '$lib/server/shopify';
import type { CollectionProductsResponse } from '$lib/types/shopify';

export async function load() {
	const query = `
    query CollectionProducts {
	collection(id: "gid://shopify/Collection/488830959873") {
		id
		title
		handle
		products(first: 10) {
			edges {
				node {
					id
					title
					handle
          description
          featuredImage {
          url
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                availableForSale

                price {
                amount
                currencyCode
                }

               image{
               url
               }

                  
                selectedOptions{
                  name
                  value
                }
                
              }
            }
          }
				}
			}
		}
	}
}
    `;

	const data = (await shopifyFetch(query)) as CollectionProductsResponse;

	return {
		collection: data.collection,
		products: data.collection.products.edges.map((edge) => edge.node)
	};
}
