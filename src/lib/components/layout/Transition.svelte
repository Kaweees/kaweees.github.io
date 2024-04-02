<script lang="ts">
	import { fly } from 'svelte/transition';
	export let pathname = '';
</script>

<div class="basis-1/2">
	{#key pathname}
		<div in:fly={{ x: -5, duration: 500, delay: 500 }}>
			<slot />
		</div>
	{/key}
</div>