/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Onest", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        background: "#f7f8ff",
        bgYellow: "#fae36c",
        bgPurple: "#888be8",
        bgGreen: "rgb(34 197 94 / var(--tw-bg-opacity));",
        textGray: "#3d3b48",
      },
    },
  },
  plugins: [],
};
