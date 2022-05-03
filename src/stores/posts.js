import { writable } from "svelte/store";
import axios from "axios";
import * as rax from "retry-axios";

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
  const interceptorId = rax.attach();
  console.log(interceptorId);
    if (loaded) return;

      const response = await axios({
        url : 'https://mdsmx.xyz/fuga/graphql',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          query: query,
        },
      });

if(response.status == 200) {
  
        const responseObj = await response.data;
        const loadedPosts = responseObj.data.posts.nodes;
        blogPosts.set(loadedPosts)
        loaded = true;
      
} else {
  console.log('error');
}
      }
fetchPosts();