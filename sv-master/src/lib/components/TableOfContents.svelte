<script lang="ts">
	import { onMount } from "svelte";
	import Section from "./Section.svelte";

	interface SectionDS {
		id: String;
	}

	let sections: SectionDS[] = $state([]);
	function getTocSections(): SectionDS[] {
		const sections = document.querySelectorAll('section.toc-section[id]');
		return Array.from(sections).map(section => ({ id: section.id }));
	}

	onMount(() => {
		sections = getTocSections();
	});
</script>

<Section class="py-32" id="table-of-contents" container="max-w-md px-4">
	<header class="prose mx-auto">
		<h2>Table of Contents</h2>
	</header>
	<ul class="list-disc list-inside space-y-2.5 py-8">
		{#each sections as section}
			<li class="">
				<a class="link" href={`#${section.id}`}>{section.id}</a>
			</li>
		{/each}
	</ul>
</Section>
