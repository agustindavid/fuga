<script context="module">
    import SEO from "../components/SEO/index.svelte";
    import { variables } from '../api/variables';
    import * as rax from "retry-axios";
    import { events } from '../stores/events';
    import axios from "axios";
    import axiosRetry from 'axios-retry';


    const query = `
    query getHome {
        pageBy(uri: "how-it-works") {
            id
            title
            content
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
    
            responseObj = response.data

            if (responseObj.data.pageBy) {
                const content = responseObj.data.pageBy.content;
                isLoading=false;
                serverDown=false;
                
                return {
                    props: {
                        content,
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
import Arrow from "svelte-carousel/src/components/Arrow/Arrow.svelte";
import About from "./about.svelte";

    export let content;
    let title = 'Cómo Funciona'

    const seoProps= {
        title,
    }
</script>

<SEO {...seoProps} />

{#if !(isLoading)}


<div class="container mx-auto">
    <h2 class="font-ubuntu text-2xl md:text-6xl text-fuga-pink font-medium px-4 md:px-0  lg:w-3/5 lg:my-20 mt-20 mb-8">
        Entrenamientos y planes alimenticios personalizados, basados en análisis y enfocados en lograr objetivos.
    </h2>

    <div>
        {@html content}
    </div>

</div>

{:else}

<div class="w-full h-screen text-white bg-fuga-pink flex justify-center items-center text-4xl">
  Cargando
</div>

{/if}

