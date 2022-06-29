<script context="module">
    import SEO from "../../components/SEO/index.svelte";
    import { variables } from '../../api/variables';
    import axios from "axios";
    import axiosRetry from 'axios-retry';

    let isLoading = true;
    let serverDown=true;

    export async function load({ url, params } ) {
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

        const slug= params.slug;
        let responseObj;


        const query = `
            query getEvent {
                eventBy(slug: "${slug}") {
                    title
                    content
                    eventsfields {
                        startDate
                        endDate
                        ubicacion
                        distancia
                        altimetria
                        website
                    }
                    eventTypes {
                        nodes {
                        name
                        }
                    }
                    featuredImage {
                        node {
                            mediaItemUrl
                            mediaDetails {
                                sizes {
                                    sourceUrl
                                    name
                                }
                            }
                        }
                    }
                }
            }
            `;

        try {
            const response = await axios({
                url : variables.basePath,
                method: 'POST',
                timeout: 9000,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    query: query,
                },
            });
        
            responseObj = await response.data;
            if (responseObj.data.eventBy) {
                const event = responseObj.data.eventBy;
                isLoading=false;
                serverDown=false;
        
                return {
                    props: {
                        event,
                        slug,
                    }
                };
            } else {
                return {
                    props: {
                        isLoading,
                    }
                }
            }
        }catch(error){
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

   
    export let event;
    export let sizes=event.featuredImage.node.mediaDetails.sizes;
    const image = sizes.filter(function(size){
        if(size.name=='single-post-image'){
            return size;
        }
    });
    export let slug;


    console.log(slug);

    console.log(event)

    let title = event.title;


const seoProps = {
title,
slug,
};
</script>

<SEO {...seoProps} />

{#if !(isLoading)}

<div class="container mx-auto mb-8 mt-24 px-4 lg:px-8 xl:px-8 2xl:px-8">
    <!-- <img class="w-100 rounded-2xl object-cover " src="{image[0].sourceUrl}" alt=""> -->
    <div class="flex flex-col lg:flex-row group text-black hover:text-white">
        <div class=" md:basis-8/12 basis-8/12">
            {#if event.featuredImage}
                <div class="overflow-hidden lg:rounded-tr-none rounded-tr-xl rounded-t-xl lg:rounded-l-xl  h-full">
                    <img class=" w-full transition object-cover duration-300 group-hover:scale-105" src="{image[0].sourceUrl}" alt="">
                </div>   
            {/if}
        </div>
        <div class=" basis-4/12 md:basis-4/12 content-center border-0 border-slate-500 lg:border-l-0 group-hover:bg-opacity-100 transition duration-300 bg-opacity-5 p-4 bg-fuga-pink rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none">     
            <h2 class="font-ubuntu text-4xl group-hover:text-white mb-16" >{event.title}</h2>
            <p class="mb-8 text-2xl"><i class="fas fa-map-marker-alt group-hover:text-white mr-2 w-5"></i>{event.eventsfields.ubicacion}</p>
            <p class="mb-8 text-xl"><i class="fas fa-biking group-hover:text-white mr-2 w-5"></i>{event.eventTypes.nodes[0].name}</p>
            <p class="mb-8 text-xl"><i class="fas fa-ruler-horizontal group-hover:text-white mr-2 w-5"></i>{event.eventsfields.distancia}</p>
            <p class="mb-8 text-xl"><i class="fas fa-chart-line group-hover:text-white mr-2 w-5"></i>{event.eventsfields.altimetria}</p>
            <p class="mb-8 text-xl"><i class="fas fa-link group-hover:text-white mr-2 w-5"></i><a href="{event.eventsfields.website}" target="_blank">Sitio oficial</a></p>
        </div>
    </div>
</div>
{#if event.content}
<div class="container mx-auto content-wrap px-4 lg:px-8 xl:px-8 2xl:px-8">
    <div class=" w-100 md:w3/4 md:px-16 leading-8 mx-auto  text-xl  event-content">
        {@html event.content}
    </div>
</div>
{/if}

{:else}

<div class="w-full h-screen text-white bg-fuga-pink flex justify-center items-center text-4xl">
  Cargando
</div>

{/if}