<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<section class="page-x pt-[135px]">
	<div class="flex flex-col pb-[75px] w-full sm:w-[886px] mx-auto">
		<div class="trim-cap nav-serif">
			<a href="/shop" class="pb-md-3 nav-serif small-caps transition-colors duration-200 ease-out hover:text-ash">&lt; BACK TO STORE</a>
		</div>
	</div>
	<div class="w-100dvw">
		<div class="flex flex-col justify-center items-center pb-[120px] gap-[120px]">
			<div class="grid grid-cols-1 gap-md-4 sm:grid-cols-[400px_450px]">
				<div class="aspect-[3/4] sm:w-[400px] self-start overflow-hidden">
					<img class="w-full object-cover" src={data.product.src} alt={data.product.title} />
				</div>
				<div class="flex flex-col gap-md-4">
					<p class="trim-cap card-serif">Han’s Table Bojagi Tote</p>
					<div class="flex flex-col gap-sm-3">
						<p class="trim-cap body-serif sm:body-serif">$70</p>
						<p class="trim-cap small-serif small-caps">One Size</p>
					</div>
					<div class="flex flex-col gap-lg-5">
						<p class="trim-cap body-serif sm:nav-serif">
							Hand sewn with recycled cotton scraps, this tote features the Han table symbol
							imagined in a bojagi patchwork pattern.
						</p>
						<p class="trim-cap body-serif sm:nav-serif underline underline-offset-4 small-caps">
							Add to cart
						</p>
					</div>
					<p class="trim-cap small-serif text-ash">
						After successfully placing an order you will receive an email confirming that your
						purchase was processed. Once your order has shipped you will receive a second email with
						a confirmation of shipment that includes a tracking number that can be used to track
						your package. Please allow 1-3 business days for processing. During the holidays (Dec
						1-Jan 10) please allow up to 7 business days for processing.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
