<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let menu = $derived(data.menuContents.menu);
	let sections = $derived(menu?.sections ?? []);

	import MenuSectionTitle from '$lib/components/menu/MenuSectionTitle.svelte';
	import FoodSection from '$lib/components/menu/FoodSection.svelte';
	import WineSection from '$lib/components/menu/WineSection.svelte';
</script>

<div class="pt-[120px]">
	<div
		class="[--menu-offset:120px] [--title-expanded:400px] [--title-collapsed:100px]
	sm:grid sm:grid-cols-2 sm:grid-rows-[auto_auto]"
	>
		{#each sections as section, index (section._key)}
			<MenuSectionTitle {section} row={index + 1} endRow={sections.length + 1} />
			<div
				style:--section-row={index + 1}
				class="flex flex-col gap-lg-4 sm:col-start-2 sm:row-start-[var(--section-row)]
	min-h-[calc(100dvh-var(--menu-offset))] py-lg-4"
			>
				{#each section.content ?? [] as group (group._key)}
					{#if group._type === 'foodSection'}
						<FoodSection section={group} />
					{:else if group._type === 'wineSection'}
						<WineSection section={group} />
					{/if}
				{/each}
			</div>
		{/each}
	</div>
</div>
