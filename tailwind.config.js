/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        bg: "#1f1f38",
        variant: "#2c2c6c",
        primary: "#4db5ff",
        primary_variant: " rgba(77, 181, 255, 0.4)",
        light: " rgba(255, 255, 255, 0.6)",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
