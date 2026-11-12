<script lang="ts">
	import { onMount } from 'svelte';
	import HomeNewsletterForm from '$lib/components/HomeNewsletterForm.svelte';

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

	let isWiggling = $state(false);

	function startWiggle(event: PointerEvent) {
		if (event.pointerType === 'touch') return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		isWiggling = true;
	}
</script>

<section
	class="grid relative h-[100dvh] w-full grid-rows-[auto_minmax(0,1fr)] gap-[30px] pt-[100px] pb-[30px]"
>
	<div
		onpointerenter={startWiggle}
		onanimationend={(event) => {
			if (event.target === event.currentTarget) isWiggling = false;
		}}
		class="absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 rotate-[-3.5deg]
		md-card:top-auto md-card:right-[50px] md-card:left-auto md-card:translate-x-0 md-card:translate-y-0 md-card:pt-[80px] {isWiggling
			? 'sm:animate-[newsletter-wiggle_600ms_cubic-bezier(0.22,1,0.36,1)]'
			: ''}"
	>
		<HomeNewsletterForm />
	</div>
	<div class="flex flex-col gap-[10px] justify-self-center text-center">
		{#if now}
			<p class="trim-cap">
				<span class="font-['Fresco_Stamp'] font-normal text-[15.5px] tracking-[1.6px] pr-[.5px]"
					>{year}</span
				><span
					class="font-['Sun_Batang_Medium'] font-medium text-[13.1px] pr-[10px] relative -top-[1.8px]"
					>년</span
				><span class="font-['Fresco_Stamp'] font-normal text-[15.5px] tracking-[1.6px] pr-[.5px]"
					>{month}</span
				><span
					class="font-['Sun_Batang_Medium'] font-medium text-[13.1px] pr-[4.5px] relative -top-[1.8px]"
					>월</span
				><span class="font-['Fresco_Stamp'] font-normal text-[15.5px] tracking-[1.6px] pr-[.5px]"
					>{day}</span
				><span class="font-['Sun_Batang_Medium'] font-medium text-[13.1px] relative -top-[1.8px]"
					>일</span
				>
			</p>
			<p class="nav-serif small-caps trim-cap">
				{now.toLocaleTimeString('en-US', {
					hour: 'numeric',
					minute: '2-digit',
					hour12: true
				})}
			</p>
		{/if}
	</div>
	<video
		class="min-h-0 h-full w-full mx-auto max-w-[1700px] page-x sm:px-[90px] object-contain object-bottom"
		autoplay
		muted
		playsinline
		loop
		><source src="/images/homepage-animation.mp4" type="video/mp4" />
	</video>
</section>
