
<script lang="ts">
	import BookCategory from "./BookCategory.svelte";
	import { getCategories } from "./data";

	const cats = getCategories();
	const max = Math.max(...cats.map(c => c.average ?? 0));
</script>

<svelte:head>
	<title>Audible Insights</title>
</svelte:head>

<section class="font-mono">
	<section class="max-w-3xl mx-auto px-2 py-24">
		<header class="prose text-center mx-auto">
			<h2>Average Duration</h2>
			<p>for Top 30 Audiobooks from each genre</p>
		</header>

		{#each cats as cat}
			<BookCategory {cat} {max} />
		{/each}
	</section>
</section>
