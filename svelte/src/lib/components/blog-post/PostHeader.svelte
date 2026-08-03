<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import SmallCaps from '$lib/sanity/SmallCaps.svelte';
	import { urlFor } from '$lib/sanity/image';
	import type { BLOG_POST_QUERY_RESULT } from '$lib/sanity/sanity.types';

	type Post = NonNullable<BLOG_POST_QUERY_RESULT>;

	interface Props {
		post: Post;
	}

	let { post }: Props = $props();

	const mainImageUrl = $derived(post.mainImage?.asset ? urlFor(post.mainImage).url() : null);

	const categoryList = $derived(post.categories?.join(', ' ?? ''));
</script>

<article class="mb-[50px] mb-lg-4 mt-lg-6">
	<div class="flex flex-col my-lg-4">
		<h1 class="self-center large-serif">{post.title}</h1>
	</div>

	<div class="flex flex-row justify-center gap-[200px] my-lg-4">
		<p class="body-serif"><span class="small-caps">By</span> {post.author}</p>
		<div>
			<p class="date-stamp mb-xs-3">
				2026 <span class="korean-date">년</span> 07 <span class="korean-date">월</span> 09
				<span class="korean-date">일</span>
			</p>
			<p class="legal-serif small-caps">{categoryList}</p>
		</div>
	</div>
	<div class="flex flex-row justify-center my-lg-4">
		<div class="flex flex-col w-[800px]">
			<div class="aspect-[4/3] self-center overflow-hidden border-2 border-black">
				<img
					class="h-full w-full object-cover"
					src={mainImageUrl}
					alt={post.mainImage?.alt ?? ''}
				/>
			</div>
		</div>
	</div>

	<article class="flex flex-col my-lg-4">
		<div class="w-[440px] self-center body-serif">
		<PortableText value={post.featuredText} />
		</div>
	</article>
</article>
