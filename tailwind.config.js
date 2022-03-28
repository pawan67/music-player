module.exports = {
  daisyui: {
    themes: [
      "garden",
      "dark",
      "light",
      "black",
      "lemonade",
      "wireframe",
      "coffee",
    ],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
};
