<script lang="ts">
	import BlogCard from './BlogCard.svelte';
	import type { BlogPost } from '$lib/types/blog';

	type Props = { posts: readonly BlogPost[] };

	let { posts }: Props = $props();
</script>

<section>
	<nav class="relative flex flex-row pt-sm-3 small-caps post-title-serif">
		<p class="absolute page-x text-blue-8">Stories</p>
		<div class="ml-auto mx-md-3 flex flex-row gap-[50px] lg:mx-lg-6">
			<p>All</p>
			<p>Features</p>
			<p>news</p>
			<p>Playlists</p>
			<p>recipes</p>
		</div>
	</nav>
	<div class="mx-md-3 grid grid-cols-1 gap-md-3 pb-[120px] pt-lg-4 sm:grid-cols-3 lg:mx-lg-6">
		{#each posts as post}
			<BlogCard {...post} />
		{/each}
	</div>
</section>
