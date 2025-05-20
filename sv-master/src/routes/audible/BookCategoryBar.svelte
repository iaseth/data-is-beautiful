
<script lang="ts">
	import { getTailwindBgClass } from "./colors";
	import type { BookCategoryDS } from "./data";

	interface Props {
		cat: BookCategoryDS;
		max: number,
	}
	let { cat, max }: Props = $props();
</script>

<div class="px-3 py-3.5 rounded duration-300 hover:bg-base-200">
	<h4 class="font-bold mb-1.5">{cat.title}</h4>

	<div class="bg-base-300 rounded">
		<div class={["px-2 py-1 rounded", getTailwindBgClass(cat.title)]} style:width={`${100*(cat.average??0)/max}%`}>
			<p class="text-sm font-bold">{cat.average} minutes</p>
		</div>
	</div>
</div>
