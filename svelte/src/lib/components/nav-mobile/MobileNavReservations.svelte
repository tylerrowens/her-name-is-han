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
		onBack: () => void;
	}

	let { reservations, onBack }: Props = $props();

	function formatMenus(menus: ReservationNavItem['menus']): string {
		const titles = (menus ?? []).flatMap((menu) => (menu.title ? [menu.title] : []));

		return new Intl.ListFormat('en-US', {
			style: 'long',
			type: 'conjunction'
		}).format(titles);
	}
</script>

<section class="flex flex-col min-h-dvh w-full bg-reservation-nav page-x body-serif">
	<div class="sticky top-0 pt-[135px] bg-reservation-nav z-10 pb-md-4">
		<div class="relative flex items-center justify-center text-center">
			<button type="button" onclick={onBack} class="absolute left-0 text-[18px] trim-cap">
				←
			</button>
			<div>
				<h1 class="text-[18px] small-caps trim-cap">Reservations</h1>
			</div>
		</div>
		<h2 class="text-center nav-serif small-caps trim-cap pt-sm-3">Book a reservation below</h2>
	</div>
	<div class="flex flex-1 items-center justify-center">
		<div class="flex flex-col justify-center w-full">
			<!--REPEAT-->
			{#each reservations as reservation (reservation._id)}
				{@const menuList = formatMenus(reservation.menus)}
				{#if reservation.reservationUrl}
					<div class="flex flex-col justify-between text-center">
						<span class="dots block w-full opacity-25"></span>
						<a href={reservation.reservationUrl}>
							<div class="py-md-3 flex flex-col gap-sm-3">
								<h1 class="card-serif-2 trim-cap">{reservation.name}</h1>
								{#if menuList}
									<p class="nav-serif small-caps trim-cap">Open for {menuList}</p>
								{/if}
								<p class="nav-serif small-caps trim-cap underline underline-offset-5">
									Book &#x2197
								</p>
							</div>
						</a>
						<span class="dots block w-full opacity-25"></span>
					</div>
				{/if}
			{/each}
			<!---->
		</div>
	</div>
	<div class="flex justify-center text-center nav-serif my-md-4">
		<p class="">
			We’re here for all of life’s moments. Walk-ins are always welcome, and online reservations are
			available for parties of up to 7. <br /><br />For groups of 8 or more, or for catering
			inquiries, please contact us at hernameishan@handhospitality.com
		</p>
	</div>
</section>

<style>
	.dots {
		--dot-size: 2.5px;
		--dot-spacing: 7px;

		height: var(--dot-size);
		background-image: radial-gradient(circle closest-side, currentColor 95%, transparent 100%);
		background-size: var(--dot-spacing) var(--dot-size);
		background-repeat: repeat-x;
	}
</style>
