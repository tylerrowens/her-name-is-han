<script lang="ts">
	import ProductCard from '$lib/components/shop/ProductCard.svelte';
	import { placeholderProducts } from '$lib/data/placeholderProducts';
</script>

<section class="pt-[135px]">
	<div class="text-center">
		<p class="nav-serif small-caps trim-cap">shop</p>
		<p class="font-korean text-[14px] trim-cap pt-xs-3">가게</p>
	</div>
	<div class="w-full py-lg-4">
		<div class="flex flex-col items-center">
			<video
				class="h-auto w-[450px] max-[590px]:w-full max-[590px]:px-[40px]"
				autoplay
				muted
				loop
				playsinline
			>
				<source src="/images/homepage-animation.mp4" type="video/mp4" />
			</video>
		</div>
	</div>
	<nav class="overflow-x-auto scrollbar-none bg-jade-white pr-[10px]" aria-label="Story categories">
		<ul
			class="flex page-x flex-row flex-nowrap gap-md-4 justify-start sm:justify-center py-sm-3 body-serif"
		>
			<li class="shrink-0 last:pr-[15px] sm:last:pr-[0px]">
				<button type="button">
					View All
					<span class="[font-variant-position:super]">1</span>
				</button>
			</li>
			<li class="shrink-0 last:pr-[15px] sm:last:pr-[0px]">
				<button type="button">
					Merch
					<span class="[font-variant-position:super]">8</span>
				</button>
			</li>
			<li class="shrink-0 last:pr-[15px] sm:last:pr-[0px]">
				<button type="button">
					Collaborations
					<span class="[font-variant-position:super]">10</span>
				</button>
			</li>
			<li class="shrink-0 last:pr-[15px] sm:last:pr-[0px]">
				<button type="button">
					Food
					<span class="[font-variant-position:super]">9</span>
				</button>
			</li>
			<li class="shrink-0 last:pr-[15px] sm:last:pr-[0px]">
				<button type="button">
					Artifacts
					<span class="[font-variant-position:super]">3</span>
				</button>
			</li>
		</ul>
	</nav>
	<div class="bg-jade-white">
		<div
			class="page-x grid grid-cols-1 gap-x-md-4 gap-y-lg-4 pt-lg-4 pb-lg-5 sm:grid-cols-3 lg:mx-lg-5 xl:mx-lg-6"
		>
			{#each placeholderProducts as product (product.handle)}
				<ProductCard src={product.src} href={`/shop/${product.handle}`} />
			{/each}
		</div>
	</div>
</section>
