<script>
  import { fly } from 'svelte/transition';
  //import { onMount, onDestroy } from 'svelte';

  /* let show = false;

  onMount(()=> {
    show = true;

    window.addEventListener("beforeunload", function (e) {
    show = false;
    });
  })

  onDestroy(()=> {
    show = false;
  }) */

  export let url="";
  console.log(url)
  const pageTransitionDuration = 500;

</script>

  <div in:fly="{{ x: -50, duration: 250}}" out:fly="{{ x: -50, duration: 250}}"
    >
    <slot/>
  </div>
<style>
  div {
    position: relative;
  }
</style>