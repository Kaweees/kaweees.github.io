<script lang="ts">
	export let gap = '1rem';
	export let direction = 'left';
	export let pauseOnHover = false;
	export let reverse = false;
	export let fade = false;
	export let className = '';
</script>

<div class="border-solid border-2 rounded-lg border-fg-light dark:border-fg-dark p-6 md:mx-7 my-4 {className}">
	<h1 class="text-xl md:text-3xl md:">Greetings, I’m Miguel 👋</h1>
	<slot />
</div>
