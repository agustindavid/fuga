<script>
    import Nav from "../components/Nav.svelte";
    import '../app.css';
    import PageTransition from "../components/PageTransition.svelte"; 
    import { onMount } from "svelte";

    let ready = false;
    let fecha = new Date();
  
  //console.log(node)
</script>

<script context="module">
    export const load = async ({ url }) => ({
      props: {
        key: url
      },
      
    })

    
  </script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&family=Ubuntu:wght@400;500&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/fb10955868.js" crossorigin="anonymous"></script>
</svelte:head>

<Nav/>

<PageTransition>
    <slot></slot>
</PageTransition>

<footer class=" hidden ">
  <div class="flex flex-wrap justify-center text-center py-8 text-white bg-fuga-pink w-full">
    <h4>Fuga Ciclismo Inteligente {fecha.getFullYear()}</h4>
  </div>
</footer>