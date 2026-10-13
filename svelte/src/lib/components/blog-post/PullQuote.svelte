<script lang="ts">
	import type { PullQuoteData } from '$lib/types/blog';

	interface Props {
		block: PullQuoteData;
	}

	let { block }: Props = $props();
</script>

<article>
	<div class="flex flex-col my-xl-5 page-x sm:mx-[0px]">
		<p class="card-serif-2 sm:about-card-serif text-center self-center w-full sm:w-[800px]">
			“{block.quote}”
		</p>
	</div>
</article>
