/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  theme: {
    colors: {
      yellow: "#ffd400",
      darkergrey: "#222222",
      white: "#ffffff",
      lightgrey: "#f2f2f2",
      black: "#000000",
    },

    fontWeight: {
      bold: "bold",
    },
  },

  plugins: [],
};
