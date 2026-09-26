<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<header class="page-x fixed top-[60px] h-[30px] inset-x-0 z-50 grid grid-cols-[1fr_auto_1fr] content-center">
	<nav class="justify-self-start flex gap-md-3 card-serif-2 small-caps items-center">
		<p>Nomad Menu</p>
	</nav>
	<nav class="justify-self-start flex gap-xs-3 nav-serif small-caps items-center">
		<a
			class="inline-flex w-[110px] aspect-[145/33] items-center justify-center rounded-[3px] bg-web-grey text-aegean transition-colors duration-200 ease-out hover:text-web-grey hover:bg-aegean"
			>Brunch</a
		>
		<a
			class="inline-flex w-[110px] aspect-[145/33] items-center justify-center rounded-[3px] bg-web-grey text-aegean transition-colors duration-200 ease-out hover:text-web-grey hover:bg-aegean"
			>Lunch</a
		>
		<a
			class="inline-flex w-[110px] aspect-[145/33] items-center justify-center rounded-[3px] bg-web-grey text-aegean transition-colors duration-200 ease-out hover:text-web-grey hover:bg-aegean"
			>Dinner</a
		>
	</nav>
	<nav class="justify-self-end flex gap-md-3 nav-serif small-caps items-center">
		<a
			class="inline-flex gap-1 w-[110px] aspect-[145/33] items-center justify-center rounded-[3px] bg-web-grey text-aegean transition-colors duration-200 ease-out hover:text-web-grey hover:bg-aegean"
			>Order <span>&#x2197;</span></a
		>
	</nav>
</header>
{@render children()}
