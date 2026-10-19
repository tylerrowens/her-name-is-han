<script lang="ts">
	import { tick } from 'svelte';
	import MobileNavHome from './MobileNavHome.svelte';
	import MobileNavLocations from './MobileNavLocations.svelte';
	import MobileNavMenus from './MobileNavMenus.svelte';
	import MobileNavReservations from './MobileNavReservations.svelte';
	import { fade } from 'svelte/transition';

	import type { LOCATIONS_NAV_QUERY_RESULT } from '$lib/sanity/sanity.types';
	import type { MENU_NAV_QUERY_RESULT } from '$lib/sanity/sanity.types';
	import type { RESERVATION_NAV_QUERY_RESULT } from '$lib/sanity/sanity.types';

	type Panel = 'home' | 'menu' | 'locations' | 'reservations';

	interface Props {
		locationsNav: LOCATIONS_NAV_QUERY_RESULT;
		menuNav: MENU_NAV_QUERY_RESULT;
		reservationNav: RESERVATION_NAV_QUERY_RESULT;
		onClose: () => void;
	}

	let { locationsNav, menuNav, reservationNav, onClose }: Props = $props();

	let activePanel = $state<Panel>('home');
	let navigationElement: HTMLElement;

	$effect(() => {
		navigationElement?.focus();
	});

	async function openPanel(panel: Exclude<Panel, 'home'>) {
		activePanel = panel;
		await tick();
		navigationElement?.focus();
	}

	async function goBack() {
		activePanel = 'home';
		await tick();
		navigationElement?.focus();
	}

	function close() {
		onClose();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') close();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<nav
	id="mobile-navigation"
	aria-label="Mobile navigation"
	tabindex="-1"
	bind:this={navigationElement}
	class={`fixed inset-0 z-40 h-full w-full overflow-y-auto overscroll-none
		${
			activePanel === 'home'
				? 'bg-jade-white'
				: activePanel === 'menu'
					? 'bg-menu-nav'
					: activePanel === 'locations'
						? 'bg-location-nav'
						: 'bg-reservation-nav'
		}`}
>
	{#key activePanel}
		<div out:fade={{ duration: 200 }} in:fade={{ duration: 200, delay: 200 }} class="min-h-full">
			{#if activePanel === 'home'}
				<MobileNavHome
					onMenu={() => openPanel('menu')}
					onLocations={() => openPanel('locations')}
					onReservations={() => openPanel('reservations')}
					onNavigate={close}
				/>
			{:else if activePanel === 'menu'}
				<MobileNavMenus menus={menuNav} onBack={goBack} />
			{:else if activePanel === 'locations'}
				<MobileNavLocations locations={locationsNav} onBack={goBack} />
			{:else if activePanel === 'reservations'}
				<MobileNavReservations reservations={reservationNav} onBack={goBack} />
			{/if}
		</div>
	{/key}
</nav>
