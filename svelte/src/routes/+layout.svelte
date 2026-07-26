<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import '../styles/app.css';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="relative">
	<header class="page-x fixed inset-x-0 top-md-4 z-50 flex items-start justify-between">
		<a class="nav-title-serif"> Her name is Han.</a>

		<ul class="menu-serif small-caps flex gap-[70px]">
			<li><a>About</a></li>
			<li><a>Locations</a></li>
			<li><a>Menu</a></li>
			<li><a>Stories</a></li>
			<li><a>Shop</a></li>
		</ul>
	</header>
	{@render children()}
</div>

<footer>
	<Footer />
</footer>
