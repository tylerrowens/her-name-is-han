<script lang="ts">
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

<section
	class="grid h-[100dvh] w-full grid-rows-[auto_minmax(0,1fr)] gap-[30px] pt-[138px] pb-[30px]"
>
	<div class="flex flex-col gap-[10px] justify-self-center text-center">
		{#if now}
			<p class="trim-cap">
				<span class="font-['Fresco_Stamp'] font-normal text-[15.5px] tracking-[1px] pr-[.5px]"
					>{year}</span
				><span
					class="font-['Sun_Batang_Medium'] font-medium text-[12px] pr-[10px] relative -top-[1.3px]"
					>년</span
				><span class="font-['Fresco_Stamp'] font-normal text-[15.5px] tracking-[1px] pr-[.5px]"
					>{month}</span
				><span
					class="font-['Sun_Batang_Medium'] font-medium text-[12px] pr-[4.5px] relative -top-[1.3px]"
					>월</span
				><span class="font-['Fresco_Stamp'] font-normal text-[15.5px] tracking-[1px] pr-[.5px]"
					>{day}</span
				><span class="font-['Sun_Batang_Medium'] font-medium text-[12px] relative -top-[1.3px]"
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
		class="min-h-0 h-full w-full mx-auto max-w-[1550px] page-x sm:px-[100px] lg:px-[150px] object-contain object-bottom"
		autoplay
		muted
		playsinline
		loop
		><source src="/images/homepage-animation.mp4" type="video/mp4" />
	</video>
</section>
