/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#222831",
        // secondary: "#00ADB5",
        primary: "#222831",
        secondary: "#00ADB5",
        third: "#393E46",
        accent: "#00ADB5",
        base_col: "#EEEEEE",
        base_col_darker: "#151E31",
      },
      screens: {
        xl: "1150px",
        "2xl": "1800px",
      },
    },
  },
  plugins: [],
};
