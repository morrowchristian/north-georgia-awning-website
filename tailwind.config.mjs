/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
        accent:  "#ea580c",
        dark:    "#1e293b",
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}