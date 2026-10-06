<script lang="ts">
	import type { LOCATIONS_PAGE_QUERY_RESULT } from '$lib/sanity/sanity.types';
	import { PortableText } from '@portabletext/svelte';

	type Locations = LOCATIONS_PAGE_QUERY_RESULT[number];

	interface Props {
		location: Locations;
	}

	let { location }: Props = $props();
</script>

<section>
	<div class="grid grid-cols-[450px_350px] gap-md-4">
		<div class="aspect-[4/3] overflow-hidden">
			<img class="h-full w-full object-cover" src="images/location-1.jpg" alt="" />
		</div>
		<div class="flex flex-col justify-between">
			<p class="trim-cap card-serif-2">{location.name}</p>
			{#if location.description}
				<div class="trim-cap nav-serif"><PortableText value={location.description} /></div>
			{/if}
			<div class="grid grid-cols-[1fr_1fr] nav-serif">
				{#if location.address}
					<a href={location.mapsUrl} class="trim-cap nav-serif"
						><PortableText value={location.address} /></a
					>
				{/if}
				<p>{location.phone}</p>
			</div>
			<div class="grid grid-cols-[1fr_1fr] nav-serif small-caps">
				{#each location.hours as hour}
					<div>
						<p>{hour.days}</p>
						{#each hour.times as times}
							<p>{times}</p>
						{/each}
					</div>
				{/each}
			</div>
			<a
				href={location.reservationUrl}
				class="inline-flex w-[120px] aspect-[145/33] items-center justify-center rounded-[3px] bg-web-grey text-aegean nav-serif transition-colors duration-200 ease-out hover:text-web-grey hover:bg-aegean"
				>Reservations ↗</a
			>
		</div>
	</div>
</section>
