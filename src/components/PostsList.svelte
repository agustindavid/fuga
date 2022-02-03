<script>
    import Post from '../components/Post.svelte';
    import BigPost from '../components/BigPost.svelte';
    import { onMount } from 'svelte';

    export let posts;
    export let type;
    export let limit;

    onMount(async () => {
        const number= await posts.lenght;
        if(limit == -1) {
            limit=number;
        } else {
            limit = limit;
        }
    });
    console.log(limit);
 
</script>

<div class="flex flex-row flex-wrap">
    {#each posts.slice(0, limit) as post, i}
        {#if i==0}
            {#if type=='big'}
                <div class="basis-full px-4 my-8">
                    <BigPost post={post} />
                </div>
            {:else}
                <div class="lg:basis-1/2 basis-full px-4 my-4">
                    <Post post={post} />
                </div>
            {/if}
        {:else}
            <div class=" lg:basis-1/2 basis-full my-4 px-4">
                <Post post={post} />
            </div>
        {/if}
    {/each}
</div>