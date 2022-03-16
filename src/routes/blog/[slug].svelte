<script context="module">

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
</script>

<div class="container mx-auto mb-8 mt-24">
    <img class="w-100 rounded-2xl object-cover " src="{image[0].sourceUrl}" alt="">
</div>
<div class="container mx-auto content-wrap">
    <h1 class="font-ubuntu content-center text-center  font-medium text-4xl text-fuga-pink mb-8 mt-0">{post.title}</h1>
    <div class=" w-3/4 leading-8 mx-auto  text-xl">
        {@html post.content}
    </div>
</div>
