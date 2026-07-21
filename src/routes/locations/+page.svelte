<script lang="ts">
	import type { PageData } from './$types';
	import LocationCard from '$lib/components/LocationCard.svelte';

	let { data }: { data: PageData } = $props();
</script>

<section>
	<h1 class="medium-serif flex flex-row w-full justify-center mt-[145px] mb-[155px]">Locations</h1>
	<div class="flex flex-row w-full justify-center gap-[15px] mb-[250px]">
		{#each data.locations as location}
			<div class="h-[660px] w-[420px] shrink-0">
				<LocationCard {...location} />
			</div>
		{/each}
	</div>
</section>
