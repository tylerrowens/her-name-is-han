<script>
	import BlogNav from '$lib/components/blog-post/BlogNav.svelte';
	import Credits from '$lib/components/blog-post/Credits.svelte';
	import Interview from '$lib/components/blog-post/Interview.svelte';
	import LargeImage from '$lib/components/blog-post/LargeImage.svelte';
	import MediumImage from '$lib/components/blog-post/MediumImage.svelte';
	import PostHeader from '$lib/components/blog-post/PostHeader.svelte';
	import PullQuote from '$lib/components/blog-post/PullQuote.svelte';
	import SmallImage from '$lib/components/blog-post/SmallImage.svelte';
	import TinyImage from '$lib/components/blog-post/TinyImage.svelte';
	import TypeBlock from '$lib/components/blog-post/TypeBlock.svelte';
	import Diptique from '$lib/components/blog-post/Diptique.svelte';
	import Ingredients from '$lib/components/blog-post/Ingredients.svelte';
	import Instructions from '$lib/components/blog-post/Instructions.svelte';
	import FeaturedCard from '$lib/components/blog-main/FeaturedCard.svelte';
</script>

<section>
	<BlogNav />
	<PostHeader />
	<SmallImage />
	<MediumImage />
	<TypeBlock />
	<LargeImage />
	<Diptique />
	<Interview />
	<Ingredients />
	<Instructions />
	<TypeBlock />
	<PullQuote />
	<LargeImage />
	<TypeBlock />
	<TinyImage />
	<Credits />
</section>
