<script lang="ts">
	type Props = {
		image: string;
		title: string;
		description: string;
	};

	let { image, title, description }: Props = $props();
</script>

<article class="w-full">
	<div class="aspect-[4/5] w-full overflow-hidden border-1 border-jade-white">
		<img class="h-full w-full object-cover" src={image} alt="" />
	</div>

	<div class="flex w-[300px] flex-col">
		<p class="post-title-serif small-caps pt-sm-3 text-jade-white">{title}</p>
		<p class="small-serif pt-sm-3 text-jade-white">{description}</p>
	</div>
</article>
