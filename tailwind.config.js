/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        main: "#25fffb",
        offmain: "#fc5310",
        primary: "#0b0c10",
        secondary: "#dafeff",
        tertiary: "#1f2833",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["'DM Serif Display'", "serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
