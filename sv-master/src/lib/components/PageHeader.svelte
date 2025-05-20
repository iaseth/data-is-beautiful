
<script lang="ts">
	interface Props {
		title: string;
	}
	let { title }: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<header class="bg-base-300 py-8">
	<section class="prose text-center mx-auto">
		<h3 class="text-red-500">{title}</h3>
	</section>
</header>
