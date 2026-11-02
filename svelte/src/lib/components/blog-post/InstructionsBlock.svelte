<script lang="ts">
	import type { InstructionsBlockData } from '$lib/types/blog';

	interface Props {
		block: InstructionsBlockData;
	}

	let { block }: Props = $props();
</script>

<article class="flex flex-col my-lg-5 page-x">
	<p class="body-serif text-center small-caps pb-sm-3">instructions:</p>

	{#if block.instructions?.length}
		<ol class="w-full sm:w-[440px] self-center nav-serif list-decimal pl-[1.5em]">
			{#each block.instructions as instruction}
				<li>{instruction}</li>
			{/each}
		</ol>
	{/if}
</article>
