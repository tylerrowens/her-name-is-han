<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { PostImageData } from '$lib/types/blog';

	interface Props {
		src: string;
		alt: string;
		caption: PostImageData['caption'];
	}

	let { src, alt, caption }: Props = $props();
</script>

<article class="flex flex-col items-center my-lg-5">
	<div class="w-[800px]">
		<div class="w-fit p-xs-2 shadow-[inset_1.5px_1.5px_7px_rgb(0_0_0_/_0.4)]">
			<div class="aspect-[4/3] w-[200px] overflow-hidden">
				<img class="h-full w-full object-cover" {src} {alt} />
			</div>
		</div>
		{#if caption}
			<div class="w-[250px] translate-x-[100px] pt-sm-3 small-serif text-justify">
				<PortableText value={caption} />
			</div>
		{/if}
	</div>
</article>
