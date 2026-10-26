<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<header
	class="page-x fixed inset-x-0 top-[40px] z-40 grid h-[60px]
	grid-cols-[1fr_auto_1fr] bg-jade-white"
>
	<nav class="flex self-end justify-self-start gap-xs-3 nav-serif small-caps">
		<a
			class="inline-flex w-[110px] aspect-[145/33] items-center justify-center rounded-t-[3px] bg-web-grey text-aegean"
			>Brunch</a
		>
		<a
			class="inline-flex w-[110px] aspect-[145/33] items-center justify-center rounded-t-[3px] bg-web-grey text-aegean"
			>Lunch</a
		>
		<a
			class="inline-flex w-[110px] aspect-[145/33] items-center justify-center rounded-t-[3px] bg-menu-blue text-aegean"
			>Dinner</a
		>
	</nav>
	<nav class="flex self-start justify-self-start gap-md-3 pt-[16px] body-serif small-caps">
		<p>Nomad</p>
	</nav>
	<nav class="flex self-start justify-self-end gap-md-3 pt-[16px] nav-serif small-caps">
		<a
			class="inline-flex w-[120px] aspect-[145/33] items-center justify-center gap-1
		rounded-[3px] bg-aegean text-jade-white">Order <span>&#x2197;</span></a
		>
	</nav>
</header>
{@render children()}
