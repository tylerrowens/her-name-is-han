<script lang="ts">
	interface MenuNavItem {
		_id: string;
		name: string | null;
		slug: string | null;
		menus:
			| {
					_id: string;
					title: string | null;
					slug: string | null;
			  }[]
			| null;
	}

	interface Props {
		menus: MenuNavItem[];
	}

	let { menus }: Props = $props();
</script>

<div class="bg-menu-nav w-dvw h-auto page-x pt-[60px] pb-[30px]">
	<div class="nav-serif trim-cap pb-[30px] small-caps">By Location</div>
	{#each menus as location (location._id)}
		{@const firstMenu = location.menus?.[0]}
		{#if location.slug && firstMenu?.slug}
			<div class="grid grid-cols-[auto_minmax(0,1fr)_auto] items-baseline pb-[20px]">
				<a
					href={`/menu/${location.slug}/${firstMenu.slug}`}
					class="nav-title-serif pr-xs-2 trim-cap transition-colors duration-200 ease-out hover:text-aegean/40"
					>{location.name}</a
				>
				<span class="dots flex-1 opacity-25"></span>
				<div class="justify-self-end pl-xs-2 nav-serif small-caps trim-cap">
					{#each location.menus ?? [] as meal, index (meal._id)}
						{#if meal.slug}
							{#if index > 0},
							{/if}
							<a href={`/menu/${location.slug}/${meal.slug}`} class="transition-colors duration-200 ease-out hover:text-aegean/40">{meal.title}</a>
						{/if}
					{/each}
				</div>
			</div>
		{/if}
	{/each}
	<div class="nav-serif trim-cap pt-[10px] w-[40dvw]">
		Inspired by the season, made for the moment. Our menu features seasonal ingredients, Korean
		comfort food, and familiar favorites.
	</div>
</div>

<style>
	.dots {
		--dot-size: 2px;
		--dot-spacing: 7px;

		height: var(--dot-size);
		background-image: radial-gradient(circle closest-side, currentColor 95%, transparent 100%);
		background-size: var(--dot-spacing) var(--dot-size);
		background-repeat: repeat-x;
	}
</style>
