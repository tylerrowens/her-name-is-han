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
	class="flex aspect-[4/2] md-card:aspect-[3.5/4] w-85 md-card:w-[280px] xl:w-[330px] flex-col
	bg-menu-yellow/60 p-sm-3 text-aegean"
	aria-labelledby="newsletter-heading"
>
	<div class="flex items-center justify-between">
		<p class="small-serif trim-cap small-caps mb-sm-3">Newsletter</p>
	</div>

	<img
		src="/images/corn.jpg"
		alt="Sweet corn bingsu"
		class="hidden md-card:block sm:aspect-[16/10] w-full object-cover"
	/>

	<h2 id="newsletter-heading" class="body-serif trim-cap mt-sm-3">
		For more stories, dishes, and memories.
	</h2>

	<form class="mt-auto w-full" method="POST" action="/api/newsletter" onsubmit={handleSubmit}>
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
		<p role="status" class="pt-xs-3 small-serif">{message}</p>
	</form>
</section>
