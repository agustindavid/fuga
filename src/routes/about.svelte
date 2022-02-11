<script context="module">
  export const prerender = true;
      import PageTransition from "../components/PageTransition.svelte"; 
      import { scale } from "svelte/transition";
      import { quintOut } from "svelte/easing";

    
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
        const data = responseObj.data.pageBy;
        const achievements = data.bio.lista;
  
              return {
                  props: {
                      achievements,
                      data,
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
    export let data;
    export let achievements;
</script>


<div class="container mx-auto">
  <div class="mb-16 mt-24">
    <img class="rounded-lg"  src="{data.featuredImage.node.mediaItemUrl}" alt="">
  </div>
  <div class="mx-auto w-10/12">
    <div class="flex flex-row  my-16">
      <div class="basis-4/12">
        <h2 class="font-ubuntu content-center text-left text-4xl text-fuga-pink">Jorge Lino</h2>
        <p class=" mt-2">Ciclista Profesional, Nutriólogo, Coach certificado</p>
        <p class="mt-4" ><a href="https://instagram.com/fugaciclismointeligente" target="_blank" class=" text-black text-3xl "><i class="fab fa-instagram"></i></a></p>
      </div>
      <div class="basis-8/12">
        <div class="text-left text-2xl">
          {@html data.content}
        </div>
      </div>
    </div>
    {#each achievements as achievement}
      <div class="flex flex-col md:flex-row mb-8 border-gray-900 border-b pb-8">
        <div class="basis-1/3">
          <h2 class="font-ubuntu text-3xl text-fuga-pink">{achievement.aspectos.titulo}</h2>
        </div>
        <div class="basis-2/3">
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

<style>
  li::before {
    content: "-";
    margin-right: 15px;
  }
</style>