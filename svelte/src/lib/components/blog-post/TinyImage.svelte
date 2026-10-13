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

<article class="flex flex-col items-center my-lg-5 page-x sm:mx-[0px]">
	<div class="sm:w-[300px] justify-items-center">
		<div class="p-xs-2">
			<div class="aspect-[3/4] w-full sm:w-[200px] overflow-hidden">
				<img class="h-full w-full object-cover" {src} {alt} />
			</div>
			{#if caption}
				<div class="pt-sm-3 w-full sm:w-[200px] small-serif text-center">
					<PortableText value={caption} components={{ marks: { smallCaps: SmallCaps } }} />
				</div>
			{/if}
		</div>
	</div>
</article>
