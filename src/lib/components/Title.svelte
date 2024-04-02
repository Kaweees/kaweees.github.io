<script lang="ts">
	export let title = 'Title';
	export let subtitle = '';
	export let h2 = false;
	let selected = h2 ? 'h2' : 'h1';
</script>

{#if title}
	<svelte:element
		this={selected}
		class="{h2 ? 'text-4xl' : 'text-5xl'} my-4 tracking-tight leading-14 capitalize"
	>
		{title}
	</svelte:element>
{/if}

{#if subtitle}
	<h2 class="my-2 text-xl leading-7 text-gray-700 dark:text-gray-400">
		{subtitle}
	</h2>
{/if}
