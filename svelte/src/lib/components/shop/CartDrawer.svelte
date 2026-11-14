<script lang="ts">
	import type { ShopifyCart } from '$lib/types/shopify';

	type Props = {
		cart: ShopifyCart | null;
		open: boolean;
		onClose: () => void;
		onRemoveLine: (lineId: string) => Promise<void>;
	};

	let { cart, open, onClose, onRemoveLine }: Props = $props();

	let lines = $derived(cart?.lines.edges ?? []);

	function formatPrice(price: { amount: string; currencyCode: string }) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: price.currencyCode,
			trailingZeroDisplay: 'stripIfInteger'
		}).format(Number(price.amount));
	}

	$effect(() => {
		if (!open) return;

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = previousOverflow;
		};
	});
</script>

{#if open}
	<div class="bg-white w-[330px] p-sm-3 small-caps flex flex-col gap-[50px] z-1000">
		<header class="flex items-center justify-between">
			<div class="small-serif trim-cap">Cart ( {cart?.totalQuantity ?? 0} )</div>
			<button
				type="button"
				onclick={onClose}
				class="small-serif trim-cap transition-colors duration-200 ease-out hover:text-ash"
				>Close</button
			>
		</header>
		{#if lines.length > 0}
			{#each lines as line (line.node.id)}
				<div class="flex flex-col gap-md-3">
					<div class="flex pt-xs-3 border-t">
						<div class="flex gap-xs-3 w-[190px]">
							{#if line.node.merchandise.image}
								<div class="h-[80px] w-[60px] shrink-0">
									<img
										src={line.node.merchandise.image.url}
										alt={line.node.merchandise.image.altText ?? ''}
									/>
								</div>
							{/if}
							<div class="flex flex-col justify-between">
								<p class="trim-cap small-serif lg:nav-serif">
									{line.node.merchandise.product.title}
								</p>
								<p class="trim-cap text-ash small-serif">
									{#if line.node.merchandise.title !== 'Default Title'}
										{line.node.merchandise.title}
									{/if}
									{#if line.node.quantity > 1}
										( {line.node.quantity} )
									{/if}
								</p>
							</div>
						</div>

						<div class="flex flex-col items-end justify-between w-[114px]">
							<p class="trim-cap small-serif lg:nav-serif">
								{formatPrice(line.node.merchandise.price)}
							</p>
							<button
								type="button"
								onclick={() => void onRemoveLine(line.node.id)}
								class="trim-cap small-serif transition-colors duration-200 ease-out hover:text-ash"
								>remove</button
							>
						</div>
					</div>
				</div>
			{/each}

			<footer class="flex items-center justify-between pt-xs-3 border-t">
				{#if cart?.cost.subtotalAmount}
					<div class="trim-cap small-serif lg:nav-serif">
						Subtotal {formatPrice(cart.cost.subtotalAmount)}
					</div>
				{/if}
				<div
					class="trim-cap small-serif lg:nav-serif transition-colors duration-200 ease-out hover:text-ash"
				>
					Checkout &#x2197;
				</div>
			</footer>
		{:else}
			<p class="trim-cap small-serif lg:nav-serif">Your cart is empty.</p>
		{/if}
	</div>
{/if}
