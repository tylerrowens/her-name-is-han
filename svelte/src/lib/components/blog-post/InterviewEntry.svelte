<script lang="ts">
	import type { InterviewEntryData } from '$lib/types/blog';
	import { PortableText } from '@portabletext/svelte';
	import SmallCaps from '$lib/sanity/SmallCaps.svelte';

	interface Props {
		block: InterviewEntryData;
	}

	let { block }: Props = $props();
</script>

<article class="flex flex-col my-lg-5">
	<div class="w-[440px] self-center">
		<p class="body-serif text-center small-caps pb-sm-3">{block.speakerName}</p>
		<PortableText value={block.dialogue} />
	</div>
</article>
