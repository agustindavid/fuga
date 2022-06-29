<script>
    import Event from '../components/Event.svelte';
    import { onMount } from 'svelte';
    
    export let events;
    export let limit;
    onMount(async () => {
        const number= await events.lenght;
        if(limit == -1) {
            limit=number;
        } else {
            limit = limit;
        }
    });

 
</script>

<div>
    {#each events.slice(0, limit) as event, i}
        <div class=" lg:basis-4/12 basis-full my-4 px-4">
            <Event event={event} />
        </div>
    {/each}
</div>