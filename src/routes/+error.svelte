<script>
	import { page } from '$app/stores';
	import { config } from '$lib/config.ts';
	import Title from '$lib/components/Title.svelte';
</script>

<div class="">
	{#if $page.status === 404}
		<Title
			title="404 Page not found {config.emoji}"
			subtitle="This is not the page you're looking for <(-_-)>."
		/>
	{:else}
		<Title title="Error {config.emoji}" subtitle="Something went wrong." />
	{/if}
	<div class="pt-4">
		<p>{config.quote}</p>
		<a
			href="/"
			class="text-xl font-semibold border-2 py-2 px-6 rounded-lg link border-bg-dark text-bg-dark dark:text-bg-light dark:border-bg-light dark:hover:bg-bg-light hover:text-bg-light hover:bg-bg-dark hover:dark:text-bg-dark"
			>Go Back Home</a
		>
	</div>
</div>
