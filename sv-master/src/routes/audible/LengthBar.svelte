
<script lang="ts">
	interface Props {
		title: string;
		color: string;
		minutes: number;
		max: number,
		footer?: string;
	}
	let { title, color, minutes, max, footer }: Props = $props();
</script>

<div class="px-3 py-3.5 rounded duration-300 hover:bg-base-200 space-y-1.5">
	<h4 class="font-bold">{title}</h4>

	<div class="bg-base-300 rounded">
		<div class={["px-2 py-1 rounded", color]} style:width={`${100*(minutes??0)/max}%`}>
			<p class="text-sm font-bold">{minutes} minutes</p>
		</div>
	</div>

	{#if footer}
		<h5 class="text-right text-sm">{footer}</h5>
	{/if}
</div>
