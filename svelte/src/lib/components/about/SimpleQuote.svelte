<script lang="ts">
	type SimpleQuoteCard = {
		quote?: string | null;
		author?: string | null;
		articleLink?: string | null;
		backgroundColor?: string | null;
		textColor?: string | null;
	};

	let { card }: { card: SimpleQuoteCard } = $props();

	const palette: Record<string, { background: string; text: string }> = {
		brown: { background: 'bg-hnih-brown', text: 'text-hnih-brown' },
		beige: { background: 'bg-hnih-beige', text: 'text-hnih-beige' },
		coolGrey: { background: 'bg-hnih-cool-grey', text: 'text-hnih-cool-grey' },
		warmGrey: { background: 'bg-hnih-warm-grey', text: 'text-hnih-warm-grey' },
		lightNavy: { background: 'bg-hnih-light-navy', text: 'text-hnih-light-navy' },
		mediumNavy: { background: 'bg-hnih-medium-navy', text: 'text-hnih-medium-navy' },
		darkNavy: { background: 'bg-hnih-dark-navy', text: 'text-hnih-dark-navy' },
		yellow: { background: 'bg-hnih-yellow', text: 'text-hnih-yellow' },
		green: { background: 'bg-hnih-green', text: 'text-hnih-green' },
		blue: { background: 'bg-hnih-blue', text: 'text-hnih-blue' }
	};

	let backgroundClass = $derived(
		palette[card.backgroundColor ?? '']?.background ?? 'bg-menu-yellow'
	);
	let textClass = $derived(palette[card.textColor ?? '']?.text ?? 'text-red-1');
</script>

<article class="w-full">
	<div
		class="aspect-[1/1] sm:aspect-[7/6] relative w-full body-serif sm:card-serif {backgroundClass} {textClass} flex flex-col items-center p-6"
	>
		<div class="my-auto text-center">
			<p class="w-[95%] sm:w-[70%] mx-auto">
				“{card.quote}”
			</p>
			{#if card.author}
				<p class="mb-4 mx-auto pt-[30px]">—{card.author}</p>
			{/if}
		</div>
		{#if card.articleLink}
			<a
				href={card.articleLink}
				class="body-serif sm:card-serif text-center underline
				decoration-[1.5px] underline-offset-6"
			>
				Read ↗
			</a>
		{/if}
	</div>
</article>
