<script context="module">
  export const prerender = true;
      import PageTransition from "../components/PageTransition.svelte"; 
      import { scale } from "svelte/transition";
      import { quintOut } from "svelte/easing";
      import SEO from "../components/SEO/index.svelte";
      import { variables } from '../api/variables';
      import * as rax from "retry-axios";
      import axios from "axios";
      import axiosRetry from 'axios-retry';
    
      const query = `
        query getBio {
          pageBy(uri: "bio") {
            content
            title
            pageId
            bio {
              lista {
                aspectos {
                  titulo
                  items {
                    item
                  }
                }
              }
            }
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      `;

    let isLoading = true;
    let serverDown=true;
  
    export async function load({} ) {
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
          url:variables.basePath,
          method: 'POST',
          timeout: 9000,
          data: {
              query: query,
          },
        });
  
        responseObj = await response.data;
        if (responseObj.data.pageBy) {
          const data = responseObj.data.pageBy;
          const achievements = data.bio.lista;
          isLoading=false;
          serverDown=false;
          
          return {
            props: {
              achievements,
              data,
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
    export let data;
    export let achievements;

    let title = 'Bio';


    const seoProps = {
    title,
    slug: '',
  };
    
</script>

<SEO {...seoProps} />

{#if !(isLoading)}

<div class="container mx-auto">
  <div class="mb-16 mt-24  ">
    <img class="md:rounded-2xl"  src="{data.featuredImage.node.mediaItemUrl}" alt="">
  </div>
  <div class="mx-auto w-12/12 px-4 lg:w-10/12">
    <div class="md:flex md:flex-row  mt-16 mb-8">
      <div class="basis-4/12 mb-8 md:mb-0">
        <h2 class="font-ubuntu content-center text-left text-4xl text-fuga-pink">Jorge Lino</h2>
        <p class=" mt-2">Ciclista Profesional, Nutriólogo, Coach certificado</p>
        <p class="mt-4" ><a href="https://www.instagram.com/jorgelino_nutricioninteligente/" target="_blank" class=" text-black text-3xl "><i class="fab fa-instagram"></i></a></p>
      </div>
      <div class="basis-8/12">
        <div class="text-left text-xl bio-content">
          {@html data.content}
        </div>
      </div>
    </div>
    {#each achievements as achievement}
      <div class="flex flex-col md:flex-row mb-8 border-gray-900 border-t pt-8">
        <div class="basis-1/3">
          <h2 class="font-ubuntu text-3xl text-fuga-pink">{achievement.aspectos.titulo}</h2>
        </div>
        <div class="basis-2/3 text-xl">
          <ul>
            {#each achievement.aspectos.items as item}
              <li class=" my-2 relative ">{item.item}</li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>
</div>

{:else}

<div class="w-full h-screen text-white bg-fuga-pink flex justify-center items-center text-4xl">
  Cargando
</div>

{/if}

<style>
  li::before {
    content: "-";
    margin-right: 15px;
  }
</style>