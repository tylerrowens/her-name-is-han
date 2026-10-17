<script lang="ts">
	interface LocationNavItem {
		_id: string;
		name: string | null;
		slug: string | null;
		addressText: string | null;
		mapsUrl: string | null;
	}

	interface Props {
		locations: LocationNavItem[];
	}

	let { locations }: Props = $props();
</script>

<div class="bg-location-nav w-dvw h-auto page-x pt-[60px] pb-[30px]">
	<a href="/locations" class="block nav-serif trim-cap pb-[30px] small-caps">Explore all</a>

	{#each locations as location (location._id)}
		{#if location.slug}
			<div class="grid grid-cols-[auto_minmax(0,1fr)_auto] items-baseline pb-[20px]">
				<a
					href={`/locations#${encodeURIComponent(location.slug)}`}
					class="nav-title-serif pr-xs-2 trim-cap"
				>
					{location.name}
				</a>

				<span class="dots flex-1 opacity-25"></span>

				{#if location.addressText}
					{#if location.mapsUrl}
						<a
							href={location.mapsUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="justify-self-end pl-xs-2 nav-serif small-caps trim-cap"
							>{location.addressText}</a
						>
					{/if}
				{/if}
			</div>
		{/if}
	{/each}
</div>

<style>
	.dots {
		--dot-size: 2px;
		--dot-spacing: 7px;

		height: var(--dot-size);
		background-image: radial-gradient(circle closest-side, currentColor 95%, transparent 100%);
		background-size: var(--dot-spacing) var(--dot-size);
		background-repeat: repeat-x;
	}
</style>
