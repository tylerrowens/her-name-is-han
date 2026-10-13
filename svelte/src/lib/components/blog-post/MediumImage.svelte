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
	<div class="w-full sm:w-[800px]">
		<div class="ml-auto w-fit">
			<div class="aspect-[4/3] w-full sm:w-[350px] overflow-hidden">
				<img class="h-full w-full object-cover" {src} {alt} />
			</div>
			{#if caption}
				<div>
					<div class="pt-sm-3 mx-auto w-full sm:w-[200px] small-serif text-center">
						<PortableText value={caption} components={{ marks: { smallCaps: SmallCaps } }} />
					</div>
				</div>
			{/if}
		</div>
	</div>
</article>
