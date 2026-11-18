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

	let formattedDate = $derived(post.publishedDate?.replaceAll('-', ' ') ?? '');

	const dateParts = $derived.by(() => {
		if (!post.publishedDate) return null;

		const [year, month, day] = post.publishedDate.split('-');

		if (!year || !month || !day) return null;

		return { year, month, day };
	});

	const categoryList = $derived(post.categories.join(', ') ?? '');
</script>

<article class="page-x sm:mx-[0px]">
	<div class="flex flex-col my-lg-5">
		<h1 class="self-center about-card-serif sm:large-serif text-center w-full sm:w-[700px] text-balance">
			{post.title}
		</h1>
	</div>

	<div
		class="flex flex-col text-center sm:text-left sm:flex-row justify-center gap-xs-3 sm:gap-[200px] my-lg-5"
	>
		<p class="nav-serif sm:body-serif"><span class="small-caps">By</span> {post.author}</p>
		<div>
			{#if dateParts}
				<p class="trim-cap">
					<time datetime={post.publishedDate ?? undefined}>
						<span class="font-['Fresco_Stamp'] font-normal text-[13.5px] tracking-[1px] pr-[.5px]"
							>{dateParts.year}
						</span><span
							class="font-['Sun_Batang_Medium'] font-medium text-[10.5px] pr-[10px] relative -top-[1.3px]"
							>년</span
						><span class="font-['Fresco_Stamp'] font-normal text-[13.5px] tracking-[1px] pr-[.5px]"
							>{dateParts.month}
						</span><span
							class="font-['Sun_Batang_Medium'] font-medium text-[10.5px] pr-[4.5px] relative -top-[1.3px]"
							>월</span
						><span class="font-['Fresco_Stamp'] font-normal text-[13.5px] tracking-[1px] pr-[.5px]"
							>{dateParts.day}
						</span><span
							class="font-['Sun_Batang_Medium'] font-medium text-[10.5px] relative -top-[1.3px]"
							>일</span
						>
					</time>
				</p>
			{/if}
			<p class="hidden sm:block small-serif small-caps">{categoryList}</p>
		</div>
	</div>
	<div class="flex flex-row justify-center">
		<div class="flex flex-col w-full sm:w-[800px]">
			<div class="aspect-[4/3] w-full self-center overflow-hidden">
				<Media media={post.mainMedia} title={post.title} />
			</div>
		</div>
	</div>

	{#if post.featuredText}
		<div class="flex flex-col my-lg-4">
			<div class="w-full sm:w-[440px] self-center nav-serif text-pretty">
				<PortableText value={post.featuredText} components={{ marks: { smallCaps: SmallCaps } }} />
			</div>
		</div>
	{/if}
</article>
