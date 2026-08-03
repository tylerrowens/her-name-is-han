<script lang="ts">
	import type { IngredientsBlockData } from '$lib/types/blog';

	interface Props {
		block: IngredientsBlockData;
	}

	let { block }: Props = $props();
</script>

<article class="flex flex-col my-lg-5">
	<p class="body-serif text-center small-caps pb-sm-3">ingredients:</p>

	{#if block.ingredients?.length}
		<ol class="w-[440px] self-center body-serif list-decimal">
			{#each block.ingredients as ingredient}
				<li>{ingredient}</li>
			{/each}
		</ol>
	{/if}
</article>
