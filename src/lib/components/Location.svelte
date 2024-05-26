<script lang="ts">
  import { MapPin } from "svelte-heros-v2";
  // import createGlobe from "cobe";
  // import { onMount } from "svelte";
  // import { spring } from "svelte/motion";
  // import { isDarkMode } from "$utils/theme";

  // const darkBaseColor = [235 / 255, 219 / 255, 178 / 255];
  // const lightBaseColor = [235 / 255, 199 / 255, 135 / 255];
  // // 216 199 135

  // let canvas: HTMLCanvasElement;

  // onMount(() => {
  //   createGlobe(canvas, {
  //     devicePixelRatio: 2,
  //     width: canvas.getBoundingClientRect().width,
  //     height: canvas.getBoundingClientRect().height,
  //     phi: 0,
  //     theta: 0,
  //     dark: (isDarkMode() ? true : false) as unknown as number,
  //     diffuse: 1.2,
  //     mapSamples: 16000,
  //     mapBrightness: 6,
  //     baseColor: darkBaseColor as [number, number, number],
  //     markerColor: [59 / 255, 130 / 255, 246 / 255],
  //     glowColor: darkBaseColor as [number, number, number],
  //     markers: [{ location: [35.28275, -120.65962], size: 0.05 }],
  //     onRender: (state) => {
  //       state.phi = $r;
  //       state.theta = $th;
  //       state.width = canvas.getBoundingClientRect().width * 2;
  //       state.height = canvas.getBoundingClientRect().height * 2;
  //     },
  //   });
  // });

  // let pointerInteracting: { x: number; y: number } | null = null;
  // let pointerInteractingMovement: { x: number; y: number } | null = {
  //   x: 0,
  //   y: 0,
  // };
  // let r = spring(0);
  // let th = spring(0);
</script>

<div class="self-center standard-container-col mt-5">
  <div class="flex items-center justify-center rounded-lg w-full">
    <MapPin size="100%" class="w-7" />
    <p
      class="flex my-auto justify-center text-lg font-bold align-middle text-center"
    >
      San Luis Obispo, CA
    </p>
  </div>
  <!-- <canvas
    bind:this={canvas}
    on:pointerdown={(e) => {
      if (!pointerInteractingMovement) {
        return;
      }
      pointerInteracting = {
        x: e.clientX - pointerInteractingMovement.x,
        y: e.clientY - pointerInteractingMovement.y,
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
          y: e.clientY - pointerInteracting.y,
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
          y: e.touches[0].clientY - pointerInteracting.y,
        };
        pointerInteractingMovement = delta;
        r.set(delta.x / 100);
        th.set(delta.y / 100);
      }
    }}
    style="box-shad6ow: inset 0 0 15px 2px rgba(0, 0, 0, 0.5);"
    class="w-full md:w-[500px] h-[350px] md:h-[500px] active:cursor-grabbing cursor-grab"
  /> -->
</div>
