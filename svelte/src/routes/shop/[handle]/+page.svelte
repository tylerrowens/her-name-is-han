<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import type { ShopifyVariant } from '$lib/types/shopify';
	import { page } from '$app/state';
	import { getContext } from 'svelte';

	let { data }: { data: PageData } = $props();

	let price = $derived(data.product.priceRange.minVariantPrice);

	let formattedPrice = $derived(
		new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: price.currencyCode,
			trailingZeroDisplay: 'stripIfInteger'
		}).format(Number(price.amount))
	);

	const sizeLabels: Partial<Record<string, string>> = {
		small: 's',
		medium: 'm',
		large: 'l'
	};

	let visibleOptions = $derived(
		data.product.options.filter(
			(option) =>
				!(
					option.name === 'Title' &&
					option.values.length === 1 &&
					option.values[0] === 'Default Title'
				)
		)
	);

	const addToCart = getContext<(variantId: string) => Promise<void>>('addToCart');

	function getVariantUrlId(id: string) {
		return id.split('/').at(-1);
	}

	let variants = $derived(data.variants);

	let variantUrlId = $derived(page.url.searchParams.get('variant'));

	let fallbackVariant = $derived(
		variants.find((variant) => variant.availableForSale) ?? variants[0]
	);

	let selectedVariant = $derived(
		variants.find((variant) => getVariantUrlId(variant.id) === variantUrlId) ?? fallbackVariant
	);

	function selectOption(optionName: string, optionValue: string) {
		if (!selectedVariant) return;

		const nextOptions = Object.fromEntries(
			selectedVariant.selectedOptions.map(({ name, value }) => [name, value] as const)
		);

		nextOptions[optionName] = optionValue;

		const matchingVariant = variants.find((variant) =>
			variant.selectedOptions.every(({ name, value }) => nextOptions[name] === value)
		);

		if (!matchingVariant) return;

		updateVariantUrl(matchingVariant);
	}

	function isOptionSelected(optionName: string, optionValue: string) {
		return (
			selectedVariant?.selectedOptions.some(
				({ name, value }) => name === optionName && value === optionValue
			) ?? false
		);
	}

	function updateVariantUrl(variant: ShopifyVariant) {
		const variantId = getVariantUrlId(variant.id);

		if (!variantId) return;

		const url = new URL(page.url);
		url.searchParams.set('variant', variantId);

		void goto(url, {
			replaceState: true,
			keepFocus: true,
			noScroll: true
		});
	}

	let addToCartPending = $state(false);
	let addToCartError = $state('');

	async function handleAddToCart() {
		const variant = selectedVariant;
		if (!variant?.availableForSale || addToCartPending) return;

		addToCartPending = true;
		addToCartError = '';

		try {
			await addToCart(variant.id);
		} catch {
			addToCartError = 'Couldn’t add this item. Please try again.';
		} finally {
			addToCartPending = false;
		}
	}
</script>

<section class="page-x pt-[135px]">
	<div class="flex flex-col pb-[75px] w-full sm:w-[886px] mx-auto">
		<div class="trim-cap nav-serif">
			<a
				href="/shop"
				class="pb-md-3 nav-serif small-caps transition-colors duration-200 ease-out hover:text-ash"
				>&lt; BACK TO STORE</a
			>
		</div>
	</div>
	<div class="w-100dvw">
		<div class="flex flex-col justify-center items-center pb-[120px] gap-[120px]">
			<div class="grid grid-cols-1 gap-md-4 sm:grid-cols-[400px_450px]">
				<div class="aspect-[3/4] sm:w-[400px] self-start overflow-hidden">
					{#if data.product.featuredImage?.url}
						<img
							src={data.product.featuredImage.url}
							alt={data.product.featuredImage.altText ?? data.product.title}
						/>
					{/if}
				</div>
				<div class="flex flex-col gap-md-4">
					<p class="trim-cap card-serif">{data.product.title}</p>
					<div class="flex flex-col gap-sm-3">
						<p class="trim-cap body-serif">{formattedPrice}</p>
						<div>
							{#each visibleOptions as option}
								<div class="flex gap-x-xs-3">
									{#each option.values as value}
										<button
											type="button"
											class="body-serif sm:nav-serif small-caps transition-colors duration-200 ease-out hover:text-ash"
											aria-label={value}
											aria-pressed={isOptionSelected(option.name, value)}
											onclick={() => selectOption(option.name, value)}
										>
											{option.name.toLowerCase() === 'size'
												? (sizeLabels[value.trim().toLowerCase()] ?? value)
												: value}
										</button>
									{/each}
								</div>
							{/each}
						</div>
					</div>
					<div class="flex flex-col gap-lg-5">
						<p class="trim-cap body-serif sm:nav-serif">
							{data.product.description}
						</p>
						<button
							type="button"
							class="self-start trim-cap body-serif sm:nav-serif underline underline-offset-4 small-caps transition-colors duration-200 ease-out hover:text-ash"
							disabled={!selectedVariant?.availableForSale || addToCartPending}
							onclick={handleAddToCart}
						>
							Add to cart
						</button>
					</div>
					<p class="trim-cap small-serif text-ash">
						After successfully placing an order you will receive an email confirming that your
						purchase was processed. Once your order has shipped you will receive a second email with
						a confirmation of shipment that includes a tracking number that can be used to track
						your package. Please allow 1-3 business days for processing. During the holidays (Dec
						1-Jan 10) please allow up to 7 business days for processing.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
