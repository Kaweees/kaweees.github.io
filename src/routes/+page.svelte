<script lang="ts">
  import BorderedElement from "$lib/components/BorderedCard.svelte";
  import Head from "$lib/components/layout/Head.svelte";
  import Blogs from "$lib/components/Blogs.svelte";
  import Link from "$lib/components/Link.svelte";
  import Metadata from "$lib/components/Metadata.svelte";

  export let data;
  let posts = data.posts;
  let jobs = data.jobs;
</script>

<Metadata />
<Head />

<BorderedElement
  className="overflow-hidden"
  title="Greetings, I’m Miguel 👋"
  border={true}
>
  <p class="text-sm md:text-lg prose-xl my-3">
    I’m an engineer & entrepreneur focusing on applied robotics & embedded
    systems. I’m also currently researching Large Language Models and building
    AI projects in stealth. I also
    <Link href="/blog/" text="write" /> occasionally about philosophy and computers.
  </p>
  <p class="text-sm md:text-lg prose-xl my-3">
    I’m a sophomore at <Link href="https://csc.calpoly.edu/" text="Cal Poly" />
    studying Computer Engineering. I am currently writing drivers and firmware for
    electric vehicles at <Link
      href="https://www.calpolyracing.org/"
      text="Cal Poly Racing"
    />. Here are some of the
    <Link href="/calpoly/" text="projects" /> I’ve worked on at Cal Poly.
  </p>
  <p class="text-sm md:text-lg prose-xl my-3">
    This past summer, I worked at <Link
      href="https://dwe.ai/products/discovery/"
      text="DeepWater Exploration"
    /> to ship some <Link href="https://dwe.ai/" text="streaming software" /> which
    outperformed OBS, and drivers and firmware for their products which are used
    in various applications spanning across academia, enterprise, and defense.
  </p>
  <p>
    This upcoming summer I will be working at <Link
      href="https://www.nvidia.com/"
      text="NVIDIA"
    />, working on their internal platform used for end-to-end testing of their
    products, from the modular down to the transistor level.
  </p>
  <p>
    See more on my <Link href="/resume/" text="resume" /> or contact me at <Link
      href="mailto:mavillaf@calpoly.edu"
      text="mavillaf@calpoly.edu"
    />.
  </p>
</BorderedElement>

<BorderedElement
  className="overflow-hidden"
  title="Places I've Worked"
  border={true}
>
  <div class="my-3 border-b border-dashed border-fg-light dark:border-fg-dark">
    {#if !jobs.length}
      <p>No jobs found.</p>
    {:else}
      {#each jobs as job}
        <div
          class="flex flex-col sm:flex-row items-center justify-between py-3 border-t border-dashed border-fg-light dark:border-fg-dark flex-wrap"
        >
          <a id="no-style" href={job.link} target="_blank"
            ><div class="flex flex-col sm:flex-row items-center space-x-2">
              <div
                class="flex flex-row items-center justify-center space-x-3 flex-wrap"
              >
                <img
                  src={job.image}
                  alt="{job.company} logo"
                  class="w-10 h-10"
                />
                <div
                  class="flex flex-row items-center space-x-1.5 text-md font-bold"
                >
                  <span>{job.company}</span>
                </div>
              </div>
              <div class="text-sm text-center">{job.role}</div>
            </div></a
          >
          <div class="flex flex-row items-center space-x-2">
            <div class="text-sm text-center">{job.time}</div>
          </div>
        </div>
      {/each}
    {/if}
  </div>
</BorderedElement>
<Blogs title="Latest Posts" h2 {posts} search={false} count={3} />
