<script lang="ts">
  export const prerender = true;

  import Transition from "$lib/components/layout/Transition.svelte";
  import Header from "$lib/components/layout/Header.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
  import Analytics from "$lib/components/analytics/index.svelte";
  import "../app.css";

  export let data = {
    pathname: "",
  };
</script>

<!-- px-5 my-2 mx-8 -->
<div class="m-0 p-0">
  <div class="flex flex-col justify-between flex-nowrap h-screen">
    <Header />
    <main class="mb-auto px-5 py-4 sm:px-8">
      <Transition pathname={data?.pathname}>
        <slot />
      </Transition>
    </main>
    <Footer />
  </div>
</div>

<Analytics />
