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
		onNavigate: () => void;
		onBack: () => void;
	}

	let { locations, onNavigate, onBack }: Props = $props();
</script>

<section class="w-full h-full bg-location-nav pt-[calc(50dvh-3lh-125px)] page-x body-serif">
	<div class="relative flex items-center justify-center text-center">
		<button type="button" onclick={onBack} class="absolute left-0"> ← </button>
		<h1 class="small-caps">Locations</h1>
	</div>
</section>
