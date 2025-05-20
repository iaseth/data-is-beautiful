
<script lang="ts">
	import LengthBar from "./LengthBar.svelte";
	import BookCategoryFull from "./BookCategoryFull.svelte";
	import { getCategories } from "./data";
	import { getTailwindBgClass } from "./colors";
	import AudibleHeader from "./AudibleHeader.svelte";

	const cats = getCategories();
	const maxAverage = Math.max(...cats.map(c => c.average ?? 0));
	const maxLongest = Math.max(...cats.map(c => c.data.bestsellers[0].minutes));
	const maxShortest = Math.max(...cats.map(c => c.data.bestsellers.at(-1)?.minutes ?? 0));
</script>

<svelte:head>
	<title>Audible Insights</title>
</svelte:head>

<section class="add-bottom-border font-mono">
	<section class="max-w-3xl mx-auto py-8 pb-20">
		<AudibleHeader title="Average Duration"
			subtitle="for Top 30 Audiobooks from each genre"
			scale={maxAverage} />

		<section class="px-2">
			{#each cats as cat}
				<LengthBar title={cat.title}
					color={getTailwindBgClass(cat.title)}
					minutes={cat.average ?? 0}
					max={maxAverage} />
			{/each}
		</section>
	</section>
</section>

<section class="add-bottom-border font-mono">
	<section class="max-w-3xl mx-auto py-8 pb-20">
		<AudibleHeader title="Summary"
			subtitle="for Top 30 Audiobooks from each genre" />

		<section class="px-4">
			<table class="table">
				<thead>
					<tr>
						<td>#</td>
						<td>Genre</td>
						<td>Average</td>
						<td>Longest</td>
						<td>Shortest</td>
					</tr>
				</thead>
				<tbody>
					{#each cats as cat, i}
						<tr>
							<td>{i+1}</td>
							<td class="flex">
								<div class={["size-4 mr-2 rounded", getTailwindBgClass(cat.title)]}></div>
								<div>{cat.title}</div>
							</td>
							<td>{cat.average ?? 0}</td>
							<td>{cat.data.bestsellers[0].minutes}</td>
							<td>{cat.data.bestsellers.at(-1)?.minutes ?? 0}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</section>
	</section>
</section>


<section class="add-bottom-border font-mono">
	<section class="max-w-3xl mx-auto py-8 pb-20">
		<AudibleHeader title="Longest Audiobooks"
			subtitle="Among Top 30 Audiobooks from each genre"
			scale={maxLongest} />

		<section class="px-2">
			{#each cats as cat}
				<LengthBar title={cat.title}
					color={getTailwindBgClass(cat.title)}
					minutes={cat.data.bestsellers[0].minutes}
					max={maxLongest}
					footer={cat.data.bestsellers[0].title} />
			{/each}
		</section>
	</section>
</section>

<section class="add-bottom-border font-mono">
	<section class="max-w-3xl mx-auto py-8 pb-20">
		<AudibleHeader title="Shortest Audiobooks"
			subtitle="Among Top 30 Audiobooks from each genre"
			scale={maxShortest} />

		<section class="px-2">
			{#each cats as cat}
				<LengthBar title={cat.title}
					color={getTailwindBgClass(cat.title)}
					minutes={cat.data.bestsellers.at(-1)?.minutes ?? 0}
					max={maxShortest}
					footer={cat.data.bestsellers.at(-1)?.title} />
			{/each}
		</section>
	</section>
</section>

{#each cats as cat}
	<BookCategoryFull {cat} max={maxAverage} />
{/each}
