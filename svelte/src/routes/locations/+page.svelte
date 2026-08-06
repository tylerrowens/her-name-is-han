<script lang="ts">
	import type { PageData } from './$types';
	import LocationCard from '$lib/components/LocationCard.svelte';

	let { data }: { data: PageData } = $props();
</script>

<section>
	<h1 class="sticky top-[150px] page-x post-title-serif small-caps col-start-4 self-start">
		Locations
	</h1>
	<div class="flex flex-col w-full justify-center gap-[200px] mb-[250px] pl-[900px] pt-[150px]">
		{#each data.locations as location, index}
			<div
				class="h-[660px] w-[420px] shrink-0"
				class:rotate-[0deg]={index % 3 === 0}
				class:rotate-[-1.38deg]={index % 3 === 1}
				class:rotate-[1.66deg]={index % 3 === 2}
			>
				<LocationCard {...location} />
			</div>
		{/each}
	</div>
</section>
