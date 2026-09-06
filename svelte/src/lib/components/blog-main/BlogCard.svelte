<script lang="ts">
	import type { BLOG_OVERVIEW_QUERY_RESULT } from '$lib/sanity/sanity.types';
	import Media from '$lib/components/Media.svelte';

	type BlogPostSummary = BLOG_OVERVIEW_QUERY_RESULT[number];

	interface Props {
		post: BlogPostSummary;
	}

	let { post }: Props = $props();

	let formattedDate = $derived(post.publishedDate?.replaceAll('-', ' ') ?? '');

	const dateParts = $derived.by(() => {
		if (!post.publishedDate) return null;

		const [year, month, day] = post.publishedDate.split('-');

		if (!year || !month || !day) return null;

		return { year, month, day };
	});

	let formattedCategories = $derived(post.categories?.join(', '));
</script>

<section>
	<a href={`/stories/${post.slug ?? ''}`}>
		<div class="aspect-[4/3] w-full overflow-hidden">
			<Media media={post.mainMedia} title={post.title} />
		</div>

		<div>
			<p class="pt-sm-3 body-serif small-caps trim-cap transition-colors duration-200 ease-out hover:text-ash">{post.title}</p>
			<div class="pt-md-4 pb-lg-4 small-serif leading-[.35]">
				<p><span class="small-caps trim-cap">by</span> {post.author}</p>
				<p class="small-caps pt-xs-3 trim-cap">{formattedCategories}</p>
				{#if dateParts}
				<div class="pt-sm-3 trim-cap">
					<time class="date-stamp" datetime={post.publishedDate ?? undefined}>
						{dateParts.year}<span class="font-korean text-[10px]">년</span>

						{dateParts.month}<span class="font-korean">월</span>

						{dateParts.day}<span class="font-korean">일</span>
					</time>
				</div>
				{/if}
			</div>
		</div>
	</a>
</section>
