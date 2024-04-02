<script lang="ts">
	import createGlobe from 'cobe';
	import { MapPin } from 'svelte-heros-v2';
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		createGlobe(canvas, {
			devicePixelRatio: 2,
			width: canvas.getBoundingClientRect().width * 2,
			height: canvas.getBoundingClientRect().height * 2,
			phi: 0,
			theta: 0,
			dark: 1,
			diffuse: 1.2,
			mapSamples: 16000,
			mapBrightness: 6,
			baseColor: [0.3, 0.3, 0.3],
			markerColor: [59 / 255, 130 / 255, 246 / 255],
			glowColor: [1, 1, 1],
			markers: [{ location: [-1.3411789, -48.5292651], size: 0.1 }],
			onRender: (state) => {
				state.phi = $r;
				state.theta = $th;
				state.width = canvas.getBoundingClientRect().width * 2;
				state.height = canvas.getBoundingClientRect().height * 2;
			}
		});
	});

	let pointerInteracting: { x: number; y: number } | null = null;
	let pointerInteractingMovement: { x: number; y: number } | null = { x: 0, y: 0 };
	let r = spring(0);
	let th = spring(0);
</script>

<div class="self-center standard-container-col">
	<canvas
		bind:this={canvas}
		on:pointerdown={(e) => {
			if (!pointerInteractingMovement) {
				return;
			}
			pointerInteracting = {
				x: e.clientX - pointerInteractingMovement.x,
				y: e.clientY - pointerInteractingMovement.y
			};
			// canvas.style.cursor = 'grabbing';
		}}
		on:pointerup={() => {
			pointerInteracting = null;
			// canvas.style.cursor = 'grab';
		}}
		on:pointerout={() => {
			pointerInteracting = null;
			// canvas.style.cursor = 'grab';
		}}
		on:pointermove={(e) => {
			if (pointerInteracting) {
				const delta = {
					x: e.clientX - pointerInteracting.x,
					y: e.clientY - pointerInteracting.y
				};
				pointerInteractingMovement = delta;
				r.set(delta.x / 100);
				th.set(delta.y / 100);
			}
		}}
		on:touchmove|preventDefault={(e) => {
			if (pointerInteracting && e.touches[0]) {
				const delta = {
					x: e.touches[0].clientX - pointerInteracting.x,
					y: e.touches[0].clientY - pointerInteracting.y
				};
				pointerInteractingMovement = delta;
				r.set(delta.x / 100);
				th.set(delta.y / 100);
			}
		}}
		style="box-shad6ow: inset 0 0 15px 2px rgba(0, 0, 0, 0.5);"
		class="w-full md:w-[500px] h-[350px] md:h-[500px] active:cursor-grabbing cursor-grab"
	/>
	<div class="flex items-center p-2 rounded-lg w-fit">
		<MapPin size="100%" class="text-blue-500 w-10" />
		Belém, Pará - Brazil
	</div>
</div>
