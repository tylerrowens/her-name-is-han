<script lang="ts">
	import '@mux/mux-player';
	import { urlFor } from '$lib/sanity/image';
	import type { MediaData } from '$lib/types/media';

	interface Props {
		media: MediaData | null;
		title?: string | null;
	}

	let { media, title = null }: Props = $props();

	const imageUrl = $derived(
		media?.mediaType === 'image' && media.image?.asset
			? urlFor(media.image).auto('format').url()
			: null
	);

	const playbackId = $derived(media?.mediaType === 'video' ? media.video?.asset?.playbackId : null);
</script>

{#if media?.mediaType === 'image' && imageUrl}
	<img class="block h-full w-full object-cover" src={imageUrl} alt={media.image?.alt ?? ''} />
{:else if media?.mediaType === 'video' && playbackId}
	<mux-player
		class="block h-full w-full [--controls:none] [--media-object-fit:cover]"
		playback-id={playbackId}
		metadata-video-id={media.video?.asset?.assetId ?? undefined}
		metadata-video-title={title ?? undefined}
		stream-type="on-demand"
		autoplay="muted"
		muted
		loop
		playsinline
		controls={false}
		aria-label={title ? `${title} video` : 'Looping video'}
	>
	</mux-player>
{/if}
