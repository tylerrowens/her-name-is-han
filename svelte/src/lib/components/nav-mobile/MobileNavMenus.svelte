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
		onNavigate: () => void;
		onBack: () => void;
	}

	let { menus, onNavigate, onBack }: Props = $props();
</script>

<section class="w-full h-full bg-menu-nav pt-[calc(50dvh-3lh-125px)] page-x body-serif">
	<div class="relative flex items-center justify-center text-center">
		<button type="button" onclick={onBack} class="absolute left-0">
			←
		</button>
		<h1 class="small-caps">Menu</h1>
	</div>
</section>
