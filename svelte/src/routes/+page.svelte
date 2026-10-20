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
</script>

<section class="relative flex h-screen w-full flex-col justify-end pb-[25px]">
	<div class="absolute top-[135px] left-1/2 -translate-x-1/2 text-center z-10">
		{#if now}
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
		class="h-auto w-full mx-auto max-w-[1550px] page-x lg:px-[150px] sm:px-[100px]"
		autoplay
		muted
		playsinline
		loop
		><source src="/images/homepage-animation.mp4" type="video/mp4" />
	</video>
</section>
