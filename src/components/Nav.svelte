<script>
import { children } from "svelte/internal";
import { fade, fly } from 'svelte/transition';

    export let y;
    export let lastY=0;
    let navOpen = false;
    $: innerHeight = 0;
    
    function getDirection(y) {
      const dy = y-lastY;
      lastY = y;
      if( dy > 0) {
        return "down";
      } else {
        return "up";
      }
    }

    $: scrollDirection = getDirection(y);


    function toggleMenu(){
      navOpen = !navOpen;
    }
</script>

<svelte:window bind:scrollY={y} bind:innerHeight />

{#if scrollDirection == 'up' || y== 0}
  <nav transition:fly class="flex items-center justify-between flex-wrap bg-fuga-pink p-3 fixed z-10 w-full transition-all top-0">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <div style="width: 40px;">
        <svg transition:fade xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 190.44 259.18"><defs></defs><title>Asset 7</title><g id="Layer_2" data-name="Layer 2"><g fill="white" id="Capa_1" data-name="Capa 1"><path class="cls-1" d="M161.93,217.88V187.09c0-8.94.07-17.88,0-26.82-.13-14.68-11.39-26.29-25.74-26.66-13.61-.35-26,11-26.69,24.42-.76,14.71,9.39,26.54,24.19,27.89,4.3.39,12.49.29,16.82.21l-.06,28.47c-6.35-.38-16.42,0-22.67-.93-6.07-.92-11.94-3.13-18.29-4.89-.19.88-.53,2.14-.72,3.41A54.59,54.59,0,0,1,59.3,259a19,19,0,0,1-4.35.07c.23-6.9.16-21.24,0-28.14a10,10,0,0,0,3.32-.38C73.58,227.22,81,217.8,81.06,202.07c0-13.82.11-27.64,0-41.46s-8.64-23.87-21.83-26.42c-14.43-2.8-27.58,6.83-30.47,22.31-2.4,12.83,7.81,27.06,21.29,29,5.32.78,19.62.49,19.62.49v27.88c-33.42,4.77-60.9-11.34-68.2-42.25-7-29.45,12.18-58.84,42.3-65.11,17.72-3.69,33.52.94,47.25,12.68,1.32,1.14,2.57,2.36,3.42,3.13,7.42-8.11,14.87-12.3,24.26-15.54-.58-.26-1.6-.77-2.67-1.19A54.37,54.37,0,0,1,81.1,55.34c-.13-7.45,0-26.85,0-26.85-7.58.23-19.47-.06-27.06.14-11.2.29-20.52,7.29-24.17,18.61H57.21V75.45H28.37l-.06,28.11s-.86.38-2,1a66.3,66.3,0,0,0-26,25.27c-.12-2.15-.26-3.4-.26-4.65q0-34.35,0-68.69C.09,24.29,23.84.42,56,.36,72.08.32,109.44,0,109.44,0s-.09,38.71.06,55.38a26.19,26.19,0,0,0,52.36,0c.21-16.53.07-33.06.07-49.59V0h28.21s.92,41.26-.46,60.13c-1.57,21.55-13.87,36.44-33.59,45.16-1.23.54-2.49,1-4.61,1.9,26.29,8.18,38.75,30.44,38.76,53.11,0,17.75.07,57.58.07,57.58Z"/></g></g></svg>
      </div>

    </div>
    <div class="block lg:hidden" class:change={navOpen} on:click={toggleMenu}>
      <button class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full lg:flex-grow flex justify-around lg:items-center flex-col lg:flex-row lg:h-auto lg:w-auto menu-wrap fixed lg:relative top-16 transition-all  -translate-x-full  lg:top-0 bg-fuga-pink z-10 h-[calc(100vh_-_80px)] lg:translate-x-0 left-0" class:open={navOpen}>
      <div class="text-sm lg:flex-grow ">
        <a class="block mt-4 lg:text-base text-2xl lg:inline-block lg:mt-0 text-white hover:text-pink-200 lg:mr-4 mr-0 text-center lg:text-left" href="/">Home</a>
        <a class="block mt-4 lg:text-base text-2xl lg:inline-block lg:mt-0 text-white hover:text-pink-200 lg:mr-4 mr-0 text-center lg:text-left" href="/how-it-works">Como Funciona</a>
        <a class="block mt-4 lg:text-base text-2xl lg:inline-block lg:mt-0 text-white hover:text-pink-200 lg:mr-4 mr-0 text-center lg:text-left" href="/about">Bio</a>
        <a class="block mt-4 lg:text-base text-2xl lg:inline-block lg:mt-0 text-white hover:text-pink-200 lg:mr-4 mr-0 text-center lg:text-left" href="/blog">Blog</a>
      </div>
      <div class="text-center">
        <a href="/" class="inline-block text-2xl lg:text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Contacto</a>
      </div>
    </div>
  </nav>
  {/if}

  <style>
    .open {
      transform: translateX(0) !important;
    }
  </style>