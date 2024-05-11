<script lang="ts">
  import BorderedElement from "$lib/components/BorderedCard.svelte";
  import Badges from "$lib/components/Badges.svelte";
  import TechStack from "$lib/components/TechStack.svelte";
  import Location from "$lib/components/Location.svelte";
</script>

<BorderedElement
  className="overflow-hidden basis-1/3 flex flex-col items-center"
  border={true}
>
  <img
    src="/img/miguel-vf.png"
    alt="Miguel Villa Floran"
    class="mx-auto object-cover object-center border-fg-light dark:border-fg-dark border-opacity-60 border-2 rounded-full"
    width="250"
    height="250"
  />
  <p class="mx-auto text-center mt-5 font-bold text-xl">Miguel Villa Floran</p>
  <p class="text-center mt-5 text-md w-full justify-center">
    Computer Enginner in Training.
  </p>
  <a
    class="text-center text-md mt-5 w-full justify-center"
    href="mailto:mavillaf@calpoly.edu"
    target="_blank">mavillaf@calpoly.edu</a
  >
  <p
    class="text-center text-sm mt-5 w-full justify-center text-gray-500 dark:text-gray-400"
  >
    Curious, Creative, and Clever. Aspiring Programming Wizard with interests in
    embedded systems, robotics, and control systems. I'm an incoming Software
    Engineer @NVIDIA, and pursuing a B.S. in Computer Engineering at Cal Poly
  </p>
  <!-- alt="Picture of Miguel Villa Floran" -->
  <Location />
  <Badges />
  <TechStack />
</BorderedElement>
