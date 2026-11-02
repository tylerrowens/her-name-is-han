<script lang="ts">
	import LargeImage from './LargeImage.svelte';
	import MediumImage from './MediumImage.svelte';
	import SmallImage from './SmallImage.svelte';
	import TinyImage from './TinyImage.svelte';

	import type { PostImageData } from '$lib/types/blog';

	interface Props {
		block: PostImageData;
	}

	let { block }: Props = $props();
</script>


{#if block.media}
	{#if block.size === 'large'}
		<LargeImage media={block.media} caption={block.caption} />
	{:else if block.size === 'medium'}
		<MediumImage media={block.media} caption={block.caption} />
	{:else if block.size === 'small'}
		<SmallImage media={block.media} caption={block.caption} />
	{:else if block.size === 'tiny'}
		<TinyImage media={block.media} caption={block.caption} />
	{/if}
{/if}
