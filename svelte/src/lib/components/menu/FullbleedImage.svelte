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
	<article class="flex flex-col">
		<div class="flex flex-row justify-center">
			<div class="flex flex-col w-full">
				<div class="aspect-[4/3] w-full overflow-hidden">
					<img
						class="h-full w-full object-cover"
						src={urlFor(image).width(1600).height(1200).fit('crop').auto('format').url()}
						alt={image.alt ?? ''}
						width="1600"
						height="1200"
						loading="lazy"
					/>
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
