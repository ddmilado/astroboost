/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        primary: {
          DEFAULT: '#7C3AED', // Brighter purple (violet-600)
        },
      },
      borderRadius: {
        'full': '9999px',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
