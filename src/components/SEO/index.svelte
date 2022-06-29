<script>
    //import website from '$lib/config/website';
   
    //const { siteLanguage, siteTitle } = website;
   
   
    let pageTitle;
    export let title;
    export let metadescription
  </script>
    
  <svelte:head>
    <title>{title} - Fuga</title>
    <meta name="description" content="{metadescription}" />
    <meta
      name="robots"
      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />
  </svelte:head>