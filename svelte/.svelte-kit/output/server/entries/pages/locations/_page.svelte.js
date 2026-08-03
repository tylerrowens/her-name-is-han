import { b as escape_html, n as derived, o as spread_props, r as ensure_array_like, t as attr_class } from "../../../chunks/server.js";
//#region src/lib/components/LocationCard.svelte
function LocationCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { title, koreanName, StreetAddress, CityAddress, phone, description, number, variant = "blue" } = $$props;
		const variantClasses = derived(() => ({
			blue: "bg-blue-9 text-blue-5",
			navy: "bg-blue-10 text-grey-5",
			brown: "bg-brown-2 text-grey-5"
		})[variant]);
		$$renderer.push(`<article${attr_class(`flex h-full w-full flex-col p-[35px] ${variantClasses()}`)}><div><p class="card-serif">${escape_html(title)}</p> <p class="korean-secondary pt-[5px]">${escape_html(koreanName)}</p></div> <div><p class="body-serif text-center pt-[130px]">${escape_html(StreetAddress)}</p> <p class="body-serif text-center">${escape_html(CityAddress)}</p> <p class="body-serif text-center pt-[20px]">${escape_html(phone)}</p></div> <div class="mt-auto"><p class="body-serif text-justify pt-[100px]">${escape_html(description)}</p> <p class="body-serif text-center pt-[20px]">${escape_html(number)}</p></div></article>`);
	});
}
//#endregion
//#region src/routes/locations/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		$$renderer.push(`<section><h1 class="medium-serif flex flex-row w-full justify-center mt-[145px] mb-[155px]">Locations</h1> <div class="flex flex-row w-full justify-center gap-[15px] mb-[250px]"><!--[-->`);
		const each_array = ensure_array_like(data.locations);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let location = each_array[$$index];
			$$renderer.push(`<div class="h-[660px] w-[420px] shrink-0">`);
			LocationCard($$renderer, spread_props([location]));
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]--></div></section>`);
	});
}
//#endregion
export { _page as default };
