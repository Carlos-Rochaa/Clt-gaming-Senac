/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/assets/Ghost2 4k.jpeg')",
      },
      width: {
        128: "32rem",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        semi: ["Montserrat SemiBold", "sans-serif"],
        "medium-italic": ["Montserrat Medium Italic", "sans-serif"],
      },
      colors: {
        "gradiente-header-1": "#230663",
        "gradiente-header-2": "#080D21",
        "main-bg": "#150942",
        "azul-btn": "#590EFF",
        "text-color": "#080D21",
        "amarelo-dourado": "#D4C089",
        "gradiente-price-1": "#6559f9",
        "gradiente-price-2": "#6FB0FA",
        "cor-hr": "#801CFF",
        cards: "#3B1E7A",
      },
    },
  },
  plugins: [],
};
