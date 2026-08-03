<script lang="ts">
	import type { BlogPostData } from '$lib/types/blog';

	interface Props {
		credits: NonNullable<BlogPostData['credits']>;
	}

	let { credits }: Props = $props();
</script>

<article class="bg-chamgireum text-doenjang">
	<div class="flex flex-col h-[600px] w-full justify-center items-center">
		{#each credits.credits as credit (credit._key)}
			<p class="card-serif-2 text-center w-[550px]">
				{credit.creditTitle} <br />
				{credit.creditName}
			</p>
		{/each}
		<p class="card-serif-2 text-center w-[500px] mt-[25px]">
			{credits.additionalInfo}
		</p>
	</div>

	<div class="flex flex-row justify-center gap-md-3 pb-md-4">
		<p class="body-serif small-caps self-end">Stories by</p>
		<p class="nav-title-serif self-end">Her name is Han.</p>
	</div>
</article>
