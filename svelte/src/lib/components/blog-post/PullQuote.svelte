<script lang="ts">
	import type { PullQuoteData } from '$lib/types/blog';

	interface Props {
		block: PullQuoteData;
	}

	let { block }: Props = $props();
</script>

<article>
	<div class="flex flex-col my-xl-5">
		<p class="medium-serif text-center self-center w-[1000px]">
			{block.quote}
		</p>
	</div>
</article>
