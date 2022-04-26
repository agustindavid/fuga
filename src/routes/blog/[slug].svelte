
<script context="module">
    import SEO from "../../components/SEO/index.svelte"


       export async function load({ url, params } ) {

        const slug= params.slug;
        

        const query = `
            query getPost {
                postBy(slug: "${slug}") {
                    title
                    content
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

         const response = await fetch("https://mdsmx.xyz/fuga/graphql", {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({ query }),
         });
     
             if (response.ok) {
               const responseObj = await response.json();
               const post = responseObj.data.postBy;
     
                 return {
                     props: {
                         post,
                         slug,
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

   
    export let post;
    export let sizes=post.featuredImage.node.mediaDetails.sizes;
    const image = sizes.filter(function(size){
        if(size.name=='single-post-image'){
            return size;
        }
    });
    export let slug;


    console.log(slug);

    console.log(post)

    let title = post.title;


const seoProps = {
title,
slug,
};
</script>

<SEO {...seoProps} />

<div class="container mx-auto mb-8 mt-24 px-4 lg:px-8 xl:px-8 2xl:px-8">
    <!-- <img class="w-100 rounded-2xl object-cover " src="{image[0].sourceUrl}" alt=""> -->
    <div class="flex flex-col lg:flex-row group text-black hover:text-white">
        <div class=" md:basis-8/12 basis-8/12">
            {#if post.featuredImage}
                <div class="overflow-hidden lg:rounded-tr-none rounded-tr-xl rounded-t-xl lg:rounded-l-xl  h-full">
                    <img class=" transition object-cover h-full  duration-300 group-hover:scale-105" src="{image[0].sourceUrl}" alt="">
                </div>   
            {/if}
        </div>
        <div class="basis-4/12 md:basis-4/12 items-center border-0 border-slate-500 lg:border-l-0 group-hover:bg-opacity-100 transition duration-300 bg-opacity-5 p-4 bg-fuga-pink rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none">     
            <h2 class="font-ubuntu text-3xl">{post.title}</h2>
        </div>
    </div>
</div>
<div class="container mx-auto content-wrap px-4 lg:px-8 xl:px-8 2xl:px-8">
    <div class=" w-100 md:w3/4 md:px-16 leading-8 mx-auto  text-xl">
        {@html post.content}
    </div>
</div>
