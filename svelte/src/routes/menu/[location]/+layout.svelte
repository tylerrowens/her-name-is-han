<script lang="ts">
	import { page } from '$app/state';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();

	let location = $derived(data.menuNav.find((item) => item.slug === page.params.location));

	const mealColors: Record<string, string> = {
		brunch: 'bg-menu-yellow',
		lunch: 'bg-menu-purple',
		dinner: 'bg-menu-blue'
	};
</script>

<header
	class="page-x fixed inset-x-0 top-[60px] sm:top-[40px] z-40
	grid grid-cols-1 grid-rows-[auto_auto] gap-y-[12px]
	sm:grid-cols-[1fr_auto_1fr] sm:grid-rows-1
	h-auto sm:h-[60px] bg-jade-white [view-transition-name:menu-subnav]"
>
	<nav
		aria-label="Meals"
		class="row-start-2 sm:row-start-1 sm:col-start-1
		flex self-end justify-self-start gap-xs-3 nav-serif small-caps"
	>
		{#each location?.menus ?? [] as meal (meal._id)}
			<a
				href={`/menu/${page.params.location}/${meal.slug}`}
				aria-current={page.params.meal === meal.slug ? 'page' : undefined}
				class="inline-flex w-[110px] aspect-[145/33] items-center justify-center
			rounded-t-[3px] text-aegean
			{page.params.meal === meal.slug ? (mealColors[meal.slug] ?? 'bg-web-grey') : 'bg-web-grey'}"
			>
				{meal.title}
			</a>
		{/each}
	</nav>
	<nav
		class="row-start-1 sm:col-start-2 flex self-start
	justify-self-center sm:justify-self-start
	gap-md-3 pt-[16px] nav-serif small-caps"
	>
		<p>Nomad</p>
	</nav>
	<nav
		class="fixed bottom-[15px] left-1/2 -translate-x-1/2 z-50 flex self-start justify-self-end gap-md-3 sm:static sm:left-auto sm:translate-x-0 sm:pt-[16px] nav-serif small-caps"
	>
		<a
			class="inline-flex w-[190px] sm:w-[120px] aspect-[145/33] items-center justify-center gap-1
		rounded-[3px] bg-aegean text-jade-white">Order <span>&#x2197;</span></a
		>
	</nav>
</header>
{@render children()}
