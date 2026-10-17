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
	class="w-full h-full bg-jade-white flex flex-col text-center gap-[50px] justify-center small-caps body-serif"
>
	<button type="button" onclick={onMenu}>Menu</button>

	<button type="button" onclick={onLocations}>Locations</button>

	<button type="button" onclick={onReservations}>Reservations</button>

	<a href="/about" onclick={onNavigate}>About</a>

	<a href="/stories" onclick={onNavigate}>Stories</a>

	<a href="/shop" onclick={onNavigate}>Shop</a>
</section>
