<script context="module">
  import PostsList from "../../components/PostsList.svelte";
  import { blogPosts } from "../../stores/posts";
  import SEO from "../../components/SEO/index.svelte"

</script>

<script>
    //console.log($blogPosts);
    //export let posts;

    let title = 'Blog';


const seoProps = {
title,
slug: '',
};
</script>

<SEO {...seoProps} />

<div class="container mx-auto my-16">
  <h1 class="font-ubuntu content-center text-center text-6xl font-medium text-fuga-pink mt-16 mb-2" >Blog</h1>
  <PostsList posts={$blogPosts} type="big" limit="-1"/>
</div>
