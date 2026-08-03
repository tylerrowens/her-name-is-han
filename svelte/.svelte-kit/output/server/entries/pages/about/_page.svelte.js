import "../../../chunks/server.js";
//#region src/lib/components/about/Dialogue.svelte
function Dialogue($$renderer) {
	$$renderer.push(`<article class="w-full"><div class="aspect-[3/4] w-full bg-blue-13 flex flex-col overflow-hidden justify-between items-center px-[50px] py-[30px]"><div><p class="body-serif small-caps text-center">( A Saturday night at Her name is Han. The weather outside is cold, but inside is warm and
				toasty. )</p></div> <div><p class="body-serif small-caps flex justify-self-center pb-[9px]">Anny H</p> <p class="mono">10/10. Was looking for a place to try raw marinated crab...and it did not disappoint.</p></div> <div><p class="body-serif small-caps flex justify-self-center pb-[9px]">Bethany W.</p> <p class="mono">I came alone and wanted to try as much as I could.</p></div> <div><p class="body-serif small-caps flex justify-self-center pb-[9px]">Colin C.</p> <p class="mono">The seafood hotpot brought tears to my eyes with its spice and the amazing flavors.</p></div> <div><p class="body-serif small-caps flex text-center">( The dinner goes on, with lively chatter filling the air. )</p></div></div></article>`);
}
//#endregion
//#region src/lib/components/about/FullQuote.svelte
function FullQuote($$renderer) {
	$$renderer.push(`<article class="w-full"><div class="aspect-[7/6] flex flex-col justify-between w-full overflow-hidden text-blue-4 bg-white-1 px-[20px] pt-[20px] pb-[20px]"><div class="flex flex-row justify-center gap-[50px]"><div><p>INFATUATION</p> <p>The Greatest Hits List</p></div> <p>2019 07 09</p></div> <div class="flex card-serif text-center"><p>“Think of Her name is Han as the Alicia Vikander of New York restaurants: at first, you
				might say, ‘Who?’ but once you look her up, you’re like, ‘Oh right, she’s incredible.’ ”</p></div> <div class="body-serif flex justify-center"><p class="w-[50%]">“There are some restaurants it feels like everyone knows about—they’re the Leonardo
				DiCaprios. But think of Her name is Han as the Alicia Vikander of New York restaurants: at
				first, you might say, “Who?” but once you look her up, you’re like, “Oh right, she’s
				incredible.” This casual but cool Korean restaurant on 31st Street makes absolutely amazing
				food, and every single person we’ve sent here has texted us something to the effect of,
				“Holy sh*t” after eating here.”</p></div></div></article>`);
}
//#endregion
//#region src/lib/components/about/SimpleQuote.svelte
function SimpleQuote($$renderer) {
	$$renderer.push(`<article class="w-full"><div class="aspect-[26/9] w-full py-[80px] flex flex-col overflow-hidden items-center bg-winter-sea text-gochujang"><div class="mb-[30px]"><p class="card-serif-2 text-center">“Every single person we’ve sent here has texted us something to the effect of, ‘Holy sh*t’
				after eating here.”</p></div> <div class="flex flex-row gap-[50px]"><p>—Ryan Sutton, Thrillist</p> <p>2018 10 05</p></div></div></article>`);
}
//#endregion
//#region src/lib/components/about/StaggeredQuote.svelte
function StaggeredQuote($$renderer) {
	$$renderer.push(`<article class="w-full"><div class="aspect-[7/6] relative w-full card-serif bg-yellow-2 text-red-1 flex flex-col items-center p-6"><p class="my-auto w-[70%] text-center">Although all their dishes are done differently, the strong Korean flavors remain familiar.</p> <p class="mb-4">by Ryan Sutton</p></div></article>`);
}
//#endregion
//#region src/routes/about/+page.svelte
function _page($$renderer) {
	$$renderer.push(`<section class="main-grid page-x"><div class="mt-[300px] col-span-17 col-start-8"><h1 class="post-title-serif small-caps">Our story</h1> <p class="mt-[300px] medium-serif">Her name is Han began with the memory of one family’s ordinary days. <br/><br/> Waking up to
			the familiar sound of chopping vegetables in the kitchen. The aroma of steaming soup filling
			the house. Quiet conversations lingering late into the night. Small moments, remembered as
			warmth. <br/><br/>Today, her story continues to grow. For some, she's a mother. For some, a
			daughter, and a friend. For others, someone who effortlessly brightens up the moment. Who she
			is may change, but her stories feel familiar.<br/><br/> Her name is Han is a place that turns
			one family’s memory into a living story, connecting us all.</p> <p class="mt-[100px] korean-secondary">Her name is Han은 마치 소설의 첫 문장처럼 들립니다. 이 문장은, 우리를 그녀의 이야기로
			초대합니다. 그녀가 누구인지는 중요하지 않을지도 모릅니다. 하지만 그녀의 이야기는 어딘가
			익숙합니다: 어머니의 사랑, 딸의 기억, 늦은 밤 식사와 조용한 대화를 나누는 친구의 이야기.
			음식은 늘 이야기를 품고 있습니다. 이것은 지금도 살아가는, 우리 모두의 이야기입니다.</p></div></section> <section class="main-grid page-x mt-[500px] mb-[500px]"><h1 class="sticky top-[50vh] post-title-serif small-caps col-start-4 self-start">press</h1> <div class="col-start-9 col-span-15"><div class="sticky flex justify-self-center rotate-[3.69deg] w-[90%] opacity-95 mb-[500px] top-[120px]">`);
	FullQuote($$renderer, {});
	$$renderer.push(`<!----></div> <div class="sticky flex justify-self-start rotate-[-1.69deg] w-[70%] opacity-95 mb-[500px] top-[160px]">`);
	StaggeredQuote($$renderer, {});
	$$renderer.push(`<!----></div> <div class="sticky flex justify-self-end rotate-[7.84deg] w-[49%] opacity-95 mb-[500px] top-[200px]">`);
	Dialogue($$renderer, {});
	$$renderer.push(`<!----></div> <div class="sticky flex justify-self-end rotate-[-15deg] w-[80%] opacity-95 mb-[500px] top-[120px]">`);
	SimpleQuote($$renderer, {});
	$$renderer.push(`<!----></div></div></section>`);
}
//#endregion
export { _page as default };
