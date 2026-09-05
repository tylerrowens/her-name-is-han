<script lang="ts">
	import type { BLOG_OVERVIEW_QUERY_RESULT } from '$lib/sanity/sanity.types';
	import Media from '$lib/components/Media.svelte';

	type BlogPostSummary = BLOG_OVERVIEW_QUERY_RESULT[number];

	interface Props {
		post: BlogPostSummary;
	}

	let { post }: Props = $props();

	let formattedDate = $derived(post.publishedDate?.replaceAll('-', ' ') ?? '');

	let formattedCategories = $derived(post.categories?.join(', '));
</script>

<section>
	<a href={`/stories/${post.slug ?? ''}`}>
		<div class="aspect-[4/3] w-full overflow-hidden">
			<Media media={post.mainMedia} title={post.title} />
		</div>

		<div>
			<p class="pt-sm-3 post-title-serif small-caps">{post.title}</p>
			<div class="pt-sm-3 pb-lg-4 small-serif">
				<p><span class="small-caps">by</span> {post.author}</p>
				<p class="small-caps pt-xs-1">{formattedCategories}</p>
				<time class="pt-sm-3 date-stamp" datetime={post.publishedDate ?? undefined}
					>{formattedDate}</time
				>
			</div>
		</div>
	</a>
</section>
