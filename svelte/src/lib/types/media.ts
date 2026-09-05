import type {
    SanityImageCrop,
    SanityImageDimensions,
    SanityImageHotspot
} from '$lib/sanity/sanity.types';

export interface MediaData {
    mediaType: 'image' | 'video' | null;

    image: {
        alt: string | null;
        crop: SanityImageCrop | null;
        hotspot: SanityImageHotspot | null;
        asset: {
            _id: string;
            url: string | null;
            metadata: {
                dimensions: SanityImageDimensions | null;
            } | null;
        } | null;
    } | null;

    video: {
        asset: {
            _id: string;
            assetId: string | null;
            playbackId: string | null;
            filename: string | null;
            status: string | null;
            aspectRatio: string | null;
            duration: number | null;
        } | null;
    } | null;
}