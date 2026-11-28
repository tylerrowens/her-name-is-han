<script lang="ts">
	import LocationSection from '$lib/components/location/LocationSection.svelte';
	import type { PageData } from './$types';
	import { PortableText } from '@portabletext/svelte';
	import SmallCaps from '$lib/sanity/SmallCaps.svelte';
	import Link from '$lib/sanity/Link.svelte';
	let { data }: { data: PageData } = $props();
</script>

<section class="page-x pt-[135px] sm:px-[0px]">
	<div class="flex flex-col pb-[120px]">
		<div class="w-full max-w-[450px] page-x sm:px-[0px] text-center trim-cap self-center nav-serif">
			{#if data.locationsPageInfo?.info}
				<div class="[&>p+p]:mt-[1em]">
					<PortableText
						value={data.locationsPageInfo?.info}
						components={{ marks: { smallCaps: SmallCaps, link: Link } }}
					/>
				</div>
			{/if}
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

data.locationsPageInfo?.info
