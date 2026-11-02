<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { PostImageData } from '$lib/types/blog';
	import SmallCaps from '$lib/sanity/SmallCaps.svelte';
	import Media from '$lib/components/Media.svelte';

	interface Props {
		media: PostImageData['media'];
		caption: PostImageData['caption'];
	}

	let { media, caption }: Props = $props();
</script>

<article class="flex flex-col items-center my-lg-5 page-x sm:mx-[0px]">
	<div class="w-full sm:w-[800px]">
		<div class="w-fit">
			<div class="aspect-[4/3] w-full sm:w-[200px] overflow-hidden">
				<Media {media} />
			</div>
			{#if caption}
				<div class="pt-sm-3 w-full sm:w-[200px] small-serif text-center">
					<PortableText value={caption} components={{ marks: { smallCaps: SmallCaps } }} />
				</div>
			{/if}
		</div>
	</div>
</article>
