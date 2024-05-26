<script lang="ts">
  export let gap = "1rem";
  export let direction = "left";
  export let pauseOnHover = false;
  export let reverse = false;
  export let fade = false;
  export let className = "";
</script>

<div
  class="w-full group flex overflow-hidden {direction === 'left'
    ? 'flex-row'
    : 'flex-col'} {className}"
  style="mask-image: {fade
    ? 'linear-gradient(' +
      (direction === 'left' ? 'to right' : 'to bottom') +
      ', transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)'
    : undefined}; webkit-mask-image:{fade
    ? 'linear-gradient(' +
      (direction === 'left' ? 'to right' : 'to bottom') +
      ', transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)'
    : undefined}; gap: {gap};"
>
  {#each [0, 1] as i}
    <div
      style="--gap: {gap};"
      class="flex shrink-0 justify-around gap-[var(--gap)] {direction === 'left'
        ? 'animate-marquee-left flex-row'
        : 'animate-marquee-up flex-col'} {pauseOnHover
        ? 'group-hover:[animation-play-state:paused]'
        : ''} {reverse ? 'direction-reverse' : ''}"
    >
      <slot />
    </div>
  {/each}
</div>
