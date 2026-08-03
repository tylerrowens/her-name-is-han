<script lang="ts">
	import LargeImage from './LargeImage.svelte';
	import MediumImage from './MediumImage.svelte';
	import SmallImage from './SmallImage.svelte';
	import TinyImage from './TinyImage.svelte';

	import { urlFor } from '$lib/sanity/image';
	import type { PostImageData } from '$lib/types/blog';

	interface Props {
		block: PostImageData;
	}

	let { block }: Props = $props();

	const imageUrl = $derived(block.image ? urlFor(block.image).url() : null);
	const alt = $derived(block.image?.alt ?? '');
</script>

{#if imageUrl}
	{#if block.size === 'large'}
		<LargeImage src={imageUrl} alt={block.image?.alt ?? ''} caption={block.caption} />
	{:else if block.size === 'medium'}
		<MediumImage src={imageUrl} alt={block.image?.alt ?? ''} caption={block.caption} />
	{:else if block.size === 'small'}
		<SmallImage src={imageUrl} alt={block.image?.alt ?? ''} caption={block.caption} />
	{:else if block.size === 'tiny'}
		<TinyImage src={imageUrl} alt={block.image?.alt ?? ''} caption={block.caption} />
	{/if}
{/if}
