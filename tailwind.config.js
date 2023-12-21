/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        handwritting: ["Luxurious Script", "sans-serif"],
        handwritting2: ["Parisienne", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        classic: "url('./assets/background_classic.jpg')",
        premium: "url('./assets/background_premium.jpg')",
      },
    },
  },
  plugins: [],
};
