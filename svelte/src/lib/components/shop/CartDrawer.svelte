<script lang="ts">
	import type { ShopifyCart } from '$lib/types/shopify';

	type Props = {
		cart: Omit<ShopifyCart, 'id'> | null;
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
</script>

{#if open}
	<div
		class="fixed inset-x-0 top-[60px] bottom-0 z-40 flex flex-col bg-jade-white sm:bg-white p-sm-3 small-caps
		sm:inset-auto sm:top-[60px] sm:right-[50px] sm:z-[1000]
		sm:max-h-[calc(100dvh-80px)] sm:w-[330px]"
	>
		<header class="flex shrink-0 items-center justify-between">
			<div class="small-serif trim-cap">Cart ( {cart?.totalQuantity ?? 0} )</div>
			<button
				type="button"
				onclick={onClose}
				class="hidden sm:block small-serif trim-cap transition-colors duration-200 ease-out hover:text-ash"
			>
				Close
			</button>
		</header>

		<div class="mt-[50px] min-h-0 flex-auto overflow-y-auto overscroll-contain">
			{#if lines.length > 0}
				<div class="flex flex-col gap-[50px]">
					{#each lines as line (line.node.id)}
						<div class="flex border-t pt-xs-3">
							<div class="flex min-w-0 flex-1 gap-xs-3">
								{#if line.node.merchandise.image}
									<div class="h-[80px] w-[60px] shrink-0">
										<img
											src={line.node.merchandise.image.url}
											alt={line.node.merchandise.image.altText ?? ''}
											class="h-full w-full object-cover"
										/>
									</div>
								{/if}
								<div class="flex min-w-0 flex-col justify-between">
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

							<div class="flex w-[90px] shrink-0 flex-col items-end justify-between sm:w-[114px]">
								<p class="trim-cap small-serif lg:nav-serif">
									{formatPrice(line.node.merchandise.price)}
								</p>
								<button
									type="button"
									onclick={() => void onRemoveLine(line.node.id)}
									class="trim-cap small-serif transition-colors duration-200 ease-out hover:text-ash"
								>
									Remove
								</button>
							</div>
						</div>
					{/each}
				</div>
			{:else}
				<p class="trim-cap small-serif lg:nav-serif">Your cart is empty.</p>
			{/if}
		</div>

		{#if lines.length > 0}
			<footer class="mt-[50px] flex shrink-0 items-center justify-between border-t pt-xs-3">
				{#if cart?.cost.subtotalAmount}
					<div class="trim-cap small-serif lg:nav-serif">
						Subtotal {formatPrice(cart.cost.subtotalAmount)}
					</div>
				{/if}
				<a
					href={cart?.checkoutUrl}
					class="trim-cap small-serif lg:nav-serif transition-colors duration-200 ease-out hover:text-ash"
				>
					Checkout &#x2197;
				</a>
			</footer>
		{/if}
	</div>
{/if}
