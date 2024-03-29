import { writable } from "svelte/store";
import axios from "axios";
import { variables }  from '../api/variables';
import axiosRetry from 'axios-retry';



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
  axiosRetry(axios, {
    retries: 3, // number of retries
    retryDelay: (retryCount) => {
      console.log(`retry attempt: ${retryCount}`);
      return retryCount * 2000; // time interval between retries
    },
    retryCondition: (error) => {
      // if retry condition is not specified, by default idempotent requests are retried
      console.log(error);
    },
  })
    if (loaded) return;
    try {
      const response = await axios({
        url : variables.basePath,
        method: 'POST',
        timeout: 9000,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          query: query,
        },
      });

  
        const responseObj = await response.data;
        const loadedPosts = responseObj.data.posts.nodes;
        blogPosts.set(loadedPosts)
        loaded = true;
    } catch(error) {
      console.log(error);
      }
    }
fetchPosts();