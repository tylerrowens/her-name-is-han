<section
	class="relative aspect-[641/265] w-full flex-col bg-jade-white/80 pl-md-3 text-aegean"
	aria-labelledby="newsletter-heading"
>
	<div class="absolute top-md-3 trim-cap">
		<p class="small-serif small-caps">Newsletter</p>
		<h2 class="card-serif-2 pt-sm-3">For more stories, dishes, <br /> and memories.</h2>
	</div>
	<form class="absolute inset-x-md-3 bottom-md-3" method="POST" action="/api/newsletter">
		<input type="hidden" name="source" value="footer" />
		<div class="flex border-b items-end">
			<label class="sr-only" for="newsletter-email">Email</label>
			<input
				id="newsletter-email"
				class="small-caps min-w-0 appearance-none border-0 ring-0 flex-1 bg-transparent py-xs-2 px-[0px] outline-none placeholder:text-ash"
				name="email"
				type="email"
				placeholder="Email"
				autocomplete="email"
				inputmode="email"
				required
			/>
			<button class="small-caps shrink-0 py-xs-2 pl-sm-3" type="submit"> Submit </button>
		</div>
		<p class="sr-only" aria-live="polite"></p>
	</form>
</section>
