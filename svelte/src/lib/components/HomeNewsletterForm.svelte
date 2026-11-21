<script lang="ts">
	import { urlFor } from '$lib/sanity/image';

	type Color =
		| 'brown'
		| 'beige'
		| 'coolGrey'
		| 'warmGrey'
		| 'lightNavy'
		| 'mediumNavy'
		| 'darkNavy'
		| 'yellow'
		| 'green'
		| 'blue';

	type NewsletterCard = {
		headline: string;
		backgroundColor: Color;
		textColor: Color;
		image: Parameters<typeof urlFor>[0] | null;
	};

	let { card }: { card: NewsletterCard } = $props();

	// Match these utility names to the colors defined in your Tailwind setup.
	const backgroundClasses: Record<Color, string> = {
		brown: 'bg-hnih-brown/60',
		beige: 'bg-hnih-beige/60',
		coolGrey: 'bg-hnih-cool-grey/60',
		warmGrey: 'bg-hnih-warm-grey/60',
		lightNavy: 'bg-hnih-light-navy/60',
		mediumNavy: 'bg-hnih-medium-navy/60',
		darkNavy: 'bg-hnih-dark-navy/60',
		yellow: 'bg-hnih-yellow/60',
		green: 'bg-hnih-green/60',
		blue: 'bg-hnih-blue/60'
	};

	const textClasses: Record<Color, string> = {
		brown: 'text-hnih-brown',
		beige: 'text-hnih-beige',
		coolGrey: 'text-hnih-cool-grey',
		warmGrey: 'text-hnih-warm-grey',
		lightNavy: 'text-hnih-light-navy',
		mediumNavy: 'text-hnih-medium-navy',
		darkNavy: 'text-hnih-dark-navy',
		yellow: 'text-hnih-yellow',
		green: 'text-hnih-green',
		blue: 'text-hnih-blue'
	};

	let backgroundClass = $derived(backgroundClasses[card.backgroundColor]);
	let textClass = $derived(textClasses[card.textColor]);

	let message = $state('');
	let subscribed = $state(false);

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		const formElement = event.currentTarget;
		if (!(formElement instanceof HTMLFormElement)) return;

		try {
			const response = await fetch('/api/newsletter', {
				method: 'POST',
				body: new FormData(formElement)
			});

			const result = await response.json();
			message = result.message;
			subscribed = response.ok;

			if (subscribed) formElement.reset();

			if (response.ok) formElement.reset();
		} catch {
			message = 'Couldn’t submit your signup. Please try again.';
		}
	}
</script>

<section
	class="flex aspect-[4/2] md-card:aspect-[1/1] w-85 md-card:w-[280px] flex-col
	p-sm-3 {backgroundClass} {textClass}"
	aria-labelledby="newsletter-heading"
>
	{#if card.image}
		<img
			src={urlFor(card.image).width(800).url()}
			alt=""
			class="hidden md-card:block sm:aspect-[16/9] w-full object-cover"
		/>
	{/if}

	<h2 id="newsletter-heading" class="body-serif trim-cap mt-sm-3">
		{card.headline}
	</h2>

	<form class="mt-auto w-full" method="POST" action="/api/newsletter" onsubmit={handleSubmit}>
		<input type="hidden" name="source" value="home" />

		<div class="flex items-end border-b border-aegean">
			<p role="status" class:sr-only={subscribed || !message}>{message}</p>
			<input
				id="home-newsletter-email"
				class="text-[15px] small-caps min-w-0 flex-1 appearance-none border-0
				ring-0 bg-transparent px-0 py-xs-2 outline-none placeholder:text-ash"
				name="email"
				type="email"
				placeholder={subscribed ? message : 'Email'}
				autocomplete="email"
				inputmode="email"
				required
			/>
			<button class="text-[15px] small-caps shrink-0 py-xs-2" type="submit"> ( Submit ) </button>
		</div>
		<p role="status" class={subscribed || !message ? 'sr-only' : 'pt-xs-3 small-serif'}>
			{message}
		</p>
	</form>
</section>
