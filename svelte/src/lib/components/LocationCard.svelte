<script lang="ts">
	type Props = {
		title: string;
		koreanName: string;
		StreetAddress: string;
		CityAddress: string;
		phone: string;
		description: string;
		number: number;
		variant?: 'blue' | 'navy' | 'brown';
	};

	let {
		title,
		koreanName,
		StreetAddress,
		CityAddress,
		phone,
		description,
		number,
		variant = 'blue'
	}: Props = $props();

	const variantClasses = $derived(
		{
			blue: 'bg-card-1-bg text-blue-5',
			navy: 'bg-blue-10 text-grey-5',
			brown: 'bg-chamgireum text-grey-5'
		}[variant]
	);
</script>

<article class={`flex h-full w-full flex-col p-[35px] ${variantClasses}`}>
	<div>
		<p class="card-serif">{title}</p>
		<p class="korean-secondary pt-[5px]">{koreanName}</p>
	</div>

	<div>
		<p class="body-serif text-center pt-[130px]">{StreetAddress}</p>
		<p class="body-serif text-center">{CityAddress}</p>
		<p class="body-serif text-center pt-[20px]">{phone}</p>
	</div>

	<div class="mt-auto">
		<p class="body-serif text-justify pt-[100px]">{description}</p>
		<p class="body-serif text-center pt-[20px]">{number}</p>
	</div>
</article>
