<script lang="ts">
	interface ReservationNavItem {
		_id: string;
		name: string | null;
		reservationUrl: string | null;
		menus:
			| {
					_id: string;
					title: string | null;
			  }[]
			| null;
	}

	interface Props {
		reservations: ReservationNavItem[];
		onNavigate: () => void;
		onBack: () => void;
	}

	let { reservations, onNavigate, onBack }: Props = $props();
</script>

<section class="w-full h-full bg-reservation-nav pt-[calc(50dvh-3lh-125px)] page-x body-serif">
	<div class="relative flex items-center justify-center text-center">
		<button type="button" onclick={onBack} class="absolute left-0"> ← </button>
		<h1 class="small-caps">Reservations</h1>
	</div>
</section>
