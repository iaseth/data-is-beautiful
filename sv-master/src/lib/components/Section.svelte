
<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		id: string;
		container?: string;
		class?: string;
		children: Snippet;
	}
	let { id, container, children, ...props }: Props = $props();
</script>

<section class={["toc-section relative bg-odd-even", props.class]} {id}>
	<a class="absolute top-0 right-4 block px-4 py-1.5 bg-blue-500 text-sm font-bold rounded-b-md" href={`#${id}`}>#{id}</a>

	<section class={["mx-auto", container]}>
		{@render children()}
	</section>
</section>
