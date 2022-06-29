<script>
    import DateFormatter from "./DateFormatter.svelte";
    export let event;

    export let sizes=event.featuredImage.node.mediaDetails.sizes;
    const image = sizes.filter(function(size){
        if(size.name=='single-post-image'){
            return size;
        }
    });
</script>

<div class="flex flex-row flex-wrap my-8 group">
    <div class="lg:basis-4/12 basis-full pl-0 md:pl-4 pr-0 my-0">
        <div class="relative">
            <a href="events/{event.slug}">
                <div class=" overflow-hidden ">
                    <img src="{image[0].sourceUrl}" alt="" class=" transition-all group-hover:scale-105 ">
                </div>
                <div class="absolute bg-black opacity-50 top-0 w-full h-full  "></div>
                <div class="absolute w-full top-0 flex h-full justify-center items-center text-5xl text-white ">
                    <DateFormatter date={event.eventsfields.startDate} />
                </div>
            </a>
        </div>
    </div>
    <div class="lg:basis-8/12 basis-full my-0  bg-slate-300">
        <div class="p-8">
            <a href="events/{event.slug}"><h2 class="font-ubuntu text-3xl text-slate-800 mb-4 group-hover:text-fuga-pink  transition-all ">{event.title} <i class=" text-2xl fas fa-arrow-right"></i></h2></a>
            <p class="mb-2 group-hover:font-bold "><i class="fas fa-map-marker-alt text-fuga-pink mr-2 w-5"></i>{event.eventsfields.ubicacion}</p>
            <p class="mb-2 group-hover:font-bold "><i class="fas fa-biking text-fuga-pink mr-2 w-5"></i>{event.eventTypes.nodes[0].name}</p>
            <p class="mb-2 group-hover:font-bold "><i class="fas fa-ruler-horizontal text-fuga-pink mr-2 w-5"></i>{event.eventsfields.distancia}</p>
            <p class="mb-2 group-hover:font-bold "><i class="fas fa-chart-line text-fuga-pink mr-2 w-5"></i>{event.eventsfields.altimetria}</p>
        </div>
    </div>
</div>