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
		onBack: () => void;
	}

	let { locations, onBack }: Props = $props();
</script>

<section
	class="flex flex-col min-h-dvh w-full bg-location-nav page-x body-serif pb-[calc(var(--spacing-md-4)*2)]"
>
	<div class="sticky top-0 pt-[135px] bg-location-nav z-10 pb-md-4">
		<div class="relative flex items-center justify-center text-center">
			<button type="button" onclick={onBack} class="absolute left-0 text-[18px] trim-cap">
				←
			</button>
			<a href="/locations">
				<h1 class="text-[18px] small-caps trim-cap">Locations</h1>
			</a>
		</div>
		<h2 class="text-center nav-serif small-caps trim-cap pt-sm-3 underline underline-offset-5">
			Explore All
		</h2>
	</div>
	<div class="flex flex-1 items-center justify-center">
		<div class="flex flex-col justify-center w-full">
			<!--REPEAT-->
			{#each locations as location (location._id)}
				{#if location.slug}
					<div class="flex flex-col justify-between text-center">
						<span class="dots block w-full opacity-25"></span>
						<a href={`/locations#${encodeURIComponent(location.slug)}`}>
							<div class="py-md-3 flex flex-col gap-sm-3">
								<h1 class="card-serif-2 trim-cap">{location.name}</h1>
								{#if location.addressText}
									<p class="nav-serif small-caps trim-cap">{location.addressText}</p>
								{/if}
							</div>
						</a>
						<span class="dots block w-full opacity-25"></span>
					</div>
				{/if}
			{/each}
			<!---->
		</div>
	</div>
</section>

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
