<script lang="ts">
	import FeaturedCard from './FeaturedCard.svelte';

	type FeaturedItem = {
		image: string;
		title: string;
		description: string;
	};

	type Props = {
		title: string;
		copyLineOne: string;
		copyLineTwo: string;
		items: readonly FeaturedItem[];
	};

	let { title, copyLineOne, copyLineTwo, items }: Props = $props();
</script>

<section class="bg-blue-12 pt-lg-6">
	<nav class="relative flex flex-row text-jade-white">
		<p class="absolute page-x small-caps post-title-serif ">Stories</p>
		<div class="w-full ml-auto mx-md-3 flex flex-row medium-serif lg:mx-lg-6 justify-center items-center">
			<p>A Seat at Our Table</p>
		</div>
	</nav>

	<div class="grid grid-cols-1 mx-md-3 sm:grid-cols-3 gap-md-3 py-lg-6 lg:mx-xl-5">
		{#each items as item}
			<FeaturedCard {...item} />
		{/each}
	</div>
</section>
