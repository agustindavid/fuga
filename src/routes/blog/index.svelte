<script context="module">
  import PostsList from "../../components/PostsList.svelte";
  import { blogPosts } from "../../stores/posts";
</script>

<script>
    //console.log($blogPosts);
    //export let posts;
</script>

<div class="container mx-auto my-16">
  <h1 class="font-ubuntu content-center text-center text-6xl font-medium text-fuga-pink mt-16 mb-2" >Blog</h1>
  <PostsList posts={$blogPosts} type="big" limit="-1"/>
</div>
