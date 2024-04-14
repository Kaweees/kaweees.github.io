<script lang="ts">
  export let href = "";
  export let className = "";
  export let target = "_blank";
  export let text = "";
</script>

<a
  {href}
  class="link text-aqua2-light dark:text-aqua2-dark hover:bg-aqua2-light dark:hover:bg-aqua2-dark hover:text-bg-light hover:dark:text-bg-dark {className}"
  {target}
  >{text}
</a>
