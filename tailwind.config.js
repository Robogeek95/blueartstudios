module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#0B1A5E",
      light: "#5976F8",
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#0B1A5E",
      light: "#5976F8",
      secondary: "#ffed4a",
      danger: "#e3342f",
      tertiary: "#DCEAED"
    }),
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
