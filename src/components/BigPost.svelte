<script>
    export let post;
    
    export let sizes=post.featuredImage.node.mediaDetails.sizes;
    const image = sizes.filter(function(size){
        if(size.name=='post-image'){
            return size;
        }
    });
</script>

<div class="flex flex-col lg:flex-row group text-black hover:text-white">
    <div class=" md:basis-9/12 basis-8/12">
        {#if post.featuredImage}
            <div class="overflow-hidden lg:rounded-tr-none rounded-tr-xl rounded-t-xl lg:rounded-l-xl  h-full">
                <a href="/blog/{post.slug}"><img class=" transition object-cover duration-300 group-hover:scale-105" src="{image[0].sourceUrl}" alt=""></a>
            </div>   
        {/if}
    </div>
    <div class="basis-4/12 md:basis-3/12 items-center border-0 border-slate-500 lg:border-l-0 group-hover:bg-opacity-100 transition duration-300 bg-opacity-5 p-4 bg-fuga-pink rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none">     
        <h2 class="font-ubuntu text-3xl"><a href="/blog/{post.slug}">{post.title}</a></h2>
        <a href="/blog/{post.slug}"  >
            Leer <span class="group-hover:ml-1 transition duration-75 " >&LongRightArrow;</span>
        </a>
    </div>
</div>