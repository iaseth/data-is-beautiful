
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

<section class={["add-top-border", props.class]} {id}>
	<section class={container}>
		{@render children()}
	</section>
</section>
