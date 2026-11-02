<script lang="ts">
	import type { BlogPostData } from '$lib/types/blog';

	interface Props {
		credits: NonNullable<BlogPostData['credits']>;
	}

	let { credits }: Props = $props();
</script>

<article class="bg-chamgireum text-doenjang">
	<div class="flex flex-col h-[600px] w-full justify-center items-center page-x sm:mx-[0px] gap-md-4">
		{#each credits.credits as credit (credit._key)}
			<p class="body-serif text-center w-full sm:w-[550px]">
				{credit.creditTitle} <br />
				{credit.creditName}
			</p>
		{/each}
		<p class="body-serif text-center w-full sm:w-[500px]">
			{credits.additionalInfo}
		</p>
	</div>

	<div class="flex flex-row items-baseline justify-center gap-sm-3 sm:gap-md-3 pb-md-4">
		<p class="nav-serif sm:body-serif small-caps">Stories by</p>
		<p class="body-serif sm:card-serif">Her name is Han.</p>
	</div>
</article>
