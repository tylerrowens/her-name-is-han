<script lang="ts">
	import { urlFor } from '$lib/sanity/image';
	import type { MENU_PAGE_QUERY_RESULT } from '$lib/sanity/sanity.types';

	type Menu = NonNullable<NonNullable<MENU_PAGE_QUERY_RESULT>['menu']>;

	type MenuSection = NonNullable<Menu['sections']>[number];
	type ContentGroup = NonNullable<MenuSection['content']>[number];
	type ImageBlock = NonNullable<ContentGroup['images']>[number];

	type DiptychImages = Extract<ImageBlock, { _type: 'menuImageDiptych' }>;

	type LeftImage = NonNullable<DiptychImages['leftImage']>;
	type RightImage = NonNullable<DiptychImages['rightImage']>;

	interface Props {
		leftImage: LeftImage;
		rightImage: RightImage;
	}

	let { leftImage, rightImage }: Props = $props();
</script>

{#if leftImage.asset && rightImage.asset}
	<article class="flex flex-col">
		<div class="flex justify-center">
			<div class="grid w-full sm:w-[600px] grid-cols-2 gap-xs-3 sm:gap-sm-3">
				<div>
					<div class="aspect-[3/4] overflow-hidden">
						<img
							class="h-full w-auto object-cover"
							src={urlFor(leftImage).url()}
							alt={leftImage.alt ?? ''}
						/>
					</div>
					{#if leftImage.caption}
						<div class="pt-sm-3 small-serif text-center small-caps">
							<p>{leftImage.caption}</p>
						</div>
					{/if}
				</div>
				<div>
					<div class="aspect-[3/4] overflow-hidden">
						<img
							class="h-full w-auto object-cover"
							src={urlFor(rightImage).url()}
							alt={rightImage.alt ?? ''}
						/>
					</div>
					{#if rightImage.caption}
						<div class="pt-sm-3 small-serif text-center small-caps">
							<p>{rightImage.caption}</p>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</article>
{/if}
