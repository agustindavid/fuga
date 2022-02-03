<script>
    export let cta;
    export let texto;
    export let titulo;
    export let urlImagen;
</script>

<div class="flex md:flex-row flex-col-reverse ">
    <div class="w-full  md:w-1/2  pr-12 self-center">
        <h2 class="font-ubuntu text-4xl text-fuga-pink mb-8 font-medium mt-4">{titulo}</h2>
        <div class="text-xl paragraph">
            {@html texto}
        </div>
        <div class="mt-8">
            <a href="{cta.url}" alt="como funciona" class=" hover:bg-white hover:text-fuga-pink transition-all border  border-fuga-pink  bg-fuga-pink font-medium text-white py-2 px-4 font-ubuntu uppercase rounded-lg group">{cta.title}<span class="group-hover:ml-4 duration-150  ml-2 " >&LongRightArrow;</span></a>
        </div>
    </div>
    <div class="  w-full  md:w-1/2">
        <img src="{urlImagen.mediaItemUrl}" alt="" class="rounded-lg">
    </div>
</div>