<script lang="ts">
	import { Song } from '$lib/types/';
	import { fetcher } from '$lib/utils/fetcher';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let user: Song = <Song>fetcher('https://api.spotify.com/v1/me/player/currently-playing');

	const nowListening = writable(null);

	onMount(async () => {
		nowListening.set(await getNowListening());
	});

	$: if ($nowListening) {
		console.log($nowListening);
	}

	$: if ($nowListening) {
		const { artist, album, track } = $nowListening;
		console.log(`Now listening to ${track} by ${artist} from ${album}`);
	}
</script>

{#if $nowListening}
	<div>
		<p>
			Now listening to {$nowListening.track} by {$nowListening.artist} from {$nowListening.album}
		</p>
	</div>
{:else}
	<div>
		<p>Not listening to anything right now</p>
	</div>
{/if}
