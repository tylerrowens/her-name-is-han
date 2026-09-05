<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import SmallCaps from '$lib/sanity/SmallCaps.svelte';
	import type { BLOG_POST_QUERY_RESULT } from '$lib/sanity/sanity.types';
	import Media from '$lib/components/Media.svelte';

	type Post = NonNullable<BLOG_POST_QUERY_RESULT>;

	interface Props {
		post: Post;
	}

	let { post }: Props = $props();

	const categoryList = $derived(post.categories.join(', ') ?? '');
</script>

<article>
	<div class="flex flex-col my-lg-5">
		<h1 class="self-center large-serif text-center w-[600px]">{post.title}</h1>
	</div>

	<div class="flex flex-row justify-center gap-[200px] my-lg-5">
		<p class="body-serif"><span class="small-caps">By</span> {post.author}</p>
		<div>
			<p class="date-stamp mb-xs-3">
				2026 <span class="korean-date">년</span> 07 <span class="korean-date">월</span> 09
				<span class="korean-date">일</span>
			</p>
			<p class="small-serif small-caps">{categoryList}</p>
		</div>
	</div>
	<div class="flex flex-row justify-center">
		<div class="flex flex-col w-[800px]">
			<div class="aspect-[4/3] self-center overflow-hidden border-2 border-black">
				<Media media={post.mainMedia} title={post.title} />
			</div>
		</div>
	</div>

	{#if post.featuredText}
		<div class="flex flex-col my-lg-4">
			<div class="w-[440px] self-center body-serif">
				<PortableText value={post.featuredText} components={{ marks: { smallCaps: SmallCaps } }} />
			</div>
		</div>
	{/if}
</article>
