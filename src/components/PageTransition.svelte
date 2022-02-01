<script>
  import { fly } from 'svelte/transition';
  import { onMount, onDestroy } from 'svelte';

  let show = false;

  onMount(()=> {
    show = true;

    window.addEventListener("beforeunload", function (e) {
    show = false;
    });
  })

  onDestroy(()=> {
    show = false;
  })
</script>

{#if show}
  <div in:fly="{{ x: -50, duration: 250}}" out:fly="{{ x: -50, duration: 250}}"
    >
    <slot/>
  </div>
{/if}

<style>
  div {
    position: relative;
  }
</style>