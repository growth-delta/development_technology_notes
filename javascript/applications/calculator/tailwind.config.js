/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),],
  // https://daisyui.com/docs/themes/
  daisyui: {
    themes: [
      "pastel",
      "dracula",
      "cmyk",
    ],
  },
};

