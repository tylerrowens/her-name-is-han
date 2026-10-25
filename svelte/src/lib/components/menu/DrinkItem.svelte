<script lang="ts">
	import type { MENU_PAGE_QUERY_RESULT } from '$lib/sanity/sanity.types';

	type Menu = NonNullable<NonNullable<MENU_PAGE_QUERY_RESULT>['menu']>;

	type MenuSection = NonNullable<Menu['sections']>[number];
	type ContentGroup = NonNullable<MenuSection['content']>[number];
	type DrinkGroup = Extract<ContentGroup, { _type: 'simpleDrinkSection' }>;
	type DrinkItem = NonNullable<DrinkGroup['items']>[number];

	interface Props {
		item: DrinkItem;
	}

	let { item }: Props = $props();
</script>

<div class="self-center w-full sm:w-auto">
	<div
		class="grid grid-cols-[1fr_50px] px-[15px] gap-md-4 trim-cap sm:grid-cols-[300px_50px] sm:px-[0px]"
	>
		<div>
			<div class="flex flex-row flex-wrap items-baseline gap-xs-3">
				<p class="body-serif small-caps trim-cap">{item.title}</p>

				{#if item.koreantitle}
					<p class="font-korean trim-cap text-[10.6px] relative -top-[1.3px]">{item.koreantitle}</p>
				{/if}

				{#if item.simpleInfo}
					<p class="small-serif trim-cap small-caps trim-cap">{item.simpleInfo}</p>
				{/if}
			</div>
		</div>
		<div class="grid grid-cols-[20px_10px_20px] trim-cap">
			{#if item.singleServingPrice != null}
				<p
					class="body-serif tabular-nums oldstyle-nums trim-cap text-center"
					class:col-start-3={item.pitcherPrice == null}
				>
					{item.singleServingPrice}
				</p>
			{/if}

			{#if item.singleServingPrice != null && item.pitcherPrice != null}
				<p class="body-serif trim-cap text-center">/</p>
			{/if}

			{#if item.pitcherPrice != null}
				<p
					class="body-serif tabular-nums oldstyle-nums trim-cap text-center"
					class:col-start-3={item.singleServingPrice == null}
				>
					{item.pitcherPrice}
				</p>
			{/if}
		</div>
	</div>
</div>
