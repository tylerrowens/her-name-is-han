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
		onBack: () => void;
	}

	let { menus, onBack }: Props = $props();
</script>

<section class="flex flex-col min-h-dvh w-full bg-menu-nav page-x body-serif">
	<div class="sticky top-0 pt-[135px] bg-menu-nav z-10 pb-md-4">
		<div class="relative flex items-center justify-center text-center">
			<button type="button" onclick={onBack} class="absolute left-0 text-[18px] trim-cap">
				←
			</button>
			<div>
				<h1 class="text-[18px] small-caps trim-cap">menu</h1>
			</div>
		</div>
		<h2 class="text-center nav-serif small-caps trim-cap pt-sm-3 underline underline-offset-5">
			By Location
		</h2>
	</div>
	<div class="flex flex-1 items-center justify-center">
		<div class="flex flex-col justify-center w-full">
			<!--REPEAT-->
			{#each menus as location (location._id)}
				{@const firstMenu = location.menus?.[0]}
				{#if location.slug && firstMenu?.slug}
					<div class="flex flex-col justify-between text-center">
						<span class="dots block w-full opacity-25"></span>
						<a href={`/menu/${location.slug}/${firstMenu.slug}`}>
							<div class="py-md-3 flex flex-col gap-sm-3">
								<h1 class="card-serif-2 trim-cap">{location.name}</h1>
								<p class="nav-serif small-caps trim-cap">17 E 31st, New York, ny 10016</p>
							</div>
						</a>
						<span class="dots block w-full opacity-25"></span>
					</div>
				{/if}
			{/each}
			<!---->
		</div>
	</div>
	<div class="flex justify-center text-center nav-serif my-md-4">
		<p class="">
			Inspired by the season, made for the moment. Our menu features seasonal ingredients, Korean
			comfort food, and familiar favorites.
		</p>
	</div>
</section>

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
