<script lang="ts">
	import type { MENU_PAGE_QUERY_RESULT } from '$lib/sanity/sanity.types';

	type Menu = NonNullable<NonNullable<MENU_PAGE_QUERY_RESULT>['menu']>;

	type MenuSection = NonNullable<Menu['sections']>[number];
	type ContentGroup = NonNullable<MenuSection['content']>[number];
	type FoodGroup = Extract<ContentGroup, { _type: 'foodSection' }>;
	type FoodItem = NonNullable<FoodGroup['items']>[number];

	interface Props {
		item: FoodItem;
	}

	let { item }: Props = $props();
</script>

<div class="self-center pb-md-4">
	<div class="grid grid-cols-2 grid-cols-[300px_50px] gap-md-4 trim-cap">
		<div>
			<div class="flex flex-row flex-wrap items-baseline gap-xs-3">
				<p class="body-serif small-caps trim-cap">{item.title}</p>

				{#if item.koreantitle}
					<p class="font-korean trim-cap text-[11px]">{item.koreantitle}</p>
				{/if}
			</div>
			{#if item.description}
				<p class="small-serif trim-cap pt-sm-3">{item.description}</p>
			{/if}
		</div>
		<div>
			{#if item.price != null}
				<p class="body-serif tabular-nums oldstyle-nums trim-cap text-right">{item.price}</p>
			{/if}
		</div>
	</div>
	{#each item.addons ?? [] as addon (addon._key)}
		<div class="grid grid-cols-2 grid-cols-[300px_50px] gap-md-4 trim-cap">
			<div>
				<p class="body-serif small-caps trim-cap pt-sm-3 pl-md-4">{addon.title}</p>
			</div>
			<div>
				{#if addon.price != null}
					<p class="body-serif tabular-nums oldstyle-nums trim-cap pt-sm-3 text-right">
						{addon.price}
					</p>
				{/if}
			</div>
		</div>
	{/each}
</div>
