<script lang="ts">
	import type { MENU_PAGE_QUERY_RESULT } from '$lib/sanity/sanity.types';

	type Menu = NonNullable<NonNullable<MENU_PAGE_QUERY_RESULT>['menu']>;
	type MenuSection = NonNullable<Menu['sections']>[number];
	type ContentGroup = NonNullable<MenuSection['content']>[number];
	type WineGroup = Extract<ContentGroup, { _type: 'wineSection' }>;
	type WineSubsection = NonNullable<WineGroup['subsections']>[number];
	type WineItemData = NonNullable<WineSubsection['items']>[number];

	interface Props {
		item: WineItemData;
	}

	let { item }: Props = $props();
</script>

<div class="self-center w-full sm:w-auto">
	<div
		class="grid grid-cols-[1fr_50px] px-[15px] gap-md-4 trim-cap sm:grid-cols-[300px_50px] sm:px-[0px]"
	>
		<div>
			<p class="body-serif small-caps trim-cap">{item.title}</p>

			{#if item.description}
				<p class="small-serif trim-cap pt-sm-3">{item.description}</p>
			{/if}
		</div>

		<div class="grid grid-cols-[20px_10px_20px] trim-cap">
			{#if item.glassPrice != null}
				<p
					class="body-serif tabular-nums oldstyle-nums trim-cap text-center"
					class:col-start-3={item.bottlePrice == null}
				>
					{item.glassPrice}
				</p>
			{/if}

			{#if item.glassPrice != null && item.bottlePrice != null}
				<p class="body-serif trim-cap text-center">/</p>
			{/if}

			{#if item.bottlePrice != null}
				<p
					class="body-serif tabular-nums oldstyle-nums trim-cap text-center"
					class:col-start-3={item.glassPrice == null}
				>
					{item.bottlePrice}
				</p>
			{/if}
		</div>
	</div>
</div>
