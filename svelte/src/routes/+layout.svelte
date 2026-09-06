<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import '../styles/app.css';
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="relative">
	<header
		class="bg-jade-white page-x sticky top-0 inset-x-0 py-sm-3 z-50 grid grid-cols-[1fr_auto_1fr] content-center"
	>
		<nav class="justify-self-start flex gap-md-3 body-serif small-caps trim-cap items-center">
			<a>Menu</a>
			<a>Locations</a>
			<a>Reservations</a>
		</nav>
		<a class="nav-title-serif justify-center"> Her name is Han.</a>
		<nav class="justify-self-end flex gap-md-3 body-serif small-caps trim-cap items-center">
			<a>About</a>
			<a>Stories</a>
			<a>Shop</a>
		</nav>
	</header>
	{@render children()}
</div>

<footer class="relative h-[350px] w-full overflow-hidden bg-aegean">
	<div
		class="page-x absolute inset-x-0 bottom-[35px] grid grid-cols-[1fr_640px] items-end gap-md-4"
	>
		<div class="text-ash">
			<p class="small-caps pb-sm-3">Connect with us</p>

			<dl class="inline-grid grid-cols-[max-content_max-content] gap-x-md-3">
				<dt>Social</dt>
				<dd>
					<a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
						Instagram
					</a>
				</dd>

				<dt>Contact</dt>
				<dd>
					<a href="mailto:hernameishan@handhospitality.com">
						hernameishan@handhospitality.com
					</a>
				</dd>
			</dl>
		</div>

		<div class="w-full justify-self-end">
			<NewsletterForm />
		</div>
	</div>
</footer>
