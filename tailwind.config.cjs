const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        'fuga-pink': '#e50d4e',
      },
      fontFamily: {
        'ubuntu': ['"Ubuntu"', 'sans-serif']
      }
    },
  },

  plugins: [],
};

module.exports = config;
