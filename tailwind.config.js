/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      tablet: '360px', //sm
      laptop: '840px', //md
      desktop: '1440px', //lg
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}

