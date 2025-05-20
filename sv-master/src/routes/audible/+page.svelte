
<script lang="ts">
	import BookCategoryBar from "./BookCategoryBar.svelte";
	import BookCategoryFull from "./BookCategoryFull.svelte";
	import { getCategories } from "./data";

	const cats = getCategories();
	const max = Math.max(...cats.map(c => c.average ?? 0));
</script>

<svelte:head>
	<title>Audible Insights</title>
</svelte:head>

<section class="bg-odd-even font-mono">
	<section class="max-w-3xl mx-auto py-8 pb-20">
		<header class="prose text-center mx-auto px-4 py-12">
			<h2>Average Duration</h2>
			<p class="-mt-4">for Top 30 Audiobooks from each genre</p>
		</header>

		<section class="px-2">
			{#each cats as cat}
				<BookCategoryBar {cat} {max} />
			{/each}
		</section>
	</section>
</section>

{#each cats as cat}
	<BookCategoryFull {cat} {max} />
{/each}
