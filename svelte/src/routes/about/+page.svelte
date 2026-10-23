<script lang="ts">
	import Dialogue from '$lib/components/about/Dialogue.svelte';
	import FullQuote from '$lib/components/about/FullQuote.svelte';
	import SimpleQuote from '$lib/components/about/SimpleQuote.svelte';
	import StaggeredQuote from '$lib/components/about/StaggeredQuote.svelte';
</script>

<section class="page-x">
	<div class="flex flex-row justify-center pt-[135px] card-serif-2 gap-md-4 sm:gap-lg-6">
		<nav>Our Story</nav>
		<nav>Contact</nav>
		<nav>Press</nav>
	</div>
	<div class="flex flex-col pt-[95px] w-full md:max-w-[350px] mx-auto gap-[50px]">
		<p class="card-serif-2 text-center">
			Our story began with the memory of one family’s ordinary days.
		</p>
		<p class="nav-serif text-left">
			Waking up to the familiar sound of chopping vegetables in the kitchen. The aroma of steaming
			soup filling the house. Quiet conversations lingering late into the night. Small moments,
			remembered as warmth. <br /><br /> Today, her story continues to grow. For some, she's a
			mother. For some, a daughter, and a friend. For others, someone who effortlessly brightens up
			the moment. Who she is may change, but her stories feel familiar. <br /><br /> Her name is Han is
			a place that turns one family’s memory into a living story, connecting us all.
		</p>
	</div>
	<div class="flex sm:flex-row text-center gap-[50px] justify-center pt-[50px] flex-col nav-serif">
		<div class="flex flex-col">
			<p class="small-caps">Contact</p>
			<p class="underline underline-offset-2">hernameishan@handhospitality.com</p>
		</div>
		<div class="flex flex-col">
			<p class="small-caps">Instagram</p>
			<p class="underline underline-offset-2">@hernameishan</p>
		</div>
	</div>
</section>

<div class="overflow-x-clip">
	<section class="page-x w-full md:max-w-[1050px] mt-[135px] mx-auto">
		<!-- The quotes container starts exactly at column 9 and spans the rest of your layout -->
		<div class="w-full min-w-0">
			<div
				class="sticky flex justify-self-center rotate-[-3.69deg] md-card:w-[90%] opacity-95 mb-[200px] w-full top-[120px]"
			>
				<FullQuote />
			</div>
			<div
				class="sticky flex justify-self-center md-card:justify-self-start rotate-[-1.69deg] w-full md-card:w-[70%] opacity-95 mb-[200px] top-[160px]"
			>
				<StaggeredQuote />
			</div>
			<div
				class="sticky flex justify-self-center md-card:justify-self-end rotate-[7.84deg] w-full md-card:w-[49%] opacity-95 mb-[200px] top-[150px] sm:top-[200px]"
			>
				<Dialogue />
			</div>
			<div
			class="sticky flex justify-self-center rotate-[-3.69deg] md-card:w-[90%] opacity-95 mb-[200px] w-full top-[120px]"
		>
			<FullQuote />
		</div>
		</div>
	</section>
</div>
