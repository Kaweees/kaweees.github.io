<script lang="ts">
  import { navLinks } from "$lib/config";
  import ThemeSwitch from "$lib/components/ThemeSwitch.svelte";
  import MobileMenu from "$lib/components/MobileMenu.svelte";
  import Typewriter from "svelte-typewriter";
</script>

<header
  class="flex items-center justify-between py-4 px-7 bg-bg1-light dark:bg-bg1-dark"
>
  <a
    class="typewriter neon font-bold font-title"
    href="/"
    style="font-size: 1.5rem !important;"
  >
    <Typewriter
      interval={200}
      mode="cascade"
      cursor={true}
      keepCursorOnFinish={true}
      class="after:bg-title_secondary-light after:dark:bg-title_secondary-dark"
      cursorClassName="after:bg-title_secondary-light after:dark:bg-title_secondary-dark"
    >
      <span class="text-title_primary-light dark:text-title_primary-dark"
        >&gt; Miguel</span
      >
      <span class="text-title_secondary-light dark:text-title_secondary-dark"
        >VF</span
      >
    </Typewriter>
  </a>
  <div class="flex items-center text-base leading-5">
    <div class="hidden sm:block">
      {#each navLinks as link}
        <a
          href={link.href}
          class=" px-3 py-2 my-3 text-xl rounded-md hover:bg-bg-dark dark:hover:bg-bg-light hover:text-bg-light hover:dark:text-bg-dark"
          >{link.title}</a
        >
      {/each}
    </div>
    <ThemeSwitch />
    <MobileMenu />
  </div>
</header>
