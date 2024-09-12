/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  darkMode: "media",
  theme: {
    screens: {
      sm: "640px",
      lg: "1024px",
      desktop: "2560px",
    },
    extend: {},
  },
  plugins: [],
};
