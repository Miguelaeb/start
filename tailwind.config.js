/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        WorkSans: ["Work Sans", "sans-serif"],
        CrimsonText: ["Crimson Text", "sans-serif"],
    },

    boxShadow: {
      'card-shadow': '3px 4px 12px 1px rgba(0, 0, 0, 0.25)',
      'serviceCardShadow': '3px 4px 12px 1px rgba(0, 0, 0, 0.25)',
    },
    },
  },
  plugins: [],
}