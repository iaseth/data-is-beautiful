
<script lang="ts">
	interface Props {
		title: string;
		subtitle: string;
		scale?: number;
	}
	let { title, subtitle, scale }: Props = $props();
</script>

<header class="prose text-center mx-auto px-4 py-12">
	<h2>{title}</h2>
	<p class="-mt-2 text-sm">{subtitle}</p>
	{#if scale}
		<p class="-mt-2 text-sm">Scale = {scale} minutes</p>
	{/if}
</header>
