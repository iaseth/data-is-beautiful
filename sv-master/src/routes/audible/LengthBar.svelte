
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
	<h4 class="font-bold text-sm">{title}</h4>

	<div class="relative bg-base-300 rounded">
		<div class={["h-7 rounded", color]} style:width={`${100*(minutes??0)/max}%`}></div>
		<div class="absolute top-1/2 -translate-y-1/2 px-2 text-sm font-bold">{minutes} minutes</div>
	</div>

	{#if footer}
		<h5 class="text-right text-xs text-base-content/50">{footer}</h5>
	{/if}
</div>
