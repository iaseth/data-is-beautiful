
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

<section class={["toc-section bg-odd-even", props.class]} {id}>
	<section class={["mx-auto", container]}>
		{@render children()}
	</section>
</section>
