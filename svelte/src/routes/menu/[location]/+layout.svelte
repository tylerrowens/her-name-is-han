<script lang="ts">
	import { page } from '$app/state';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();

	let location = $derived(data.menuNav.find((item) => item.slug === page.params.location));

	const mealColors: Record<string, string> = {
		brown: 'bg-hnih-brown',
		beige: 'bg-hnih-beige',
		coolGrey: 'bg-hnih-cool-grey',
		warmGrey: 'bg-hnih-warm-grey',
		lightNavy: 'bg-hnih-light-navy',
		mediumNavy: 'bg-hnih-medium-navy',
		darkNavy: 'bg-hnih-dark-navy',
		yellow: 'bg-hnih-yellow',
		green: 'bg-hnih-green',
		blue: 'bg-hnih-blue'
	};

	const defaultColorsByMeal: Record<string, string> = {
		brunch: 'yellow',
		lunch: 'green',
		dinner: 'blue'
	};

	const textColors: Record<string, string> = {
		white: 'text-jade-white',
		yellow: 'text-hnih-yellow'
	};
</script>

<header
	class="page-x sm:pl-[31px] fixed inset-x-0 top-[60px] sm:top-[60px] z-29
	grid grid-cols-1 grid-rows-[auto_auto] gap-y-[26px]
	sm:grid-cols-[1fr_auto_1fr] sm:grid-rows-1
	h-auto sm:h-[60px] bg-jade-white [view-transition-name:menu-subnav]"
>
	<nav
		aria-label="Meals"
		class="row-start-2 sm:row-start-1 sm:col-start-1
		flex w-full sm:w-auto self-end justify-self-start gap-xs-3 nav-serif small-caps"
	>
		{#each location?.menus ?? [] as meal (meal._id)}
			<a
				href={`/menu/${page.params.location}/${meal.slug}`}
				aria-current={page.params.meal === meal.slug ? 'page' : undefined}
				class="inline-flex flex-1 sm:flex-none sm:w-[110px] h-md-4 sm:h-auto sm:aspect-[145/33] items-center justify-center
			rounded-t-[5px]
			{page.params.meal === meal.slug
					? (mealColors[meal.backgroundColor ?? defaultColorsByMeal[meal.slug ?? ''] ?? 'blue'] ??
						'bg-hnih-blue')
					: 'bg-web-grey'}
		{page.params.meal === meal.slug
					? (textColors[meal.titleTextColor ?? ''] ?? 'text-aegean')
					: 'text-aegean'}"
			>
				{meal.title}
			</a>
		{/each}
	</nav>
	<nav
		class="row-start-1 sm:col-start-2 flex self-center
	justify-self-center sm:justify-self-start
	gap-md-3 nav-serif small-caps"
	>
		<p>{location?.name}</p>
	</nav>
	<nav
		class="hidden fixed bottom-[15px] left-1/2 -translate-x-1/2 z-50 flex self-start justify-self-end gap-md-3 sm:static sm:left-auto sm:translate-x-0 sm:pt-[21px] nav-serif small-caps"
	>
		<a
			href="https://order.online/business/18111/store/26902?pickup=true&redirected=true"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex w-[190px] sm:w-[120px] aspect-[145/33] items-center justify-center gap-1
		rounded-[3px] bg-aegean text-jade-white leading-none trim-cap"
			><span class="inline-flex items-center gap-1 -translate-y-[1px]">
				Order <span>&#x2197;</span>
			</span></a
		>
	</nav>
</header>
{@render children()}
