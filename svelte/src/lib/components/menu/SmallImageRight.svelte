<script lang="ts">
	import { urlFor } from '$lib/sanity/image';
	import type { MENU_PAGE_QUERY_RESULT } from '$lib/sanity/sanity.types';

	type Menu = NonNullable<NonNullable<MENU_PAGE_QUERY_RESULT>['menu']>;

	type MenuSection = NonNullable<Menu['sections']>[number];
	type ContentGroup = NonNullable<MenuSection['content']>[number];
	type ImageBlock = NonNullable<ContentGroup['images']>[number];

	type SingleImageBlock = Extract<ImageBlock, { _type: 'menuImage' }>;

	type MenuPhoto = NonNullable<SingleImageBlock['image']>;

	interface Props {
		image: MenuPhoto;
	}

	let { image }: Props = $props();
</script>

{#if image.asset}
	<article class="flex flex-col items-center">
		<div class="w-full px-[15px] sm:w-[calc(350px_+_var(--spacing-md-4))] sm:px-[0px]">
			<div class="w-fit">
				<div class="aspect-[4/3] w-[200px] overflow-hidden">
					<img class="h-full w-full object-cover" src={urlFor(image).url()} alt={image.alt ?? ''} />
				</div>

				{#if image.caption}
					<div class="pt-sm-3 small-serif text-center small-caps">
						<p>{image.caption}</p>
					</div>
				{/if}
			</div>
		</div>
	</article>
{/if}
