<script>

import { onMount } from 'svelte';
  
let Carousel;
onMount(async () => {
const module = await import("svelte-carousel");
Carousel = module.default;
});

export let slides;
export let type;
//console.log(type);
//console.log(slides);
</script>


<svelte:component this={Carousel} let:showPrevPage let:showNextPage {...slides}>
		<button
			type="button"
			slot="prev"
			class="absolute top-2/4 left-0 z-10 bg-fuga-pink text-white opacity-40 rounded-md p-2 ml-2 mr-2 hover:opacity-100 transition-all text-lg"
			on:click={showPrevPage}
		><span>&LongLeftArrow;</span> 
		</button>
		
		{#if type=='images'}
		    {#each slides as slide}
				<div>
					<img src="{slide.slide.mediaItemUrl}" alt="bici" class=" w-full">
				</div>
			{/each}
		{/if}

		{#if type=='testimony'}
			{#each slides as testimonio}
				<div class="flex flex-row items-center px-16">
					<div class="basis-4/12">
						<img src="{testimonio.image.mediaItemUrl}" alt="bici" class=" w-3/5 mx-auto rounded-full border-8  border-white">
					</div>
					<div class="basis-8/12 pr-16">
						<h3 class="font-ubuntu border-b border-black text-2xl font-medium my-4 pb-4">{testimonio.name}</h3>
						<div class="my-4 text-xl">
							{@html testimonio.text}
						</div>
					</div>
				</div>
			{/each}
		{/if}
		<button
			type="button"
			slot="next"
			class="absolute top-2/4 right-0 z-10 bg-fuga-pink text-white opacity-40 rounded-md p-2 ml-2 mr-2 hover:opacity-100 transition-all text-lg"
			on:click={showNextPage}
		><span>&LongRightArrow;</span>
		</button>
	</svelte:component>
