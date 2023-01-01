/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Supreme-Variable"],
      },
      colors: {
        accent: {
          100: "#CFDAF5",
          500: "#0D45CD",
        },
      },
    },
  },
  plugins: [],
};
