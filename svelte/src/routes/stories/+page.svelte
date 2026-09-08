<script lang="ts">
	import { onMount } from 'svelte';
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

	let playlistCarousel: HTMLDivElement;
	let recipeCarousel: HTMLDivElement;

	const swiperOptions = {
		cssMode: true,
		slidesPerView: 'auto',
		spaceBetween: 15,
		slidesOffsetAfter: 15,
		slidesOffsetBefore: 22,
		mousewheel: true,
		breakpoints: {
			1300: {
				slidesPerView: 3,
				slidesOffsetBefore: 170
			}
		}
	} satisfies SwiperOptions;

	onMount(() => {
		const playlistSwiper = new Swiper(playlistCarousel, swiperOptions);
		const recipeSwiper = new Swiper(recipeCarousel, swiperOptions);

		return () => {
			playlistSwiper.destroy(true, true);
			recipeSwiper.destroy(true, true);
		};
	});
</script>

<section class="">
	<div class="bg-chamgireum">
		<div class="aspect-[5/2] w-full overflow-hidden relative">
			<div
				class="absolute inset-0 z-10 flex items-center justify-center text-jade-white text-center small-caps"
			>
				<div class="text-center">
					<p class="post-title-serif trim-cap">{data.storiesPage?.englishTitle}</p>
					<p class="font-korean text-[20px] trim-cap pt-xs-3">{data.storiesPage?.koreanTitle}</p>
				</div>
			</div>
			<Media media={data.storiesPage?.topBanner ?? null} />
		</div>
	</div>

	<nav class="bg-white">
		<ul class="flex flex-row gap-md-4 justify-center py-sm-3 card-serif-2">
			{#each categories as category}
				<li>
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

	<div class="bg-jade-white">
		<div
			class=" mx-md-3 grid grid-cols-1 gap-x-md-4 pb-[calc(var(--spacing-lg-6)_-_var(--spacing-lg-4))] pt-lg-4 sm:grid-cols-3 lg:mx-lg-6"
		>
			{#each filteredPosts as post (post._id)}
				<BlogCard {post} />
			{/each}
		</div>
	</div>

	<div class="pb-[calc(var(--spacing-lg-6)_-_var(--spacing-lg-4))]">
		<p class="pb-lg-5 nav-title-serif text-jjokbit ml-md-3 lg:ml-lg-6">Han’s Playlist<br/><span class="text-ash">The secret recipe for a great time shared at the table.</span></p>
		<div bind:this={playlistCarousel} class="swiper flex items-center">
			<div class="swiper-wrapper">
				<div class="swiper-slide !w-[460px]"><PlaylistCard /></div>
				<div class="swiper-slide !w-[460px]"><PlaylistCard /></div>
				<div class="swiper-slide !w-[460px]"><PlaylistCard /></div>
				<div class="swiper-slide !w-[460px]"><PlaylistCard /></div>
				<div class="swiper-slide !w-[460px]"><PlaylistCard /></div>
				<div class="swiper-slide !w-[460px]"><PlaylistCard /></div>
			</div>
		</div>
	</div>

	<div class="pb-[calc(var(--spacing-lg-6)_-_var(--spacing-lg-4))]">
		<p class="pb-lg-5 nav-title-serif text-jjokbit ml-md-3 lg:ml-lg-6">Han’s Recipes<br/><span class="text-ash">From our kitchen to yours.</span></p>
		<div bind:this={recipeCarousel} class="swiper flex items-center">
			<div class="swiper-wrapper">
				<div class="swiper-slide !w-[460px]"><RecipeCard /></div>
				<div class="swiper-slide !w-[460px]"><RecipeCard /></div>
				<div class="swiper-slide !w-[460px]"><RecipeCard /></div>
				<div class="swiper-slide !w-[460px]"><RecipeCard /></div>
				<div class="swiper-slide !w-[460px]"><RecipeCard /></div>
				<div class="swiper-slide !w-[460px]"><RecipeCard /></div>
			</div>
		</div>
	</div>
</section>

<style>
	.swiper {
		width: 100%;
	}

	.swiper-slide {
		font-size: 18px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
