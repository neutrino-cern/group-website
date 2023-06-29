/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./node_modules/flowbite/**/*.js", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require('flowbite/plugin'), require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};