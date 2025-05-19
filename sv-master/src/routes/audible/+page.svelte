
<script lang="ts">
	import { getTailwindBgClass } from "./colors";
	import { getCategories } from "./data";

	const cats = getCategories();
	const max = Math.max(...cats.map(c => c.average ?? 0));
</script>

<svelte:head>
	<title>Audible Insights</title>
</svelte:head>

<section>
	<section class="max-w-3xl mx-auto px-4 py-24 space-y-5">
		{#each cats as cat}
			<div class="">
				<h4 class="font-bold mb-1.5">{cat.title}</h4>
				<div class={["px-2 py-0.5 rounded", getTailwindBgClass(cat.title)]} style:width={`${100*(cat.average??0)/max}%`}>
					<p class="text-sm font-bold">{cat.average} minutes</p>
				</div>
			</div>
		{/each}
	</section>
</section>
