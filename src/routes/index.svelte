<script context="module">
    import Intro from '../components/Intro.svelte';
    import Carousel from '../components/Carousel.svelte';
    import Who from '../components/Who.svelte';
    import PostsList from "../components/PostsList.svelte";
    import EventsList from "../components/EventsList.svelte";
    import { blogPosts } from "../stores/posts";
    import SEO from "../components/SEO/index.svelte";
    import axios from "axios";
    import { events } from '../stores/events';
    import { variables } from '../api/variables';
    import axiosRetry from 'axios-retry';
    //import { activities, distanceTotal } from '../stores/strava'



let isLoading = true;
let serverDown=true;

export async function load() {

  axiosRetry(axios, {
    retries: 3, // number of retries
    retryDelay: (retryCount) => {
      console.log(`retry attempt: ${retryCount}`);
      return retryCount * 2000; // time interval between retries
    },
    retryCondition: (error) => {
      // if retry condition is not specified, by default idempotent requests are retried
    },
  });

  let responseObj;
  try {
  const response = await axios({
    url: variables.basePath,
    method: 'post',
    timeout: 9000,
    data: {
      query: variables.homeContent,
    },
  });
  
  responseObj=response.data;
  //console.log(responseObj);

  if(responseObj.data.pageBy){
    const quienesSomos = responseObj.data.pageBy.home.quienesSomos;
    const testimonios = responseObj.data.pageBy.testimonios.testimonio;
    const sponsors = responseObj.data.pageBy.sponsors.sponsors;
    const content = responseObj.data.pageBy.content;
    isLoading=false;
    serverDown=false;
  
    return {
      props: {
          quienesSomos,
          content,
          testimonios,
          sponsors,
          isLoading,
      }
    };
  } else {
    return {
      props: {
        isLoading,
      }
    }
  }

  } catch(error) {
    console.log(error);
    console.log(error.code)
    if(error.code=='ECONNABORTED') {
      console.log('aja');
      return {
      props: {
        serverDown,
        isLoading,
      }
    }
      
    }
    return {
      props: {
        isLoading,
      }
    }
  }


}
  
</script>

<script>
    export let quienesSomos;
    export let content;
    export let testimonios;
    export let sponsors;
    export let isLoading;
    export let serverDown;
    let date;
    let VideoPlayer
    let fecha = new Date();

    if(serverDown) {
      console.log('caido');
      location.reload();
    }

    
/*     onMount(async () => {
		  VideoPlayer = (await import('svelte-video-player')).default;
	  }); */

    let title = 'Home';
    let metadescription = 'Fuga ciclismo inteligente ofrece herramientas para llevar tu rendimiento al siguiente nivel, con asesoría en nutrición y planificación de entrenamientos semanales';

    const seoProps = {
    title,
    metadescription,
  };
</script>



<SEO {...seoProps} />


{#if !(isLoading)}

    <Intro/>  

    <div class="foreground">
      <div class="container mx-auto py-12 px-4">
        <Who cta={quienesSomos.cta} texto={quienesSomos.texto} titulo={quienesSomos.titulo} urlImagen={quienesSomos.imagen}/>
      </div>

      <div class=" bg-gray-50 ">  
        <div class="container mx-auto py-12 md:px-16 px-8">
          <!-- <svelte:component this={VideoPlayer} poster={videoPoster} source={videoHome} /> -->
          <div style="padding:56.25% 0 0 0;position:relative;">
            <iframe title="video" src="https://player.vimeo.com/video/685761108?h=afbad10175" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
            </iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>

      <div class="container mx-auto md:w-3/4">
          <div class="my-16 text-black" >
            {@html content}
          </div>
      </div>

      <div class=" bg-gray-50 text-gray-800 py-16 bg-center">
        <div class="container mx-auto mt-4">
          <h2 class="font-ubuntu text-6xl text-fuga-pink mb-8 font-medium px-4">Historias Fuga</h2>
        </div>
        <div class="container mx-auto md:px-16 px-4">
          <Carousel slides={testimonios} type="testimony"/>
        </div>
      </div>

      <div class=" bg-gray-50 text-gray-800 py-16 bg-center">
        <div class="container mx-auto mt-4">
          <h2 class="font-ubuntu text-6xl text-fuga-pink mb-8 font-medium px-4">Eventos destacados</h2>
        </div>
        <div class="container mx-auto md:px-16 px-4">
          <EventsList events={$events} limit="3" />
        </div>
      </div>

    <!-- 
      <pre>
        { JSON.stringify($activities) }
      </pre>


      {#each $activities as activity }
        <div>{(activity.distance/1000).toFixed(2)}km</div>

      {/each}
 -->      
      <div class="container mx-auto my-16 px-4  ">
        <h1 class="font-ubuntu content-center text-6xl font-medium text-fuga-pink mt-16 mb-2" >Blog</h1>
        <div class=" -mx-4 md:px-16  ">
          <PostsList posts={$blogPosts} type="" limit="3"/>
        </div>
        <div class="mt-8 text-center">
          <a href="/blog" alt="blog" class=" hover:bg-white hover:text-fuga-pink transition-all border  border-fuga-pink  bg-fuga-pink font-medium text-white py-2 px-4 font-ubuntu uppercase rounded-lg group">Ver más del blog<span class="group-hover:ml-4 duration-150  ml-2 " >&LongRightArrow;</span></a>
        </div>
      </div>
      
      <div class="sponsors bg-gray-100  text-center text-gray-700 mt-16  py-16 text-6xl">
        <h2 class=" font-ubuntu font-medium text-5xl text-fuga-pink mb-16">Nuestros patrocinantes:</h2>
        <div class="container mx-auto">
          <div class="flex flex-wrap flex-row items-center">
              {#each sponsors as sponsor}
                <div class=" basis-6/12 py-6 lg:py-0 lg:basis-3/12 px-4 lg:px-10">
                    <img src="{sponsor.logo.mediaItemUrl}" alt="" class=" w-auto max-h-16  mx-auto ">
                </div>
              {/each}
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="">
          <div class="md:flex">
            <div class=" px-4 py-8 md:basis-1/2 flex justify-end bg-fuga-pink ">
              <div class="self-center text-white w-full 2xl:max-w-[768px] xl:max-w-[640px] lg:max-w-[512px] md:max-w-[384px] sm:max-w-[320px]">
                <h2 class="font-ubuntu text-3xl mb-6" >Dónde estamos ubicados</h2>
                <p class="my-4" >Av. Cordillera Arakan 321, lomas 3a sección, 78210 San Luis, S.L.P.</p>
                <p class="my-4" >San Luis Potosí, SLP</p>
              </div>
            </div>
            <div class="basis-full md:basis-1/2">
              <iframe class="  " src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14782.20346048203!2d-101.0273942!3d22.1430938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3bf8dca4e6593d8f!2sFUGA%20Lab!5e0!3m2!1ses-419!2smx!4v1656508297401!5m2!1ses-419!2smx" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" title="map"></iframe>
            </div>
          </div>
        </div>
      </div>


      <footer class=" ">
        <div class="flex flex-wrap justify-center text-center py-8 text-white bg-fuga-pink w-full">
          <h4>Fuga Ciclismo Inteligente {fecha.getFullYear()}</h4>
        </div>
      </footer>
    </div>

    {:else}

    <div class="w-full h-screen text-white bg-fuga-pink flex justify-center items-center text-4xl">
      Cargando
    </div>

    {/if}


<style>
  .foreground {
    top: 100vh;
    position: absolute;
    width: 100%;
    background-color: white;
  }
</style>