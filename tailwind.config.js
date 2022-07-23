module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/assets/icons/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spinOnce: "spinOnce 0.3s linear",
        slideDown: "slideDown 0.5s linear",
      },
      keyframes: {
        spinOnce: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        slideDown: {
          "0%": {
            transform: "translateY(0px)",
          },
          "100%": {
            transform: "translateY(300px)",
          },
        },
      },
    },
    colors: {
      red: "#DC3A35",
      red: {
        600: "#DC3A35",
        500: "#E77572",
        400: "#EC937F",
      },
      green: "#89BE5A",
      gray: "#737373",
      yellow: {
        300: "#FFFCB5",
        200: "#FFFEDA",
      },
      black: "#1A1A1A",
      white: "#FFFEE9",
    },
  },
  plugins: [],
};
