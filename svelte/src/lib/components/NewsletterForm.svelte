<script lang="ts">
	let message = $state('');

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		const formElement = event.currentTarget;
		if (!(formElement instanceof HTMLFormElement)) return;

		try {
			const response = await fetch('/api/newsletter', {
				method: 'POST',
				body: new FormData(formElement)
			});

			const result = await response.json();
			message = result.message;

			if (response.ok) formElement.reset();
		} catch {
			message = 'Couldn’t submit your signup. Please try again.';
		}
	}
</script>

<section
	class="relative aspect-[3/2] md:aspect-[3/1] lg:aspect-[640/265] w-auto flex-col bg-jade-white/80 pl-md-3 text-aegean"
	aria-labelledby="footer-newsletter-heading"
>
	<div class="absolute top-md-3 trim-cap">
		<p class="nav-serif small-caps">Newsletter</p>
		<h2 id="footer-newsletter-heading" class="body-serif pt-sm-3">
			For more stories, dishes, <br /> and memories.
		</h2>
	</div>
	<form
		class="absolute inset-x-md-3 bottom-md-3"
		method="POST"
		action="/api/newsletter"
		onsubmit={handleSubmit}
	>
		<input type="hidden" name="source" value="footer" />
		<div class="flex border-b items-end">
			<label class="sr-only" for="newsletter-email">Email</label>
			<input
				id="newsletter-email"
				class="nav-serif small-caps min-w-0 appearance-none border-0 ring-0 flex-1 bg-transparent py-xs-2 px-[0px] outline-none placeholder:text-ash"
				name="email"
				type="email"
				placeholder="Email"
				autocomplete="email"
				inputmode="email"
				required
			/>
			<button class="nav-serif small-caps shrink-0 py-xs-2 pl-sm-3" type="submit"> Submit </button>
		</div>
		<p role="status" class="pt-xs-3 small-serif">{message}</p>
	</form>
</section>
