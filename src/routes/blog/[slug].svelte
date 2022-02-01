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
                        }
                    }
                }
            }
            `;

         const response = await fetch(import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL, {
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
    export let slug;

    console.log(slug);

    console.log(post)
</script>

<img class=" h-screen w-full object-cover " src="{post.featuredImage.node.mediaItemUrl}" alt="">
<div class="container mx-auto content-wrap">
    <h1 class="font-ubuntu content-center text-center text-4xl text-fuga-pink my-16">{post.title}</h1>
    <div class=" w-3/4 mx-auto  text-xl">
        {@html post.content}
    </div>
</div>
