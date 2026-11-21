<script lang="ts">
	type FullQuoteCard = {
		source?: string | null;
		publishedDate?: string | null;
		bigQuote?: string | null;
		smallQuote?: string | null;
		articleLink?: string | null;
		backgroundColor?: string | null;
		textColor?: string | null;
	};

	let { card }: { card: FullQuoteCard } = $props();

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

	let backgroundClass = $derived(palette[card.backgroundColor ?? '']?.background ?? 'bg-white');
	let textClass = $derived(palette[card.textColor ?? '']?.text ?? 'text-celestial');

	let dateParts = $derived(card.publishedDate?.split('-'));
</script>

<article class="w-full">
	<div
		class="aspect-[4/5] sm:aspect-[7/6] flex flex-col justify-between w-full overflow-hidden {backgroundClass} {textClass} px-[20px] pt-[20px] pb-[20px]"
	>
		<div
			class="flex flex-row w-full justify-between sm:justify-center sm:gap-[50px] nav-serif sm:body-serif"
		>
			<div>
				<p class="nav-serif text-left uppercase">{card.source}</p>
			</div>
			{#if dateParts}
				<p class="relative -top-[1.9px]">
					<span class="font-['Fresco_Stamp'] font-normal sm:text-[16.5px] tracking-[1px] pr-[.5px]"
						>{dateParts[0]}</span
					><span
						class="font-['Sun_Batang_Medium'] font-medium sm:text-[13px] pr-[10px] relative -top-[1.9px]"
						>년</span
					><span class="font-['Fresco_Stamp'] font-normal sm:text-[16.5px] tracking-[1px] pr-[.5px]"
						>{dateParts[1]}</span
					><span
						class="font-['Sun_Batang_Medium'] font-medium sm:text-[13px] pr-[4.5px] relative -top-[1.9px]"
						>월</span
					><span class="font-['Fresco_Stamp'] font-normal sm:text-[16.5px] tracking-[1px] pr-[.5px]"
						>{dateParts[2]}</span
					><span class="font-['Sun_Batang_Medium'] font-medium sm:text-[13px] relative -top-[1.9px]"
						>일</span
					>
				</p>
			{/if}
		</div>

		<div class="body-serif sm:card-serif text-center sm:w-[90%] sm:mx-auto">
			<p>
				“{card.bigQuote}”
			</p>
		</div>

		<div class="nav-serif sm:flex justify-center hidden">
			<p class="sm:w-[50%]">
				“{card.smallQuote}”
			</p>
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
