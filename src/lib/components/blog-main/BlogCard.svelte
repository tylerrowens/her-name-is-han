<script lang="ts">
	import type { BlogPost } from '$lib/types/blog';

	let { image, title, author, tags, year, day, month }: BlogPost = $props();
</script>

<section>
	<div class="p-[clamp(3px,2cqw,8px)] shadow-[inset_1.5px_1.5px_7px_rgb(0_0_0_/_0.4)]">
		<div class="aspect-[4/3] w-full overflow-hidden">
			<img class="h-full w-full object-cover" src={image} alt="" />
		</div>
	</div>
	<div>
		<p class="pt-sm-3 post-title-serif small-caps">{title}</p>
		<div class="pt-sm-3 pb-lg-4 small-serif">
			<p><span class="small-caps">by</span> {author}</p>
			<p class="small-caps pt-xs-1">{tags}</p>
			<p class="pt-sm-3 date-stamp">{year} 0{month} 0{day} </p>
		</div>
	</div>
</section>
