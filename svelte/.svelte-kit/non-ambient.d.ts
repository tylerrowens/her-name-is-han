
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/about" | "/locations" | "/menu" | "/shop" | "/shop/[handle]" | "/stories" | "/stories/[slug]";
		RouteParams(): {
			"/shop/[handle]": { handle: string };
			"/stories/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { handle?: string | undefined; slug?: string | undefined };
			"/about": Record<string, never>;
			"/locations": Record<string, never>;
			"/menu": Record<string, never>;
			"/shop": { handle?: string | undefined };
			"/shop/[handle]": { handle: string };
			"/stories": { slug?: string | undefined };
			"/stories/[slug]": { slug: string }
		};
		Pathname(): "/" | "/about" | "/locations" | "/menu" | "/shop" | `/shop/${string}` & {} | "/stories" | `/stories/${string}` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/fonts/.DS_Store" | "/fonts/abcotto-regular.woff2" | "/fonts/courier-new.woff2" | "/fonts/fresco-stamp.woff2" | "/fonts/sunbatang-medium.woff2" | "/images/.DS_Store" | "/images/album-cover.webp" | "/images/article-1.jpg" | "/images/article-2.jpg" | "/images/article-3.jpg" | "/images/article-4.jpg" | "/images/article-5.jpg" | "/images/blog-header-1.gif" | "/images/blog-post-1.jpg" | "/images/blog-post-2.jpg" | "/images/blog-post-3.jpg" | "/images/blog-post-4.jpg" | "/images/blog-post-5.jpg" | "/images/blog-post-6.jpg" | "/images/conversations-1.jpg" | "/images/conversations-2.jpg" | "/images/conversations-3.jpg" | "/images/export.gif" | "/images/footer-background.jpg" | "/images/homepage-animation.mp4" | "/robots.txt" | string & {};
	}
}