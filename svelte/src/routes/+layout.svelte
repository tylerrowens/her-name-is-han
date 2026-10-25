<script lang="ts">
	import '../styles/app.css';
	import favicon from '$lib/assets/favicon.svg';
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';
	import LocationsDropDown from '$lib/components/nav/LocationsDropDown.svelte';
	import MenuDropDown from '$lib/components/nav/MenuDropDown.svelte';
	import ReservationsDropDown from '$lib/components/nav/ReservationsDropDown.svelte';
	import MobileNavOverlay from '$lib/components/nav-mobile/MobileNavOverlay.svelte';
	import { headerHeroContext, type ReportHeaderHero } from '$lib/nav/header-hero-context';
	import { setContext } from 'svelte';
	import { page } from '$app/state';
	import { tick } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import type { LayoutProps } from './$types';

	let { children, data }: LayoutProps = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) {
			return () => {
				closeMobileNavForNavigation();
			};
		}

		return new Promise<void>((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;

				closeMobileNavForNavigation();
				await tick();
			});
		});
	});

	let heroBehindHeader = $state<boolean | null>(null);

	setContext<ReportHeaderHero>(headerHeroContext, (visible) => {
		heroBehindHeader = visible;
	});

	type Dropdown = 'menu' | 'locations' | 'reservations';
	let openDropdown = $state<Dropdown | null>(null);

	let mobileNavOpen = $state(false);

	let heroHeader = $derived(
		page.route.id === '/stories' &&
			(heroBehindHeader ?? true) &&
			openDropdown === null &&
			!mobileNavOpen
	);

	let restoreScrollOnClose = true;

	$effect(() => {
		if (!mobileNavOpen) return;

		const scrollY = window.scrollY;
		const body = document.body;

		const previousPosition = body.style.position;
		const previousTop = body.style.top;
		const previousWidth = body.style.width;
		const previousOverflow = body.style.overflow;

		body.style.position = 'fixed';
		body.style.top = `-${scrollY}px`;
		body.style.width = '100%';
		body.style.overflow = 'hidden';

		return () => {
			body.style.position = previousPosition;
			body.style.top = previousTop;
			body.style.width = previousWidth;
			body.style.overflow = previousOverflow;

			if (restoreScrollOnClose) {
				window.scrollTo(0, scrollY);
			}

			restoreScrollOnClose = true;
		};
	});

	$effect(() => {
		const desktop = window.matchMedia('(min-width: 800px)');

		function handleBreakpoint() {
			if (desktop.matches) mobileNavOpen = false;
		}

		desktop.addEventListener('change', handleBreakpoint);

		return () => desktop.removeEventListener('change', handleBreakpoint);
	});

	$effect(() => {
		const desktop = window.matchMedia('(max-width: 800px)');

		function handleBreakpoint() {
			if (desktop.matches) openDropdown = null;
		}

		desktop.addEventListener('change', handleBreakpoint);

		return () => desktop.removeEventListener('change', handleBreakpoint);
	});

	function closeMobileNav() {
		restoreScrollOnClose = true;
		mobileNavOpen = false;
	}

	function closeMobileNavForNavigation() {
		if (!mobileNavOpen) return;

		restoreScrollOnClose = false;
		mobileNavOpen = false;
	}

	import { onMount } from 'svelte';

	let now = $state<Date | null>(null);

	onMount(() => {
		now = new Date();

		const interval = setInterval(() => {
			now = new Date();
		}, 1000);

		return () => clearInterval(interval);
	});

	let dateParts = $derived(
		now
			? new Intl.DateTimeFormat('en-US', {
					timeZone: 'America/New_York',
					year: 'numeric',
					month: '2-digit',
					day: '2-digit'
				}).formatToParts(now)
			: []
	);

	let year = $derived(dateParts.find((part) => part.type === 'year')?.value ?? '');
	let month = $derived(dateParts.find((part) => part.type === 'month')?.value ?? '');
	let day = $derived(dateParts.find((part) => part.type === 'day')?.value ?? '');
</script>

