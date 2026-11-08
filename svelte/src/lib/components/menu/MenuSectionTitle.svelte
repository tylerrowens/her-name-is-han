<script lang="ts">
	import type { MENU_PAGE_QUERY_RESULT } from '$lib/sanity/sanity.types';

	type Menu = NonNullable<NonNullable<MENU_PAGE_QUERY_RESULT>['menu']>;

	type Section = NonNullable<Menu['sections']>[number];
	type MenuSection = Extract<Section, { _type: 'menuSection' }>;
	type MenuColor = NonNullable<Menu['backgroundColor']>;

	const backgroundClasses: Record<MenuColor, string> = {
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

	const titleTextClasses = {
		white: 'text-jade-white',
		yellow: 'text-hnih-yellow'
	};

	const defaultColorsByMeal: Partial<Record<string, MenuColor>> = {
		dinner: 'blue',
		lunch: 'green',
		brunch: 'yellow'
	};

	interface Props {
		row: number;
		endRow: number;
		section: MenuSection;
		meal: string;
		backgroundColor: Menu['backgroundColor'];
		titleTextColor: Menu['titleTextColor'];
	}

	let { row, endRow, section, meal, backgroundColor, titleTextColor }: Props = $props();

	let backgroundClass = $derived(
		backgroundClasses[backgroundColor ?? defaultColorsByMeal[meal] ?? 'blue']
	);

	let titleTextClass = $derived(titleTextColor ? titleTextClasses[titleTextColor] : 'text-aegean');
</script>

<div
	style:--section-row={row}
	style:--section-end={endRow}
	style:--section-layer={row}
	class="sticky z-[var(--section-layer)] self-start
	top-[calc(var(--menu-offset)+var(--title-collapsed)-var(--title-expanded))]
	flex h-[var(--title-expanded)] items-center
	{backgroundClass}
	{titleTextClass}
	sm:top-[var(--menu-offset)]
	sm:col-start-1
	sm:row-start-[var(--section-row)]
	sm:row-end-[var(--section-end)]
	sm:h-[calc(100dvh-var(--menu-offset))]"
>
	<div
		class="sticky flex flex-col gap-[23px] top-[var(--menu-offset)]
flex h-[var(--title-collapsed)] w-full
flex-col items-center justify-center text-center
sm:static sm:h-full"
	>
		<p class="trim-cap body-serif small-caps sm:[font-variant:normal] sm:about-card-serif">
			{section.title}
		</p>
		<p class="trim-cap font-['Sun_Batang_Medium'] sm:text-[25px] text-[12px]">
			{section.koreanTitle}
		</p>
	</div>
</div>
