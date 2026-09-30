<script lang="ts">
	interface Props {
		row: number;
		endRow: number;
		section: {
			title: string | null;
			backgroundColor: 'blue' | 'yellow' | null;
		};
	}

	let { row, endRow, section }: Props = $props();
</script>

<div
	style:--section-row={row}
	style:--section-end={endRow}
	style:--section-layer={row}
	class="sticky z-[var(--section-layer)] self-start
	top-[calc(var(--menu-offset)+var(--title-collapsed)-var(--title-expanded))]
	flex h-[var(--title-expanded)] items-center
	bg-[#d1eaed]
	sm:top-[var(--menu-offset)]
	sm:col-start-1
	sm:row-start-[var(--section-row)]
	sm:row-end-[var(--section-end)]
	sm:h-[calc(100dvh-var(--menu-offset))]"
>
	<div
		class="sticky top-[var(--menu-offset)]
flex h-[var(--title-collapsed)] w-full
flex-col items-center justify-center text-center
sm:static sm:h-full"
	>
		<p class="trim-cap card-serif-2 pb-sm-3">{String(row).padStart(2, '0')}.</p>
		<p class="trim-cap about-card-serif">{section.title}</p>
	</div>
</div>
