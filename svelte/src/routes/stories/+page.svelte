<script lang="ts">
	import { onMount, getContext } from 'svelte';
	import { headerHeroContext, type ReportHeaderHero } from '$lib/nav/header-hero-context';
	import type { PageData } from './$types';
	import BlogCard from '$lib/components/blog-main/BlogCard.svelte';
	import PlaylistCard from '$lib/components/blog-main/PlaylistCard.svelte';
	import Swiper from 'swiper';
	import Media from '$lib/components/Media.svelte';
	import 'swiper/css';
	import 'swiper/css/bundle';
	import RecipeCard from '$lib/components/blog-main/RecipeCard.svelte';
	import type { SwiperOptions } from 'swiper/types';

	let { data }: { data: PageData } = $props();

	const reportHeaderHero = getContext<ReportHeaderHero>(headerHeroContext);
	let heroElement: HTMLDivElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry) reportHeaderHero(entry.isIntersecting);
			},
			{
				rootMargin: '-60px 0px 0px 0px',
				threshold: 0
			}
		);

		observer.observe(heroElement);

		return () => {
			observer.disconnect();
			reportHeaderHero(null);
		};
	});

	const categories = [
		{ label: 'All', value: 'all', count: data.blogPosts.length },
		{
			label: 'Features',
			value: 'feature',
			count: data.blogPosts.filter((post) => post.categories?.includes('feature')).length
		},
		{
			label: 'News',
			value: 'news',
			count: data.blogPosts.filter((post) => post.categories?.includes('news')).length
		},
		{
			label: 'Recipes',
			value: 'recipe',
			count: data.blogPosts.filter((post) => post.categories?.includes('recipe')).length
		},
		{
			label: 'Playlists',
			value: 'playlist',
			count: data.blogPosts.filter((post) => post.categories?.includes('playlist')).length
		}
	] as const;

	let selectedCategory = $state<string>('all');

	let filteredPosts = $derived(
		selectedCategory === 'all'
			? data.blogPosts
			: data.blogPosts.filter((post) => post.categories?.includes(selectedCategory))
	);

	let recipePosts = $derived(data.blogPosts.filter((post) => post.categories?.includes('recipe')));
</script>

<section class="w-full">
	<div>
		<div
			bind:this={heroElement}
			class="aspect-[3/4] sm:aspect-[5/2] w-full overflow-hidden relative"
		>
			<div
				class="absolute inset-0 z-10 flex items-center justify-center text-jade-white text-center"
			>
				<div class="text-center">
					<p class="post-title-serif trim-cap small-caps">{data.storiesPage?.englishTitle}</p>
					<p class="font-korean text-[14px] trim-cap pt-xs-3">{data.storiesPage?.koreanTitle}</p>
				</div>
			</div>
			<Media media={data.storiesPage?.topBanner ?? null} />
		</div>
	</div>

	<nav class="overflow-x-auto scrollbar-none pr-[10px]" aria-label="Story categories">
		<ul
			class="flex page-x flex-row flex-nowrap gap-md-4 justify-start sm:justify-center py-sm-3 card-serif-2"
		>
			{#each categories as category}
				<li class="shrink-0 last:pr-[15px] sm:last:pr-[0px]">
					<button
						type="button"
						class:text-ash={selectedCategory !== category.value}
						class="transition-colors duration-400 ease-out hover:text-aegean"
						onclick={() => (selectedCategory = category.value)}
					>
						{category.label}
						<span class="[font-variant-position:super]">{category.count}</span>
					</button>
				</li>
			{/each}
		</ul>
	</nav>

	<div class="bg-jade-white pb-lg-5">
		<div
			class="page-x grid grid-cols-1 gap-x-md-4 gap-y-lg-4 pt-lg-4 sm:grid-cols-3 lg:mx-lg-5 xl:mx-lg-6"
		>
			{#each filteredPosts as post (post._id)}
				<BlogCard {post} />
			{/each}
		</div>
	</div>

	<div class="bg-web-grey">
		<p class="pb-[71px] nav-title-serif text-jjokbit page-x pt-sm-3 sm:pt-lg-4">
			Han’s Playlist<br /><span class="text-ash"
				>The secret recipe for a great time shared at the table.</span
			>
		</p>
		<div class="w-full overflow-x-auto scrollbar-none">
			<div
				class="page-x grid grid-flow-col auto-cols-[90%] gap-x-sm-3 sm:gap-x-md-4
			pb-lg-5 sm:grid-flow-row sm:auto-cols-auto sm:grid-cols-3 md:grid-flow-col md:grid-cols-none md:auto-cols-[min(90%,600px)] lg:mx-lg-5 xl:mx-lg-6"
			>
				<div class=""><PlaylistCard /></div>
				<div class=""><PlaylistCard /></div>
				<div class=""><PlaylistCard /></div>
			</div>
		</div>
	</div>

	<div class="">
		<p class="pb-[71px] nav-title-serif text-jjokbit page-x pt-sm-3 sm:pt-lg-4">
			Han’s Recipes<br /><span class="text-ash">From our kitchen to yours.</span>
		</p>
		<div class="bg-jade-white w-full overflow-x-auto scrollbar-none">
			<div
				class="page-x grid grid-flow-col auto-cols-[90%] gap-x-sm-3 sm:gap-x-md-4
			pb-lg-5 sm:grid-flow-row sm:auto-cols-auto sm:grid-cols-3 lg:mx-lg-5 xl:mx-lg-6"
			>
				{#each recipePosts as post (post._id)}
					<BlogCard {post} />
				{/each}
			</div>
		</div>
	</div>
</section>
