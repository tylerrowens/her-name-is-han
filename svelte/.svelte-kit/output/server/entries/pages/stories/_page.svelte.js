import { b as escape_html, o as spread_props, r as ensure_array_like, y as attr } from "../../../chunks/server.js";
import { t as FeaturedCard } from "../../../chunks/FeaturedCard.js";
//#region src/lib/components/blog-main/FeaturedPosts.svelte
function FeaturedPosts($$renderer, $$props) {
	let { title, copyLineOne, copyLineTwo, items } = $$props;
	$$renderer.push(`<section class="bg-blue-12 pt-lg-6"><nav class="relative flex flex-row text-jade-white"><p class="absolute page-x small-caps post-title-serif">Stories</p> <div class="w-full ml-auto mx-md-3 flex flex-row medium-serif lg:mx-lg-6 justify-center items-center"><p>A Seat at Our Table</p></div></nav> <div class="grid grid-cols-1 mx-md-3 sm:grid-cols-3 gap-md-3 py-lg-6 lg:mx-xl-5"><!--[-->`);
	const each_array = ensure_array_like(items);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let item = each_array[$$index];
		FeaturedCard($$renderer, spread_props([item]));
	}
	$$renderer.push(`<!--]--></div></section>`);
}
//#endregion
//#region src/lib/components/blog-main/BlogCard.svelte
function BlogCard($$renderer, $$props) {
	let { image, title, author, tags, year, day, month } = $$props;
	$$renderer.push(`<section><div class="p-[clamp(3px,2cqw,8px)] shadow-[inset_1.5px_1.5px_7px_rgb(0_0_0_/_0.4)]"><div class="aspect-[4/3] w-full overflow-hidden"><img class="h-full w-full object-cover"${attr("src", image)} alt=""/></div></div> <div><p class="pt-sm-3 post-title-serif small-caps">${escape_html(title)}</p> <div class="pt-sm-3 pb-lg-4 small-serif"><p><span class="small-caps">by</span> ${escape_html(author)}</p> <p class="small-caps pt-xs-1">${escape_html(tags)}</p> <p class="pt-sm-3 date-stamp">${escape_html(year)} 0${escape_html(month)} 0${escape_html(day)}</p></div></div></section>`);
}
//#endregion
//#region src/lib/components/blog-main/BlogPosts.svelte
function BlogPosts($$renderer, $$props) {
	let { posts } = $$props;
	$$renderer.push(`<section><nav class="relative flex flex-row pt-sm-3 small-caps post-title-serif"><p class="absolute page-x text-blue-8">Stories</p> <div class="ml-auto mx-md-3 flex flex-row gap-[50px] lg:mx-lg-6"><p>All</p> <p>Features</p> <p>news</p> <p>Playlists</p> <p>recipes</p></div></nav> <div class="mx-md-3 grid grid-cols-1 gap-md-3 pb-[120px] pt-lg-4 sm:grid-cols-3 lg:mx-lg-6"><!--[-->`);
	const each_array = ensure_array_like(posts);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let post = each_array[$$index];
		BlogCard($$renderer, spread_props([post]));
	}
	$$renderer.push(`<!--]--></div></section>`);
}
//#endregion
//#region src/routes/stories/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		$$renderer.push(`<section><div>`);
		FeaturedPosts($$renderer, spread_props([data.featuredPosts]));
		$$renderer.push(`<!----></div> <div>`);
		BlogPosts($$renderer, spread_props([data.blogPosts]));
		$$renderer.push(`<!----></div></section>`);
	});
}
//#endregion
export { _page as default };
