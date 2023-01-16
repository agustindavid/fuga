const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        'fuga-pink': '#e50d4e',
        'fuga-blue': '#021148',
      },
      fontFamily: {
        'ubuntu': ['"Ubuntu"', 'sans-serif']
      },
      height: {
        'screen-80': '80vh',
        'screen-60': '60vh',
      }
    },
  },

  plugins: [],
};

module.exports = config;
