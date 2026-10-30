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
	}

	let { reservations }: Props = $props();

	function formatMenus(menus: ReservationNavItem['menus']): string {
		const titles = (menus ?? []).flatMap((menu) => (menu.title ? [menu.title] : []));

		return new Intl.ListFormat('en-US', {
			style: 'long',
			type: 'conjunction'
		}).format(titles);
	}
</script>

<div class="bg-reservation-nav w-dvw h-auto page-x pt-[60px] pb-[30px]">
	<div class="nav-serif trim-cap pb-[30px] small-caps">book A Reservation below</div>

	{#each reservations as reservation (reservation._id)}
		{@const menuList = formatMenus(reservation.menus)}
		{#if reservation.reservationUrl}
			<div class="pb-[20px]">
				<div class="grid grid-cols-[auto_minmax(0,1fr)_auto] flex items-baseline">
					<a
						href={reservation.reservationUrl}
						class="nav-title-serif pr-xs-2 trim-cap transition-colors duration-200 ease-out hover:text-aegean/40"
						>{reservation.name}</a
					>
					<span class="dots flex-1 opacity-25"></span>
					<a
						href={reservation.reservationUrl}
						class="justify-self-end pl-xs-2 nav-serif small-caps trim-cap transition-colors duration-200 ease-out hover:text-aegean/40"
						>Book &#x2197</a
					>
				</div>
				{#if menuList}
					<p class="nav-serif trim-cap small-caps pt-[10px]">
						Open for {menuList}
					</p>
				{/if}
			</div>
		{/if}
	{/each}

	<div class="grid grid-cols-[40dvw_40dvw] gap-x-md-4">
		<div class="nav-serif trim-cap pt-[10px] w-[40dvw]">
			We’re here for all of life’s moments. Walk-ins are always welcome, and online reservations are
			available for parties of up to 7.
		</div>
		<div class="nav-serif trim-cap pt-[10px] w-[40dvw]">
			For groups of 8 or more, or for catering inquiries, please contact us at
			hernameishan@handhospitality.com
		</div>
	</div>
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
