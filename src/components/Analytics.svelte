<script>
    import { page } from '$app/stores';

    $: {
        if(typeof gtag != 'undefined') {
            gtag('config', 'G-TLLZ279GGC', {
                page_title: $page.url.href,
                page_path: $page.url.href,     
            });
        }
    }
</script> 

<svelte:head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-TLLZ279GGC"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-TLLZ279GGC');
    </script>
</svelte:head>