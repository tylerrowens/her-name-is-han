<script lang="ts">
	import './layout.css';
	import '../styles/app.css';
	import favicon from '$lib/assets/favicon.svg';
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';
	import { onNavigate } from '$app/navigation';
	import type { Snippet } from 'svelte';

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise<void>((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<header
	class="page-x fixed top-0 inset-x-0 py-sm-3 z-50 grid grid-cols-[1fr_auto_1fr] content-center"
>
	<nav class="justify-self-start flex gap-md-3 body-serif small-caps trim-cap items-center">
		<a>Menu</a>
		<a>Locations</a>
		<a>Reservations <span>&#x2197;</span></a>
	</nav>
	<a class="nav-title-serif justify-center"> Her name is Han.</a>
	<nav class="justify-self-end flex gap-md-3 body-serif small-caps trim-cap items-center">
		<a>About</a>
		<a>Stories</a>
		<a>Shop</a>
	</nav>
</header>
{@render children()}
<footer class="relative h-[350px] w-full overflow-hidden bg-aegean">
	<div
		class="ml-md-3 mr-md-3 lg:ml-lg-6 absolute inset-x-0 bottom-[35px] grid grid-cols-[1fr_640px] items-end gap-md-4"
	>
		<div class="text-ash body-serif">
			<p class="small-caps pb-sm-3">Connect with us</p>

			<dl class="inline-grid grid-cols-[max-content_max-content] gap-x-md-3">
				<dt class="small-caps">Social</dt>
				<dd>
					<a
						class="transition-colors duration-200 ease-out hover:text-jade-white"
						href="https://www.instagram.com/"
						target="_blank"
						rel="noreferrer"
					>
						Instagram <span>&#x2197;</span>
					</a>
				</dd>

				<dt class="small-caps">Contact</dt>
				<dd>
					<a
						class="transition-colors duration-200 ease-out hover:text-jade-white"
						href="mailto:hernameishan@handhospitality.com"
					>
						hernameishan@handhospitality.com <span>&#x2197;</span>
					</a>
				</dd>
			</dl>
		</div>

		<div class="w-full justify-self-end">
			<NewsletterForm />
		</div>
	</div>
</footer>
