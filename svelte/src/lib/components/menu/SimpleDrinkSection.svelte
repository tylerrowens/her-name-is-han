<script lang="ts">
	import DrinkItem from './DrinkItem.svelte';
	import type { MENU_PAGE_QUERY_RESULT } from '$lib/sanity/sanity.types';

	type Menu = NonNullable<NonNullable<MENU_PAGE_QUERY_RESULT>['menu']>;

	type MenuSection = NonNullable<Menu['sections']>[number];
	type ContentGroup = NonNullable<MenuSection['content']>[number];

	type DrinkGroup = Extract<ContentGroup, { _type: 'simpleDrinkSection' }>;

	interface Props {
		section: DrinkGroup;
	}

	let { section }: Props = $props();
</script>

<div class="flex flex-col gap-md-4">
	{#if section.title}
		<p class="small-caps text-center card-serif-2 trim-cap">{section.title}</p>
	{/if}
	<div class="flex flex-col gap-sm-3">
		{#each section.items ?? [] as item (item._key)}
			<DrinkItem {item} />
		{/each}
	</div>
</div>
