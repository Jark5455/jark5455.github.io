/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      yellow: '#ffd400',
      darkergrey: '#222222',
      teal: '#50ffb1',
      lightgrey: '#f2f2f2'
    },

    extend: {
      width: {
        none: '0%'
      }
    }
  },
  plugins: [],
}
