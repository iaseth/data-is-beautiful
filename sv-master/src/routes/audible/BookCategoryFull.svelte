
<script lang="ts">
	import Section from "$lib/components/Section.svelte";
	import AudibleHeader from "./AudibleHeader.svelte";
	import type { BookCategoryDS } from "./data";

	interface Props {
		cat: BookCategoryDS;
		max: number;
		id: string;
	}
	let { cat, id }: Props = $props();
	const bestsellers = $derived(cat.data.bestsellers);
	let showCount = $state(5);

	const showMore = () => showCount += 5;
	const showLess = () => showCount -= 5;
</script>

<Section {id} container="container-bg px-4 py-8">
	<AudibleHeader title={cat.title} subtitle="List of Audiobooks considered" />

	<section class="overflow-x-auto">
		<table class="table">
			<thead>
				<tr>
					<th>#</th>
					<th>Book</th>
					<th>Author</th>
					<th>Narrator</th>
					<th>Length</th>
				</tr>
			</thead>

			<tbody>
				{#each bestsellers.slice(0, showCount) as book, i}
					<tr>
						<td>{i+1}</td>
						<td>{book.title}</td>
						<td>{book.author}</td>
						<td>{book.narrated_by}</td>
						<td>{book.length}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</section>

	<footer class="text-center py-12">
		{#if showCount > 5}
			<button class="btn" onclick={showLess}>Show Less</button>
		{/if}

		{#if showCount < bestsellers.length}
			<button class="btn" onclick={showMore}>Show More</button>
		{/if}
	</footer>
</Section>
