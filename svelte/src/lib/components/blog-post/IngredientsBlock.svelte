<script lang="ts">
	import type { IngredientsBlockData } from '$lib/types/blog';

	interface Props {
		block: IngredientsBlockData;
	}

	let { block }: Props = $props();
</script>

<article class="flex flex-col my-lg-5 page-x">
	<p class="body-serif text-center small-caps pb-sm-3">ingredients:</p>

	{#if block.ingredients?.length}
		<ol class="w-full sm:w-[440px] self-center nav-serif">
			{#each block.ingredients as ingredient}
				<li>{ingredient}</li>
			{/each}
		</ol>
	{/if}
</article>
