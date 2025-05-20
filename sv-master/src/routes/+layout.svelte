<script lang="ts">
	import { browser, dev } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { afterNavigateStuff, setupGtag } from '$lib/gtag';
	import '../app.css';

	let { children } = $props();

	if (browser && !dev) {
		setupGtag();
		afterNavigate(afterNavigateStuff);
	}
</script>

<svelte:head>
	<title>Data is Beautiful</title>
</svelte:head>

{@render children()}
