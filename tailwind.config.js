/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Set Poppins as an additional font
        roboto: ["Roboto", "sans-serif"], // Set Roboto as the default sans-serif font
      },
      colors: {
        primary: "#EAC208",
        secoundery: "#16c7fc",
        deem: "#C7C1C1",
      },
      dropShadow: {
        sm: "0 4px 8px rgba(105, 105, 105, 0.2)",
      },
    },
  },
  plugins: [],
};