<svelte:body onmouseleave={() => (openDropdown = null)} />
<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="flex min-h-dvh flex-col relative">
	<div
		class="pointer-events-none fixed inset-x-0 top-0 z-30 h-[60px] bg-jade-white transition-opacity duration-400 linear"
		class:opacity-0={heroHeader}
		class:opacity-100={!heroHeader}
	></div>
	<header
		class="page-x fixed inset-x-0 top-0 z-50 grid h-[60px] w-full grid-cols-[1fr_auto_1fr] content-center py-sm-3 transition-colors duration-400 linear"
		class:text-jade-white={heroHeader}
		class:text-aegean={!heroHeader}
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
				onclick={() => (openDropdown = 'locations')}>Locations</button
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
			<button
				type="button"
				aria-expanded={mobileNavOpen}
				aria-controls="mobile-navigation"
				onclick={() => (mobileNavOpen = !mobileNavOpen)}
			>
				{mobileNavOpen ? 'Close' : 'Menu'}
			</button>
		</nav>
		<a href="/" class="card-serif-2 sm:nav-title-serif justify-center trim-cap">
			Her name is Han.</a
		>
		<nav
			class="hidden sm:flex justify-self-end gap-md-3 nav-serif small-caps trim-cap items-center"
		>
			<a href="/about">About</a>
			<a href="/stories">Stories</a>
			<a href="/shop">Shop</a>
			<button>Cart (1)</button>
		</nav>
		<nav class="sm:hidden flex justify-self-end items-center nav-serif small-caps trim-cap">
			<button> (1) </button>
		</nav>
	</header>

	{#if mobileNavOpen}
		<div class="w-full h-full">
			<MobileNavOverlay
				locationsNav={data.locationsNav}
				menuNav={data.menuNav}
				reservationNav={data.reservationNav}
				onClose={closeMobileNav}
			/>
		</div>
	{/if}

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

	<div class="flex-1" inert={mobileNavOpen}>
		{@render children()}
	</div>

	{#if page.url.pathname !== '/'}
		<footer
			class="relative h-[calc(100dvh_-_60px)] sm:h-[307px] w-full overflow-hidden bg-aegean"
			inert={mobileNavOpen}
		>
			<div
				class="page-x absolute inset-x-0 top-[15px] bottom-[15px] sm:bottom-[50px] sm:top-[50px] grid grid-cols-1 sm:grid-cols-[1fr_500px] grid-rows-[auto_1fr] sm:grid-rows-1 items-end gap-md-4 text-ash nav-serif"
			>
				<div
					class="flex h-full flex-col gap-0 sm:gap-[70px]
	justify-between footer-break:flex-row footer-break:items-end
	footer-break:justify-start order-2 sm:order-1"
				>
					<div class="flex flex-1 items-center justify-center sm:block sm:flex-none">
						<div class="flex flex-col text-center sm:text-left">
							{#if now}
								<p class="">
									<span
										class="font-['Fresco_Stamp'] font-normal text-[15.5px] sm:text-[14.5px] tracking-[1px] pr-[.5px]"
										>{year}</span
									><span
										class="font-['Sun_Batang_Medium'] font-medium text-[12px] sm:text-[11.5px] pr-[10px] relative -top-[1.3px]"
										>년</span
									><span
										class="font-['Fresco_Stamp'] font-normal text-[15.5px] sm:text-[14.5px] tracking-[1px] pr-[.5px]"
										>{month}</span
									><span
										class="font-['Sun_Batang_Medium'] font-medium text-[12px] sm:text-[11.5px] pr-[4.5px] relative -top-[1.3px]"
										>월</span
									><span
										class="font-['Fresco_Stamp'] font-normal text-[15.5px] sm:text-[14.5px] tracking-[1px] pr-[.5px]"
										>{day}</span
									><span
										class="font-['Sun_Batang_Medium'] font-medium text-[12px] sm:text-[11.5px] relative -top-[1.3px]"
										>일</span
									>
								</p>
								<p class="nav-serif small-caps">
									{now.toLocaleTimeString('en-US', {
										hour: 'numeric',
										minute: '2-digit',
										hour12: true
									})}
								</p>
							{/if}
						</div>
					</div>
					<div>
						<p class="small-caps pb-sm-3">Connect with us</p>

						<dl class="inline-grid grid-cols-[max-content_max-content] gap-x-md-3">
							<dt class="small-caps">Social</dt>
							<dd>
								<a
									class="transition-colors duration-200 ease-out hover:text-jade-white underline underline-offset-2"
									href="https://www.instagram.com/hernameishan/?hl=en"
									target="_blank"
									rel="noreferrer"
								>
									Instagram
								</a>
							</dd>

							<dt class="small-caps">Contact</dt>
							<dd>
								<a
									class="transition-colors duration-200 ease-out hover:text-jade-white underline underline-offset-2"
									href="mailto:hernameishan@handhospitality.com"
								>
									hernameishan@handhospitality.com
								</a>
							</dd>
						</dl>
					</div>
				</div>

				<div class="w-full self-start sm:self-end justify-self-end order-1 sm:order-2">
					<NewsletterForm />
				</div>
			</div>
		</footer>
	{/if}
</div>
