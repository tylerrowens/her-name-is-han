<script lang="ts">
	import ProductCard from '$lib/components/shop/ProductCard.svelte';
	let { data } = $props();
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
	<div class="bg-jade-white">
		<div
			class="page-x grid grid-cols-1 gap-x-md-4 gap-y-lg-4 pt-lg-4 pb-lg-5 sm:grid-cols-3 lg:mx-lg-5 xl:mx-lg-6 xxl:mx-[400px]"
		>
			{#each data.products as product (product.id)}
				<ProductCard {product} />
			{/each}
		</div>
	</div>
</section>
