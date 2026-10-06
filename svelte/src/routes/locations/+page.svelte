<script lang="ts">
	import LocationSection from '$lib/components/location/LocationSection.svelte';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<section class="pt-[120px]">
	<div class="flex flex-col pb-[120px]">
		<div class="w-[350px] text-center trim-cap self-center nav-serif">
			<p class="pb-md-3">
				We’re here for all of life’s moments. Walk-ins are always welcome, and online reservations
				are available for parties of up to 7.
			</p>
			<p>
				For groups of 8 or more, or for catering inquiries, please contact us at
				hernameishan@handhospitality.com
			</p>
		</div>
	</div>
	<div class="w-100dvw">
		<div class="flex flex-col justify-center items-center pb-[120px] gap-[120px]">
			{#each data.locations as location (location._id)}
				<LocationSection {location} />
			{/each}
		</div>
	</div>
</section>
