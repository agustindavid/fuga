<script>
    export let post;
    export let sizes=post.featuredImage.node.mediaDetails.sizes;
    const image = sizes.filter(function(size){
        if(size.name=='post-image'){
            return size;
        }
    });
</script>

<div class="group text-black hover:text-white">
    {#if post.featuredImage}
        <div class=" overflow-hidden rounded-t-xl ">
            <a href="/blog/{post.slug}"><img class=" transition  duration-300 group-hover:scale-105" src="{image[0].sourceUrl}" alt=""></a>
        </div>
    {/if}
    <div class="group-hover:bg-opacity-100 transition duration-300 bg-opacity-5 p-4 bg-fuga-pink rounded-b-xl ">
        <h2 class="font-ubuntu text-3xl "><a href="/blog/{post.slug}">{post.title}</a></h2>
        <a href="/blog/{post.slug}">
            Leer <span class="group-hover:ml-1 transition duration-75 " >&LongRightArrow;</span>
        </a>
    </div>
</div>