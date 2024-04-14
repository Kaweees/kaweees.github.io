<script lang="ts">
	export let title = '';
	export let className = '';
	export let border = true;
</script>

<!-- relative flex h-60 flex-col gap-6 overflow-hidden rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark lg:p-6 -->

<div
	class="{border
		? 'border-solid border-2 rounded-lg border-fg-light dark:border-fg-dark p-6'
		: ''} h-fit lg:mx-4 my-8 {className}"
>
	{#if title}
		<h1
			class="text-xl md:text-3xl md:py-4 text-gray-900 dark:text-gray-100 drop-shadow-lg dark:shadow-fg1-light shadow-fg1-dark"
		>
			{title}
		</h1>
	{/if}
	<slot />
</div>
