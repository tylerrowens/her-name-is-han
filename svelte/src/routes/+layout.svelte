<script lang="ts">
	import '../styles/app.css';
	import favicon from '$lib/assets/favicon.svg';
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';
	import LocationsDropDown from '$lib/components/nav/LocationsDropDown.svelte';
	import MenuDropDown from '$lib/components/nav/MenuDropDown.svelte';
	import ReservationsDropDown from '$lib/components/nav/ReservationsDropDown.svelte';
	import { onNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import type { Snippet } from 'svelte';
	import type { LayoutProps } from './$types';

	let { children, data }: LayoutProps = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise<void>((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	type Dropdown = 'menu' | 'locations' | 'reservations';
	let openDropdown = $state<Dropdown | null>(null);
</script>

<svelte:body onmouseleave={() => (openDropdown = null)} />
<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="flex min-h-dvh flex-col relative">
	<header
		class="page-x w-full fixed top-0 inset-x-0 py-sm-3 h-[60px] z-50 grid grid-cols-[1fr_auto_1fr] content-center"
	>
		<nav
			class="hidden sm:flex justify-self-start flex gap-md-3 nav-serif small-caps trim-cap items-center"
		>
			<button
				type="button"
				aria-expanded={openDropdown === 'menu'}
				onpointerenter={(event) => {
					if (event.pointerType === 'mouse') openDropdown = 'menu';
				}}
				onclick={() => (openDropdown = 'menu')}
			>
				Menu</button
			>
			<button
				type="button"
				aria-expanded={openDropdown === 'locations'}
				onpointerenter={(event) => {
					if (event.pointerType === 'mouse') openDropdown = 'locations';
				}}
				onclick={() => (openDropdown = 'menu')}>Locations</button
			>
			<button
				type="button"
				aria-expanded={openDropdown === 'reservations'}
				onpointerenter={(event) => {
					if (event.pointerType === 'mouse') openDropdown = 'reservations';
				}}
				onclick={() => (openDropdown = 'reservations')}>Reservations &#x2197</button
			>
		</nav>
		<nav class="sm:hidden flex justify-self-start items-center nav-serif small-caps trim-cap">
			<button> Menu </button>
		</nav>
		<a class="card-serif-2 sm:nav-title-serif justify-center trim-cap"> Her name is Han.</a>
		<nav
			class="hidden sm:flex justify-self-end gap-md-3 nav-serif small-caps trim-cap items-center"
		>
			<button>About</button>
			<button>Stories</button>
			<button>Shop</button>
			<button>Cart (1)</button>
		</nav>
		<nav class="sm:hidden flex justify-self-end items-center nav-serif small-caps trim-cap">
			<button> Cart (1) </button>
		</nav>
	</header>

	<div class="absolute fixed z-49 top-0" onmouseleave={() => (openDropdown = null)}>
		{#if openDropdown}
			<div transition:fade={{ duration: 130 }}>
				{#if openDropdown === 'menu'}
					<div>
						<MenuDropDown menus={data.menuNav} />
					</div>
				{:else if openDropdown === 'locations'}
					<div>
						<LocationsDropDown locations={data.locationsNav} />
					</div>
				{:else if openDropdown === 'reservations'}
					<div>
						<ReservationsDropDown reservations={data.reservationNav} />
					</div>
				{/if}
			</div>
		{/if}
	</div>

	<div class="flex-1">
		{@render children()}
	</div>
	<footer class="relative h-[350px] w-full overflow-hidden bg-aegean">
		<div
			class="ml-md-3 mr-md-3 lg:ml-lg-6 absolute inset-x-0 bottom-[35px] grid grid-cols-[1fr_640px] items-end gap-md-4"
		>
			<div class="text-ash body-serif">
				<p class="small-caps pb-sm-3">Connect with us</p>

				<dl class="inline-grid grid-cols-[max-content_max-content] gap-x-md-3">
					<dt class="small-caps">Social</dt>
					<dd>
						<a
							class="transition-colors duration-200 ease-out hover:text-jade-white"
							href="https://www.instagram.com/"
							target="_blank"
							rel="noreferrer"
						>
							Instagram <span>&#x2197;</span>
						</a>
					</dd>

					<dt class="small-caps">Contact</dt>
					<dd>
						<a
							class="transition-colors duration-200 ease-out hover:text-jade-white"
							href="mailto:hernameishan@handhospitality.com"
						>
							hernameishan@handhospitality.com <span>&#x2197;</span>
						</a>
					</dd>
				</dl>
			</div>

			<div class="w-full justify-self-end">
				<NewsletterForm />
			</div>
		</div>
	</footer>
</div>
