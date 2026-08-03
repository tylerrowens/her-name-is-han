import "../../../../chunks/server.js";
import "../../../../chunks/FeaturedCard.js";
//#region src/lib/components/blog-post/BlogNav.svelte
function BlogNav($$renderer) {
	$$renderer.push(`<nav class="grid grid-cols-3 mt-lg-5 mb-lg-4 px-[247.3px]"><div class="justify-self-start"><p class="menu-serif small-caps">Previous page</p></div> <div class="justify-self-center"><img class="w-[110px]" src="/images/blog-header-1.gif"/></div> <div class="justify-self-end"><p class="menu-serif small-caps">Next page</p></div></nav>`);
}
//#endregion
//#region src/lib/components/blog-post/Credits.svelte
function Credits($$renderer) {
	$$renderer.push(`<article class="bg-chamgireum text-doenjang"><div class="flex flex-col h-[600px] w-full justify-center items-center"><p class="card-serif-2 text-center w-[550px]">Photography and Interviews <br/> Kenneth Lam</p> <p class="card-serif-2 text-center w-[500px] mt-[25px]">A Seat At Our Table is on view from 9 March – 12 October 2024 at SPACE Ilford, 10 Oakfield Rd,
			IG1 1ZJ</p></div> <div class="flex flex-row justify-center gap-md-3 pb-md-4"><p class="body-serif small-caps self-end">Stories by</p> <p class="nav-title-serif self-end">Her name is Han.</p></div></article>`);
}
//#endregion
//#region src/lib/components/blog-post/Interview.svelte
function Interview($$renderer) {
	$$renderer.push(`<article class="flex flex-col my-lg-5"><div class="w-[440px] self-center"><p class="body-serif text-center small-caps pb-sm-3">Her Name Is Han:</p> <p class="body-serif">Immigrant children are often working from a young age. My first ever job was setting the
			tables at my parent’s restaurant. I would clean chopsticks and wipe down menus. At 15, I
			illegally worked the bar. I witnessed food as a means for livelihood but also as a way of
			education. Living above (and essentially in) the restaurant, my understanding of food became
			political, historical and emotional.</p></div></article>`);
}
//#endregion
//#region src/lib/components/blog-post/LargeImage.svelte
function LargeImage($$renderer) {
	$$renderer.push(`<article class="flex flex-col my-lg-5"><div class="flex flex-row justify-center"><div class="flex flex-col w-[800px]"><div class="aspect-[4/3] self-center overflow-hidden"><img class="h-full w-full object-cover" src="/images/blog-post-1.jpg"/></div></div></div></article>`);
}
//#endregion
//#region src/lib/components/blog-post/MediumImage.svelte
function MediumImage($$renderer) {
	$$renderer.push(`<article class="flex flex-col items-center my-lg-5"><div class="w-[800px]"><div class="ml-auto w-fit p-xs-2 shadow-[inset_1.5px_1.5px_7px_rgb(0_0_0_/_0.4)]"><div class="aspect-[4/3] w-[350px] overflow-hidden"><img class="h-full w-full object-cover" src="/images/article-2.jpg" alt=""/></div></div> <div class="w-[250px] ml-auto pt-sm-3"><p class="legal-serif text-justify">Nitesh: “Food is a common language, I’d watch my mum cook and I learnt from her. The woman
				would prepare food on the floor and we would prepare dishes on the kitchen table.”</p></div></div></article>`);
}
//#endregion
//#region src/lib/components/blog-post/PostHeader.svelte
function PostHeader($$renderer) {
	$$renderer.push(`<article class="mb-[50px] my-lg-4"><div class="flex flex-col my-lg-4"><h1 class="self-center large-serif">A Seat at Our Table</h1></div> <div class="flex flex-row justify-center gap-[200px] my-lg-4"><p class="body-serif"><span class="small-caps">By</span> Kenneth Lam</p> <div><p class="date-stamp mb-xs-3">2026 <span class="korean-date">년</span> 07 <span class="korean-date">월</span> 09 <span class="korean-date">일</span></p> <p class="legal-serif small-caps">Event,Photo Series</p></div></div> <div class="flex flex-row justify-center my-lg-4"><div class="flex flex-col w-[800px]"><div class="aspect-[4/3] self-center overflow-hidden border-2 border-black"><img class="h-full w-full object-cover" src="/images/blog-post-1.jpg"/></div></div></div> <article class="flex flex-col my-lg-4"><div class="w-[440px] self-center"><p class="body-serif">Immigrant children are often working from a young age. My first ever job was setting the
				tables at my parent’s restaurant. I would clean chopsticks and wipe down menus. At 15, I
				illegally worked the bar. I witnessed food as a means for livelihood but also as a way of
				education. Living above (and essentially in) the restaurant, my understanding of food became
				political, historical and emotional.</p></div></article></article>`);
}
//#endregion
//#region src/lib/components/blog-post/PullQuote.svelte
function PullQuote($$renderer) {
	$$renderer.push(`<article><div class="flex flex-col my-xl-6"><p class="medium-serif text-center self-center w-[1000px]">“I witnessed food as a means for livelihood but also as a way of education. Living above (and
			essentially in) the restaurant, my understanding of food became political, historical and
			emotional.”</p></div></article>`);
}
//#endregion
//#region src/lib/components/blog-post/SmallImage.svelte
function SmallImage($$renderer) {
	$$renderer.push(`<article class="flex flex-col items-center mt-lg-5 mb-xl-5"><div class="w-[800px]"><div class="w-fit p-xs-2 shadow-[inset_1.5px_1.5px_7px_rgb(0_0_0_/_0.4)]"><div class="aspect-[4/3] w-[200px] overflow-hidden"><img class="h-full w-full object-cover" src="/images/article-1.jpg" alt=""/></div></div> <div class="w-[250px] translate-x-[100px] pt-sm-3"><p class="legal-serif text-justify">Nitesh: “Food is a common language, I’d watch my mum cook and I learnt from her. The woman
				would prepare food on the floor and we would prepare dishes on the kitchen table.”</p></div></div></article> <div class="flex flex-row justify-center my-lg-4"><div class="flex flex-col w-[800px]"></div></div>`);
}
//#endregion
//#region src/lib/components/blog-post/TinyImage.svelte
function TinyImage($$renderer) {
	$$renderer.push(`<article class="flex flex-col items-center my-lg-5"><div class="w-[300px] justify-items-center"><div class="p-xs-2 shadow-[inset_1.5px_1.5px_7px_rgb(0_0_0_/_0.4)]"><div class="aspect-[3/4] w-[150px] overflow-hidden"><img class="h-full w-full object-cover" src="/images/article-5.jpg" alt=""/></div></div> <div class="pt-sm-3"><p class="small-serif small-caps text-center">Vio’s daughter</p></div></div></article>`);
}
//#endregion
//#region src/lib/components/blog-post/TypeBlock.svelte
function TypeBlock($$renderer) {
	$$renderer.push(`<article class="flex flex-col my-lg-5"><div class="w-[440px] self-center"><p class="body-serif">Immigrant children are often working from a young age. My first ever job was setting the
			tables at my parent’s restaurant. I would clean chopsticks and wipe down menus. At 15, I
			illegally worked the bar. I witnessed food as a means for livelihood but also as a way of
			education. Living above (and essentially in) the restaurant, my understanding of food became
			political, historical and emotional.</p></div></article>`);
}
//#endregion
//#region src/lib/components/blog-post/Diptique.svelte
function Diptique($$renderer) {
	$$renderer.push(`<article class="flex flex-col my-lg-5"><div class="flex justify-center"><div class="grid w-[800px] grid-cols-2 gap-sm-3"><div class="aspect-[3/4] overflow-hidden"><img class="h-full w-auto object-cover" src="/images/blog-post-1.jpg"/></div> <div class="aspect-[3/4] overflow-hidden"><img class="h-full w-auto object-cover" src="/images/blog-post-1.jpg"/></div></div></div></article>`);
}
//#endregion
//#region src/lib/components/blog-post/Ingredients.svelte
function Ingredients($$renderer) {
	$$renderer.push(`<article class="flex flex-col my-lg-5"><p class="body-serif text-center small-caps pb-sm-3">You will need:</p> <div class="flex justify-center"><div class="grid w-[440px] grid-cols-2 gap-sm-3"><div><p>120 g Barley</p> <p>60 g Radish sauce</p> <p>35 g Paprika</p> <p>1 g Black sesame powder</p></div> <div><p>120 g Barley</p> <p>60 g Radish sauce</p> <p>35 g Paprika</p> <p>1 g Black sesame powder</p></div></div></div></article>`);
}
//#endregion
//#region src/lib/components/blog-post/Instructions.svelte
function Instructions($$renderer) {
	$$renderer.push(`<article class="flex flex-col my-lg-5"><p class="body-serif text-center small-caps pb-sm-3">instructions:</p> <div class="w-[440px] self-center body-serif"><p>1. Add salt to water and boil barley for 35 minutes.</p> <p>2. Peel the paprika and slice it.</p> <p>3. Add cooked barley, paprika, and sauce and mix.</p> <p>4. Serve and enjoy!</p></div></article>`);
}
//#endregion
//#region src/routes/stories/[slug]/+page.svelte
function _page($$renderer) {
	$$renderer.push(`<section>`);
	BlogNav($$renderer, {});
	$$renderer.push(`<!----> `);
	PostHeader($$renderer, {});
	$$renderer.push(`<!----> `);
	SmallImage($$renderer, {});
	$$renderer.push(`<!----> `);
	MediumImage($$renderer, {});
	$$renderer.push(`<!----> `);
	TypeBlock($$renderer, {});
	$$renderer.push(`<!----> `);
	LargeImage($$renderer, {});
	$$renderer.push(`<!----> `);
	Diptique($$renderer, {});
	$$renderer.push(`<!----> `);
	Interview($$renderer, {});
	$$renderer.push(`<!----> `);
	Ingredients($$renderer, {});
	$$renderer.push(`<!----> `);
	Instructions($$renderer, {});
	$$renderer.push(`<!----> `);
	TypeBlock($$renderer, {});
	$$renderer.push(`<!----> `);
	PullQuote($$renderer, {});
	$$renderer.push(`<!----> `);
	LargeImage($$renderer, {});
	$$renderer.push(`<!----> `);
	TypeBlock($$renderer, {});
	$$renderer.push(`<!----> `);
	TinyImage($$renderer, {});
	$$renderer.push(`<!----> `);
	Credits($$renderer, {});
	$$renderer.push(`<!----></section>`);
}
//#endregion
export { _page as default };
