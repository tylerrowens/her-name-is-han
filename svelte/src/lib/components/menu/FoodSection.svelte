<script lang="ts">
	import MenuItem from './MenuItem.svelte';
	import MenuImage from './MenuImage.svelte';
	import type { MENU_PAGE_QUERY_RESULT } from '$lib/sanity/sanity.types';

	type Menu = NonNullable<NonNullable<MENU_PAGE_QUERY_RESULT>['menu']>;

	type MenuSection = NonNullable<Menu['sections']>[number];
	type ContentGroup = NonNullable<MenuSection['content']>[number];

	type FoodGroup = Extract<ContentGroup, { _type: 'foodSection' }>;

	interface Props {
		section: FoodGroup;
	}

	let { section }: Props = $props();
</script>

<div class="flex flex-col">
	{#if section.title}
		<p class="body-serif small-caps text-center trim-cap pb-lg-4">{section.title}</p>
	{/if}

	{#each section.items ?? [] as item (item._key)}
		<MenuItem {item} />
	{/each}

	{#each section.images ?? [] as block (block._key)}
		<MenuImage {block} />
	{/each}
</div>
