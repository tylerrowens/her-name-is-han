<script lang="ts">
	import WineItem from './WineItem.svelte';

	import type { MENU_PAGE_QUERY_RESULT } from '$lib/sanity/sanity.types';

	type Menu = NonNullable<NonNullable<MENU_PAGE_QUERY_RESULT>['menu']>;

	type MenuSection = NonNullable<Menu['sections']>[number];
	type ContentGroup = NonNullable<MenuSection['content']>[number];
	type WineGroup = Extract<ContentGroup, { _type: 'wineSection' }>;

	interface Props {
		section: WineGroup;
	}

	let { section }: Props = $props();
</script>

<div class="flex flex-col gap-md-4">
	{#if section.title}
		<p class="card-serif-2 small-caps trim-cap text-center">
			{section.title}
		</p>
	{/if}

	{#each section.subsections ?? [] as subsection, index (subsection._key)}
		<div class="self-center ">
			<div class="grid grid-cols-[300px_50px] gap-md-4 trim-cap">
				<p class="small-serif small-caps trim-cap">({subsection.title})</p>

				{#if index === 0}
					<div class="grid grid-cols-[20px_10px_20px] trim-cap">
						<p class="small-serif small-caps trim-cap text-center">g</p>
						<p class="small-serif small-caps trim-cap text-center"></p>
						<p class="small-serif small-caps trim-cap text-center">b</p>
					</div>
				{/if}
			</div>
		</div>

		{#each subsection.items ?? [] as item (item._key)}
			<WineItem {item} />
		{/each}
	{/each}
</div>
