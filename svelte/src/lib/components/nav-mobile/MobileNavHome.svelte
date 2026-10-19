<script lang="ts">
	interface Props {
		onMenu: () => void;
		onLocations: () => void;
		onReservations: () => void;
		onNavigate: () => void;
	}

	let { onMenu, onLocations, onReservations, onNavigate }: Props = $props();
</script>

<section
	class="flex min-h-dvh w-full flex-col justify-between gap-[20px] bg-jade-white
		pt-[135px] pb-[135px] text-center text-[18px] small-caps trim-cap"
>
	<button class="trim-cap" type="button" onclick={onMenu}>Menu</button>

	<button class="trim-cap" type="button" onclick={onLocations}>Locations</button>

	<button class="trim-cap" type="button" onclick={onReservations}>Reservations</button>

	<a class="trim-cap" href="/about">About</a>

	<a class="trim-cap" href="/stories">Stories</a>

	<a class="trim-cap" href="/shop">Shop</a>
</section>
