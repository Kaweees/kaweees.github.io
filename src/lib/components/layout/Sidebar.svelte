<script lang="ts">
	import Marquee from '$lib/components/Marquee.svelte';
	import BorderedElement from '$lib/components/BorderedElement.svelte';
	import Badges from '$lib/components/Badges.svelte';
	import TechStack from '$lib/components/TechStack.svelte';
	import Location from '$lib/components/Location.svelte';
</script>

<BorderedElement className="overflow-hidden basis-1/2" title="Greetings, I’m Miguel 👋">
	<Location />
	<!-- <Badges /> -->
	<TechStack />
</BorderedElement>
