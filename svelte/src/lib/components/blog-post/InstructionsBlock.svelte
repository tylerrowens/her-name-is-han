<script lang="ts">
	import type { InstructionsBlockData } from '$lib/types/blog';

	interface Props {
		block: InstructionsBlockData;
	}

	let { block }: Props = $props();
</script>

<article class="flex flex-col my-lg-5">
	<p class="body-serif text-center small-caps pb-sm-3">instructions:</p>

	{#if block.instructions?.length}
		<ol class="w-[440px] self-center body-serif list-decimal">
			{#each block.instructions as instruction}
				<li>{instruction}</li>
			{/each}
		</ol>
	{/if}
</article>
