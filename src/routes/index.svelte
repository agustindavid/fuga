<script context="module">
    import Intro from '../components/Intro.svelte';
    import Carousel from '../components/Carousel.svelte';
    import Who from '../components/Who.svelte';
    import { slide } from 'svelte/transition';
    import PostsList from "../components/PostsList.svelte";
    import { blogPosts } from "../stores/posts";
    

    const query = `
    query getHome {
  pageBy(uri: "home") {
    id
    title
    slidesHome {
      slides {
        slide {
          mediaItemUrl
        }
      }
    }
    home {
      quienesSomos {
        cta {
          target
          title
          url
        }
        texto
        titulo
        imagen {
          mediaItemUrl
        }
      }
    }
    sponsors {
      sponsors {
        link
        logo {
          mediaItemUrl
        }
      }
    }
    testimonios {
      testimonio {
        image {
          mediaItemUrl
        }
        name
        text
      }
    }
    content
  }
}


    `;
  
      export async function load({} ) {
      const response = await fetch("https://mdsmx.xyz/fuga/graphql", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
  
          if (response.ok) {
        const responseObj = await response.json();
        const slides = responseObj.data.pageBy.slidesHome.slides;
        const quienesSomos = responseObj.data.pageBy.home.quienesSomos;
        const testimonios = responseObj.data.pageBy.testimonios.testimonio;
        const sponsors = responseObj.data.pageBy.sponsors.sponsors;
        const content = responseObj.data.pageBy.content;
  
              return {
                  props: {
                      slides,
                      quienesSomos,
                      content,
                      testimonios,
                      sponsors,
                  }
              };
          }
  
          return {
              status: response.status,
              error: new Error(`Could not load ${url}`)
          };
      }
</script>

<script>
    import { onMount } from 'svelte';
    export let slides;
    export let quienesSomos;
    export let content;
    export let testimonios;
    export let sponsors;
    const poster = 'http://chelini.local/wp-content/uploads/2021/12/2022-Cannondale-Jekyll-2-First-Look-04861-1200x630.jpg';
    const source = [
    'http://chelini.local/wp-content/uploads/2021/12/pexels-dmitry-marchenkov-10452536.mp4',
    ];

    let VideoPlayer
    
    onMount(async () => {
		  VideoPlayer = (await import('svelte-video-player')).default;
	  });
</script>



    <Intro/>

    <div class="foreground">
      <div class="container mx-auto py-12">
        <Who cta={quienesSomos.cta} texto={quienesSomos.texto} titulo={quienesSomos.titulo} urlImagen={quienesSomos.imagen}/>
      </div>
      
      <div class="">
        <Carousel slides={slides} type="images"/>
      </div>

      <div class="container mx-auto py-12 px-16">
        <svelte:component this={VideoPlayer} poster={poster} source={source} />
      </div>
      <div class="container mx-auto">
        <div>
         <h1>
          que ofrecemos
          </h1>
        </div>

        <div>
          {@html content}
        </div>

        <div>
          <h1>
          para quien es
          </h1>
        </div>

      </div>

      <div class="container mx-auto mt-16">
        <h2 class="font-ubuntu text-6xl text-fuga-pink mb-8 font-medium">Historias Fuga</h2>
      </div>

      <div class="bg-[url('http://fuga.local/wp-content/uploads/2022/01/17545.jpg')] bg-cover bg-opacity-50 text-gray-800 py-16 bg-center">
        <div class="container mx-auto px-1 md:px-16">
          <Carousel slides={testimonios} type="testimony"/>
        </div>
      </div>

      <div class="container mx-auto my-16">
        <h1 class="font-ubuntu content-center text-6xl font-medium text-fuga-pink mt-16 mb-2" >Blog</h1>
        <PostsList posts={$blogPosts} type="" limit="2"/>
      </div>
      
      <div class="sponsors bg-gray-100  text-center text-gray-700 my-16  py-16 text-6xl">
        <h2 class=" font-ubuntu font-medium text-5xl text-fuga-pink mb-16">Nuestros patrocinantes:</h2>
        <div class="container mx-auto">
          <div class="flex flex-row items-center">
              {#each sponsors as sponsor}
                <div class=" basis-4/12">
                    <img src="{sponsor.logo.mediaItemUrl}" alt="" class=" w-auto max-h-24 mx-auto ">
                </div>
              {/each}
            </div>
        </div>
      </div>

      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14782.143259458944!2d-101.0263289!3d22.1436672!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1013c5568b179dfa!2sPlaza%20Cordillera!5e0!3m2!1sen!2smx!4v1642406002361!5m2!1sen!2smx" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" title="map"></iframe>
      </div>
</div>

<style>
  .foreground {
    top: 100vh;
    position: absolute;
    width: 100%;
    background-color: white;
  }
</style>