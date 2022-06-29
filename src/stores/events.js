import { writable } from "svelte/store";
import axios from "axios";
import { variables }  from '../api/variables';
import axiosRetry from 'axios-retry';


export const events = writable([]);
export let loaded = false;

const query = `
query getEvents {
  events {
    nodes {
      title
      slug
      eventsfields {
        startDate
        endDate
        ubicacion
        distancia
        altimetria
      }
      eventTypes {
        nodes {
          name
        }
      }
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




export const fetchEvents = async () => {

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
      const loadedEvents = responseObj.data.events.nodes;
      //console.log(loadedEvents);
      events.set(loadedEvents);
      loaded = true;  
    } catch(error) {
      console.log(error);
    }

}
fetchEvents();