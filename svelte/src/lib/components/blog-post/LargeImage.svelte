<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { PostImageData } from '$lib/types/blog';
	import SmallCaps from '$lib/sanity/SmallCaps.svelte';

	interface Props {
		src: string;
		alt: string;
		caption: PostImageData['caption'];
	}

	let { src, alt, caption }: Props = $props();
</script>

<article class="flex flex-col my-lg-5">
	<div class="flex flex-row justify-center">
		<div class="flex flex-col w-[800px]">
			<div class="aspect-[4/3] self-center overflow-hidden">
				<img class="h-full w-full object-cover" {src} {alt} />
			</div>
			{#if caption}
				<div class="pt-sm-3 small-serif text-center">
					<PortableText value={caption} components={{ marks: { smallCaps: SmallCaps } }} />
				</div>
			{/if}
		</div>
	</div>
</article>
