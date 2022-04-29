import { writable } from "svelte/store";

export const blogPosts = writable([]);
let loaded = false;

const query = `
query getPosts {
 posts {
   nodes {
     id
     slug
     title
     featuredImage {
       node {
         mediaItemUrl
         mediaDetails {
           sizes {
             sourceUrl
             name
           }
         }
       }
     }
   }
 }
}
`;




export const fetchPosts = async () => {
  try {
    if (loaded) return;

      const response = await fetch("https://mdsmx.xyz/fuga/graphql", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

  
  
      if(response.ok) {
        const responseObj = await response.json();
        const loadedPosts = responseObj.data.posts.nodes;
    //console.log(loadedPosts);
        blogPosts.set(loadedPosts)
        loaded = true;
      }
    } catch {
      return;
    }

      }
fetchPosts();