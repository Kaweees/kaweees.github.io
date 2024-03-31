<script>
	export const prerender = true;

	import Transition from '$lib/components/layout/Transition.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Analytics from '$lib/components/analytics/index.svelte';
	import '../app.css';

	export let data = {};
</script>

<div class="mx-0">
	<div class="flex flex-col justify-between">
		<Header />
		<main>
			<Transition pathname={data?.pathname}>
				<slot />
			</Transition>
		</main>
		<Footer />
	</div>
</div>

<Analytics />
