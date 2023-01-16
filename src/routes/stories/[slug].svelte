
<script context="module">
    import SEO from "../../components/SEO/index.svelte"
    import { variables } from "../../api/variables";
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
        query getStory {
            storyBy(slug: "agustin-navarro") {
                title
                content
                date
                excerpt
                featuredImage {
                    node {
                        mediaItemUrl
                    }
                }
            }
        }
        `;

        try {
            const response = await axios({ 
            url: variables.basePath,
            method: 'POST',
            timeout: 9000,
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                query: query,
            },
            });
        
            console.log(response);
            responseObj = await response.data;
            if (responseObj.data.storyBy) {
                const post = responseObj.data.storyBy;
                isLoading=false;
                serverDown=false;
                
                return {
                    props: {
                        post,
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

   
    export let post;
    //export let sizes=post.featuredImage.node.mediaDetails.sizes;
    /* const image = sizes.filter(function(size){
        if(size.name=='single-post-image'){
            return size;
        }
    }); */

    const image = post.featuredImage.node.mediaItemUrl;
    export let slug;


    console.log(slug);

    console.log(post)

    let title = post.title;
    let metadescription=post.excerpt.replace(/(<([^>]+)>)/gi, "");
    let datePublished=post.date;




const seoProps = {
title,
slug,
metadescription,
datePublished,
};
</script>

<SEO
  article
  {title}
  {metadescription}
  {datePublished}
/>


<div class="mx-auto container mb-8 md:h-screen-80 mt-24 px-4 lg:px-0 xl:px-0 2xl:px-0">
    <!-- <img class="w-100 rounded-2xl object-cover " src="{image[0].sourceUrl}" alt=""> -->
    <div class="flex flex-col h-full overflow-hidden lg:flex-row group text-white hover:text-white bg-fuga-blue">
        <div class=" md:basis-6/12 basis-6/12">
            <img class="w-full h-full object-cover object-center" src="{image}" alt="">
        </div>
        <div class="basis-6/12 md:basis-6/12 lg:h-full flex content-center justify-center flex-col group-hover:bg-opacity-100 transition duration-300 p-8 bg-fuga-blue relative lg:overflow-hidden">
            <div class=" absolute w-20 h-20 lg:bg-white opacity-30 group-hover:w-28 group-hover:-left-14 group-hover:-top-14 group-hover:h-28 transition-all -left-10 rounded-full -top-10"></div>
            <div class=" absolute w-20 h-20 lg:bg-white opacity-30 group-hover:w-28 group-hover:-right-14 group-hover:-top-14 group-hover:h-28 transition-all -right-10 rounded-full -top-10"></div>
            <div class=" absolute w-20 h-20 lg:bg-white opacity-30 group-hover:w-28 group-hover:-right-14 group-hover:-bottom-14 group-hover:h-28 transition-all -right-10 rounded-full -bottom-10"></div>
            <div class=" absolute w-20 h-20 lg:bg-white opacity-30 group-hover:w-28 group-hover:-left-14 group-hover:-bottom-14 group-hover:h-28 transition-all -left-10  rounded-full -bottom-10"></div>  
            <h2 class="font-ubuntu text-3xl text-white">{post.title}</h2>
            <div class="text-xl mt-8">
                {@html post.excerpt}
            </div>
        </div>
    </div>
</div>
<div class="container mx-auto content-wrap px-4 lg:px-8 xl:px-0 2xl:px-0">
    <div class=" w-100 md:w3/4 md:px-16 leading-8 mx-auto  text-xl">
        {@html post.content}        
    </div>
</div>