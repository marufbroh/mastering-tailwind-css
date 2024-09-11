/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        myColor: {
          400: "#1fb6ff",
        },
      },
    },
  },
  plugins: [],
  
};
