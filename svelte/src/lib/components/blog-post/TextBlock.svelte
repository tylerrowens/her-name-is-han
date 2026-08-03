<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { TextBlockData } from '$lib/types/blog';

	interface Props {
		block: TextBlockData;
	}

	let { block }: Props = $props();
</script>

<article class="flex flex-col my-lg-5 body-serif">
	<div class="w-[440px] self-center">
		{#if block.text}
			<PortableText value={block.text} />
		{/if}
	</div>
</article>
