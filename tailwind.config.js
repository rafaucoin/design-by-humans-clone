/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    keyframes: {
      wiggle: {
        "0%, 100%": { scale: "0" },
        "50%": { scale: "1" },
      },
    },
  },
  plugins: [],
};
