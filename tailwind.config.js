/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  darkMode: "media",
  theme: {
    // screens: {
    //   sm: "640px",
    //   lg: "1024px",
    //   desktop: "2560px",
    // },
    colors: {
      blue: {
        light: "f4f4f4",
        DEFAULT: "f4f4f3",
        dark: "f4f4f5",
      },
      // it means other colors will be gone
    },
    extend: {
      screens: {
        sm: "640px",
        lg: "1024px",
        desktop: "2560px",
      },
    },
  },
  plugins: [],
};
