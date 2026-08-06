<script lang="ts">
	import type { PageProps } from './$types';

	import TextBlock from '$lib/components/blog-post/TextBlock.svelte';
	import PostImage from '$lib/components/blog-post/PostImage.svelte';
	import ImageDiptique from '$lib/components/blog-post/ImageDiptique.svelte';
	import PullQuote from '$lib/components/blog-post/PullQuote.svelte';
	import InterviewEntry from '$lib/components/blog-post/InterviewEntry.svelte';
	import IngredientsBlock from '$lib/components/blog-post/IngredientsBlock.svelte';
	import InstructionsBlock from '$lib/components/blog-post/InstructionsBlock.svelte';
	import PostHeader from '$lib/components/blog-post/PostHeader.svelte';
	import Credits from '$lib/components/blog-post/Credits.svelte';
	import BlogNav from '$lib/components/blog-post/BlogNav.svelte';

	let { data }: PageProps = $props();
</script>

<section class="mt-lg-6">
	<PostHeader post={data.post} />

	{#each data.post.content ?? [] as block (block._key)}
		{#if block._type === 'textBlock'}
			<TextBlock {block} />
		{:else if block._type === 'postImage'}
			<PostImage {block} />
		{:else if block._type === 'imageDiptych'}
			<ImageDiptique {block} />
		{:else if block._type === 'pullQuote'}
			<PullQuote {block} />
		{:else if block._type === 'interviewEntry'}
			<InterviewEntry {block} />
		{:else if block._type === 'ingredientsBlock'}
			<IngredientsBlock {block} />
		{:else if block._type === 'instructionsBlock'}
			<InstructionsBlock {block} />
		{/if}
	{/each}

	<Credits credits={data.post.credits} />
</section>
