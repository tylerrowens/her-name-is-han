<section
	class="flex aspect-[4/2] sm:aspect-[3.5/4] w-90 sm:w-[280px] xl:w-[330px] flex-col
	bg-menu-yellow/60 p-sm-3 text-aegean"
	aria-labelledby="newsletter-heading"
>
	<div class="flex items-center justify-between">
		<p class="small-serif trim-cap small-caps mb-sm-3">Newsletter</p>
		<!-- Put your close button here if this card is dismissible -->
	</div>

	<img
		src="/images/corn.jpg"
		alt="Sweet corn bingsu"
		class="hidden sm:block aspect-[16/8] sm:aspect-[16/10] w-full object-cover"
	/>

	<h2 id="newsletter-heading" class="body-serif trim-cap mt-sm-3">
		For more stories, dishes, and memories.
	</h2>

	<form class="mt-auto w-full" method="POST" action="/api/newsletter">
		<input type="hidden" name="source" value="home" />

		<div class="flex items-end border-b border-aegean">
			<label class="sr-only" for="home-newsletter-email">Email</label>
			<input
				id="home-newsletter-email"
				class="text-[15px] small-caps min-w-0 flex-1 appearance-none border-0
				ring-0 bg-transparent px-0 py-xs-2 outline-none placeholder:text-ash"
				name="email"
				type="email"
				placeholder="Email"
				autocomplete="email"
				inputmode="email"
				required
			/>
			<button class="text-[15px] small-caps shrink-0 py-xs-2" type="submit"> ( Submit ) </button>
		</div>
		<p class="sr-only" aria-live="polite"></p>
	</form>
</section>
