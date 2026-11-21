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
</script>

{#if data.aboutPage}
	<section class="page-x">
		<div class="flex flex-row justify-center pt-[135px] nav-serif small-caps gap-md-4 sm:gap-lg-6">
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
			<div class="nav-serif text-left text-balance text-pretty [&>p+p]:mt-[1em]">
				<PortableText value={data.aboutPage.story ?? []} />
			</div>
		</div>
		<div
			class="scroll-mt-[100px] flex sm:flex-row text-center gap-[50px] justify-center pt-[50px] flex-col nav-serif"
			id="contact"
		>
			<div class="flex flex-col">
				<p class="small-caps">Contact</p>
				<p class="underline underline-offset-2">hernameishan@handhospitality.com</p>
			</div>
			<div class="flex flex-col">
				<p class="small-caps">Instagram</p>
				<p class="underline underline-offset-2">@hernameishan</p>
			</div>
		</div>
	</section>

	<div class="overflow-x-clip" id="press">
		<section class="page-x w-full md:max-w-[1050px] mt-[135px] mx-auto">
			{#each data.aboutPage.cards ?? [] as card, index (card._key)}
				{#if card._type === 'fullQuoteCard'}
					<div
						class="sticky flex justify-self-center {index % 2 === 0
							? 'rotate-[-3.69deg]'
							: 'rotate-[3.69deg]'}
			md-card:w-[85%] opacity-95 mb-[200px] w-full top-[120px]"
					>
						<FullQuote {card} />
					</div>
				{:else if card._type === 'simpleQuoteCard'}
					<div
						class="sticky flex justify-self-center md-card:justify-self-start
			{index % 2 === 0 ? 'rotate-[-1.69deg]' : 'rotate-[1.69deg]'} w-full md-card:w-[65%] opacity-95
			mb-[200px] top-[160px]"
					>
						<SimpleQuote {card} />
					</div>
				{:else if card._type === 'dialogueCard'}
					<div
						class="sticky flex justify-self-center md-card:justify-self-end
			{index % 2 === 0 ? 'rotate-[-7.84deg]' : 'rotate-[7.84deg]'} w-full md-card:w-[49%] opacity-95
			mb-[200px] top-[150px]"
					>
						<Dialogue {card} />
					</div>
				{/if}
			{/each}
		</section>
	</div>
{/if}
