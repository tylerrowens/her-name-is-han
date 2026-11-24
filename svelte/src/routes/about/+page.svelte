<script lang="ts">
	import type { PageData } from './$types';
	import { PortableText } from '@portabletext/svelte';
	import Dialogue from '$lib/components/about/Dialogue.svelte';
	import FullQuote from '$lib/components/about/FullQuote.svelte';
	import SimpleQuote from '$lib/components/about/SimpleQuote.svelte';

	let { data }: { data: PageData } = $props();

	function scrollToSection(id: string) {
		const target = document.getElementById(id);
		if (!target) return;

		const offset = 100;
		const top = target.getBoundingClientRect().top + window.scrollY - offset;

		window.scrollTo({
			top,
			behavior: 'smooth'
		});
	}

	function cardTransform(key: string, typeIndex: number, type: string) {
		let hash = 0;

		for (const character of key) {
			hash = (Math.imul(31, hash) + character.charCodeAt(0)) >>> 0;
		}

		const tilt = 2 + (hash % 51) / 10; // 2–7°
		const x = ((hash >>> 8) % 121) - 60; // -60px to 60px
		const yJitter = ((hash >>> 16) % 81) - 40; // -40px to 40px
		const y = yJitter + (type === 'simpleQuoteCard' ? 90 : 0);
		const direction = typeIndex % 2 === 0 ? -1 : 1;

		return `translate(clamp(-5vw, ${x}px, 5vw), ${y}px) rotate(${direction * tilt}deg)`;
	}

	let cards = $derived(data.aboutPage.cards ?? []);
</script>

{#if data.aboutPage}
	<section class="page-x flex min-h-[80svh] flex-col">
		<div
			class="mx-auto grid w-full max-w-[620px] grid-cols-3 pt-[135px] nav-serif small-caps text-center gap-md-4 sm:gap-lg-6"
		>
			<button
				class="transition-colors duration-200 ease-out hover:text-ash"
				type="button"
				onclick={() => scrollToSection('our-story')}
			>
				Our Story
			</button>
			<button
				class="transition-colors duration-200 ease-out hover:text-ash"
				type="button"
				onclick={() => scrollToSection('contact')}
			>
				Contact
			</button>
			<button
				class="transition-colors duration-200 ease-out hover:text-ash"
				type="button"
				onclick={() => scrollToSection('press')}
			>
				Press
			</button>
		</div>
		<div
			class="flex flex-col pt-[95px] w-full md:max-w-[400px] mx-auto gap-[50px] scroll-mt-[150px]"
			id="our-story"
		>
			<p class="body-serif sm:card-serif small-caps text-center">
				{data.aboutPage.headline}
			</p>
			<div class="nav-serif text-left text-balance text-pretty">
				<PortableText value={data.aboutPage.story ?? []} />
			</div>
		</div>
		<div
			class="scroll-mt-[100px] flex sm:flex-row text-center gap-[50px] justify-center pt-[50px] flex-col nav-serif"
			id="contact"
		>
			<div class="flex flex-col">
				<p class="small-caps">Contact</p>
				<p class="underline underline-offset-5">hernameishan@handhospitality.com</p>
			</div>
			<div class="flex flex-col">
				<p class="small-caps">Instagram</p>
				<p class="underline underline-offset-5">@hernameishan</p>
			</div>
		</div>
	</section>

	<div class="overflow-x-clip" id="press">
		<section
			class="page-x w-full md:max-w-[1050px] mt-[135px] mx-auto
		flex flex-col gap-[200px] pb-[50px] sm:pb-[250px]"
		>
			{#each cards as card, index (card._key)}
				{@const typeIndex = cards
					.slice(0, index)
					.filter((previous: { _type: string }) => previous._type === card._type).length}
				<div class="sticky top-[120px] h-[min(650px,calc(100dvh-140px))]">
					{#if card._type === 'fullQuoteCard'}
						<div
							class="w-full md-card:w-[85%] mx-auto"
							style:transform={cardTransform(card._key, typeIndex, card._type)}
						>
							<FullQuote {card} />
						</div>
					{:else if card._type === 'simpleQuoteCard'}
						<div
							class="w-full md-card:w-[65%] md-card:mr-auto"
							style:transform={cardTransform(card._key, typeIndex, card._type)}
						>
							<SimpleQuote {card} />
						</div>
					{:else if card._type === 'dialogueCard'}
						<div
							class="w-full md-card:w-[49%] md-card:ml-auto"
							style:transform={cardTransform(card._key, typeIndex, card._type)}
						>
							<Dialogue {card} />
						</div>
					{/if}
				</div>
			{/each}
		</section>
	</div>
{/if}
