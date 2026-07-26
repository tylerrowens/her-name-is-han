import { b as escape_html, y as attr } from "./server.js";
//#region src/lib/components/blog-main/FeaturedCard.svelte
function FeaturedCard($$renderer, $$props) {
	let { image, title, description } = $$props;
	$$renderer.push(`<article class="w-full"><div class="aspect-[4/5] w-full overflow-hidden border-1 border-jade-white"><img class="h-full w-full object-cover"${attr("src", image)} alt=""/></div> <div class="flex w-[300px] flex-col"><p class="post-title-serif small-caps pt-sm-3 text-jade-white">${escape_html(title)}</p> <p class="small-serif pt-sm-3 text-jade-white">${escape_html(description)}</p></div></article>`);
}
//#endregion
export { FeaturedCard as t };
