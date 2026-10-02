<script lang="ts">
	import FullbleedImage from './FullbleedImage.svelte';
	import ImageDiptique from './ImageDiptique.svelte';
	import MediumImageLandscape from './MediumImageLandscape.svelte';
	import MediumImageSquare from './MediumImageSquare.svelte';
	import SmallImageLeft from './SmallImageLeft.svelte';
	import SmallImageRight from './SmallImageRight.svelte';

	import type { MENU_PAGE_QUERY_RESULT } from '$lib/sanity/sanity.types';

	type Menu = NonNullable<NonNullable<MENU_PAGE_QUERY_RESULT>['menu']>;

	type MenuSection = NonNullable<Menu['sections']>[number];
	type ContentGroup = NonNullable<MenuSection['content']>[number];
	type ImageBlock = NonNullable<ContentGroup['images']>[number];

	interface Props {
		block: ImageBlock;
	}

	let { block }: Props = $props();
</script>
<div class="py-md-3">
{#if block._type === 'menuImage'}
	{#if block.image?.asset}
		{#if block.layout === 'fullbleed'}
			<FullbleedImage image={block.image} />
		{:else if block.layout === 'mediumLandscape'}
			<MediumImageLandscape image={block.image} />
		{:else if block.layout === 'mediumSquare'}
			<MediumImageSquare image={block.image} />
		{:else if block.layout === 'smallLeft'}
			<SmallImageLeft image={block.image} />
		{:else if block.layout === 'smallRight'}
			<SmallImageRight image={block.image} />
		{/if}
	{/if}
{:else if block._type === 'menuImageDiptych'}
	{#if block.leftImage?.asset && block.rightImage?.asset}
		<ImageDiptique 
        leftImage={block.leftImage}
        rightImage={block.rightImage}
        />
	{/if}
{/if}
</div>
