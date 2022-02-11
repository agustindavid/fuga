import { isoImport } from "vite-plugin-iso-import";
import adapter from '@sveltejs/adapter-netlify';


/** @type {import('@sveltejs/kit').Config} */
const config = {
  //preprocess: [preprocess({})],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: adapter(),
    prerender: {
      crawl: true,
      enabled: true,
      onError: "continue",
      entries: ['*']
    },
    vite: {
      plugins: [isoImport()],
      resolve: {
        dedupe: ["svelte"],
      },
      optimizeDeps: {
          include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep', 'svelte-carousel', 'svelte-video-player']
      },
    },

    browser : {
      router: false,
    }
  },
};

export default config;
