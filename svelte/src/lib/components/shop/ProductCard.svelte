<script lang="ts">
	import type { ShopifyProduct } from '$lib/types/shopify';
	import { resolve } from '$app/paths';

	type Props = {
		product: ShopifyProduct;
	};

	let { product }: Props = $props();

	let price = $derived(product.priceRange.minVariantPrice);

	let formattedPrice = $derived(
		new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: price.currencyCode,
			trailingZeroDisplay: 'stripIfInteger'
		}).format(Number(price.amount))
	);
</script>

<section>
	<a href={resolve(`/shop/${product.handle}`)}>
		<div class="aspect-[3/4] w-full overflow-hidden">
			{#if product.featuredImage?.url}
				<img
					src={product.featuredImage.url}
					alt={product.featuredImage.altText ?? product.title}
					class="h-full w-full object-cover"
				/>
			{/if}
		</div>

		<div>
			<p
				class="pt-sm-3 body-serif small-caps trim-cap transition-colors duration-200 ease-out hover:text-ash"
			>
				{product.title}
			</p>
			<div class="pt-sm-3 small-serif">
				<p>{product.description}</p>
				<div class="pt-md-4 body-serif trim-cap">
					{formattedPrice}
				</div>
			</div>
		</div>
	</a>
</section>
