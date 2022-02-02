import { isoImport } from "vite-plugin-iso-import";
import adapter from '@sveltejs/adapter-static';


/** @type {import('@sveltejs/kit').Config} */
const config = {
  //preprocess: [preprocess({})],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: adapter(),


    vite: {
      plugins: [isoImport()],
      resolve: {
        dedupe: ["svelte"],
      },
      optimizeDeps: {
          include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep', 'svelte-carousel', 'svelte-video-player']
      },
    },

    router: false,
  },
};

export default config;
