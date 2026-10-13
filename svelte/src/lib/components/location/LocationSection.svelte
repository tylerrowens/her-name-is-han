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
	<div class="grid grid-cols-1 gap-md-4 sm:grid-cols-[450px_350px]">
		<div class="aspect-[4/3] sm:aspect-auto overflow-hidden">
			<img class="h-full w-full object-cover" src="images/location-1.jpg" alt="" />
		</div>
		<div class="flex flex-col gap-md-4 sm:justify-between">
			<p class="trim-cap card-serif-2 sm:nav-title-serif">{location.name}</p>
			{#if location.description}
				<div class="trim-cap nav-serif"><PortableText value={location.description} /></div>
			{/if}
			<div class="grid text-center sm:text-left sm:grid-cols-[1fr_1fr] nav-serif">
				{#if location.address}
					<a href={location.mapsUrl} class="nav-serif"
						><PortableText value={location.address} /></a
					>
				{/if}
				<p class="">{location.phone}</p>
			</div>
			<div class="flex flex-col gap-sm-3">
				<div class="text-center nav-serif small-caps sm:text-left">
					<p>Hours</p>
				</div>
				<div class="grid grid-cols-[1fr_1fr] text-center sm:text-left nav-serif small-caps">
					{#each location.hours as hour, index}
						<div class="justify-self-center sm:justify-self-start">
							<p>{hour.days}</p>
							{#each hour.times as times}
								<p>{times}</p>
							{/each}
						</div>
					{/each}
				</div>
			</div>
			<a
				href={location.reservationUrl}
				class="inline-flex self-center sm:self-start w-[120px] aspect-[145/33] items-center justify-center rounded-[3px] bg-aegean text-jade-white nav-serif"
				>Reservations ↗</a
			>
		</div>
	</div>
</section>
