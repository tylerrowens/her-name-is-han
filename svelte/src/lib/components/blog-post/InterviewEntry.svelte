<script lang="ts">
	import type { InterviewEntryData } from '$lib/types/blog';
	import { PortableText } from '@portabletext/svelte';

	interface Props {
		block: InterviewEntryData;
	}

	let { block }: Props = $props();
</script>

<article class="flex flex-col my-lg-5">
	<div class="w-[440px] self-center">
		<p class="body-serif text-center small-caps pb-sm-3">{block.speakerName}</p>
		<p class="body-serif">
			<PortableText value={block.dialogue} />
		</p>
	</div>
</article>
