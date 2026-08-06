<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { urlFor } from '$lib/sanity/image';
	import type { ImageDiptychData } from '$lib/types/blog';
	import SmallCaps from '$lib/sanity/SmallCaps.svelte';

	interface Props {
		block: ImageDiptychData;
	}

	let { block }: Props = $props();

	const image1Url = $derived(block.image1?.asset ? urlFor(block.image1).url() : null);

	const image2Url = $derived(block.image2?.asset ? urlFor(block.image2).url() : null);

	const image1Alt = $derived(block.image1?.alt ?? '');
	const image2Alt = $derived(block.image2?.alt ?? '');
</script>

<article class="flex flex-col my-lg-5">
	<div class="flex justify-center">
		<div class="grid w-[800px] grid-cols-2 gap-sm-3">
			<div class="aspect-[3/4] overflow-hidden">
				<img class="h-full w-auto object-cover" src={image1Url} alt={image1Alt} />
			</div>
			<div class="aspect-[3/4] overflow-hidden">
				<img class="h-full w-auto object-cover" src={image2Url} alt={image2Alt} />
			</div>
		</div>
	</div>
	{#if block.caption}
		<div class="pt-sm-3 small-serif text-center">
			<PortableText value={block.caption} components={{ marks: { smallCaps: SmallCaps } }} />
		</div>
	{/if}
</article>
