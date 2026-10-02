<script lang="ts">
	import type { MENU_PAGE_QUERY_RESULT } from '$lib/sanity/sanity.types';

	type Menu = NonNullable<NonNullable<MENU_PAGE_QUERY_RESULT>['menu']>;

	type Section = NonNullable<Menu['sections']>[number];
	type MenuSection = Extract<Section, { _type: 'menuSection' }>;

	const backgroundClasses = {
		blue: 'bg-menu-blue',
		purple: 'bg-menu-purple',
		yellow: 'bg-menu-yellow'
	} as const;

	interface Props {
		row: number;
		endRow: number;
		section: MenuSection;
	}

	let { row, endRow, section }: Props = $props();

	let backgroundClass = $derived(backgroundClasses[section.backgroundColor ?? 'blue']);
</script>

<div
	style:--section-row={row}
	style:--section-end={endRow}
	style:--section-layer={row}
	class="sticky z-[var(--section-layer)] self-start
	top-[calc(var(--menu-offset)+var(--title-collapsed)-var(--title-expanded))]
	flex h-[var(--title-expanded)] items-center
	{backgroundClass}
	sm:top-[var(--menu-offset)]
	sm:col-start-1
	sm:row-start-[var(--section-row)]
	sm:row-end-[var(--section-end)]
	sm:h-[calc(100dvh-var(--menu-offset))]"
>
	<div
		class="sticky top-[var(--menu-offset)]
flex h-[var(--title-collapsed)] w-full
flex-col items-center justify-center text-center
sm:static sm:h-full"
	>
		<p class="trim-cap body-serif small-caps sm:about-card-serif">{section.title}</p>
	</div>
</div>
