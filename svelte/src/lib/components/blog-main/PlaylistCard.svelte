<script lang="ts">
	import { urlFor } from '$lib/sanity/image';
	import { PortableText } from '@portabletext/svelte';
	import type { STORIES_PAGE_QUERY_RESULT } from '$lib/sanity/sanity.types';

	type PlaylistCardData = NonNullable<
		NonNullable<STORIES_PAGE_QUERY_RESULT>['playlistCards']
	>[number];

	let { card }: { card: PlaylistCardData } = $props();

	const palette: Partial<Record<string, { background: string; text: string }>> = {
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

	let backgroundClass = $derived(palette[card.backgroundColor ?? '']?.background ?? 'bg-web-grey');
	let textClass = $derived(palette[card.textColor ?? '']?.text ?? 'text-aegean');
</script>

<article class="w-full min-w-0 [container-type:inline-size]">
	<a target="_blank" rel="noopener noreferrer" href={card.spotifyUrl}>
		<div
			class="aspect-[3/4] md:aspect-[1/1] sm:aspect-[3/4] {backgroundClass} {textClass} relative"
		>
			<div>
				<div
					class="absolute top-[clamp(80px,50cqw,200px)] left-[10px] flex flex-col gap-[30px] sm:gap-[20px] -rotate-45 origin-top-left"
				>
					<div class="w-[270px]">
						<p class="text-[clamp(18px,12cqw,48px)] leading-[clamp(18px,12cqw,50px)]">
							{#if card.cardTitle?.length}
								<PortableText value={card.cardTitle} />
							{/if}
						</p>
					</div>
					<div
						class="origin-top-left -translate-x-[120px] sm:-translate-x-[clamp(40px,calc(31cqw_+_15px),120px)]"
					>
						<p class="pt-sm-3 body-serif small-caps trim-cap">{card.title}</p>
					</div>
				</div>
				{#if card.image?.asset?._ref}
					<div class="absolute bottom-sm-3 right-sm-3">
						<div class="aspect-[1/1] w-[clamp(100px,45cqw,200px)]">
							<img
								class="h-full w-full object-cover"
								src={urlFor(card.image).width(400).height(400).url()}
								alt=""
							/>
						</div>
					</div>
				{/if}
			</div>
		</div>
		<div>
			<p
				class="pt-sm-3 body-serif small-caps trim-cap transition-colors duration-200 ease-out hover:text-ash"
			>
				{card.title}
			</p>
			<div class="pt-md-4 small-serif leading-[.35]">
				{#if card.author}
					<p><span class="small-caps trim-cap">by</span> {card.author}</p>
				{/if}
				<p class="small-caps pt-xs-3 trim-cap">playlist</p>
			</div>
		</div>
	</a>
</article>
