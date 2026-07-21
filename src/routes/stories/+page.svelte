<script lang="ts">
	import type { PageData } from './$types';
	import FeaturedPosts from '$lib/components/blog-main/FeaturedPosts.svelte';
	import BlogPosts from '$lib/components/blog-main/BlogPosts.svelte';

	let { data }: { data: PageData } = $props();
</script>

<section>
<div class>
	<FeaturedPosts {...data.featuredPosts} />
</div>
<div>
	<BlogPosts {...data.blogPosts} />
</div>
</section>
