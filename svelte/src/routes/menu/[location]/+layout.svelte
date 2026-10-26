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
	class="page-x fixed inset-x-0 top-[40px] z-40 grid h-[60px]
	grid-cols-[1fr_auto_1fr] bg-jade-white [view-transition-name:menu-subnav]"
>
	<nav aria-label="Meals" class="flex self-end justify-self-start gap-xs-3 nav-serif small-caps">
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
