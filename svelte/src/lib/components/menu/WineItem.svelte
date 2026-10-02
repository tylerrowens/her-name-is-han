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

<div class="self-center">
	<div class="grid grid-cols-[300px_50px] gap-md-4 trim-cap">
		<div>
			<p class="body-serif small-caps trim-cap">{item.title}</p>

			{#if item.description}
				<p class="small-serif trim-cap pt-sm-3">{item.description}</p>
			{/if}
		</div>

		<div class="grid grid-cols-[20px_10px_20px] trim-cap">
			<p class="body-serif tabular-nums oldstyle-nums trim-cap text-center">
				{item.glassPrice ?? ''}
			</p>
			<p class="body-serif trim-cap text-center">
				{item.glassPrice != null && item.bottlePrice != null ? '/' : ''}
			</p>
			<p class="body-serif tabular-nums oldstyle-nums trim-cap text-center">
				{item.bottlePrice ?? ''}
			</p>
		</div>
	</div>
</div>