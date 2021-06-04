module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: {
          500: "#5c5fe4",
          600: "#05DBE1",
          700: "#02c8ce",
        },
        orange: {
          500: "#fa6800",
        },
        steel: {
          500: "#647687",
        },
        mauve: {
          500: "#2980b9",
        },
        violet: {
          500: "#9b59b6",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
