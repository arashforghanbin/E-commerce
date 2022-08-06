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
        wiggle: "wiggle 1s linear",
        swing: "swing 1s cubic-bezier(0.75,0.4,1,1)",
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
        wiggle: {
          "0%": {
            transform: "  rotate(0deg)",
          },
          "25%": {
            transform: "rotate(10deg)",
          },
          "50%": {
            transform: "rotate(0deg)",
          },
          "75%": {
            transform: "rotate(10deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        swing: {
          "0%": {
            transform: "perspective(200px) rotateX(-90deg)",
          },
          "25%": {
            transform: " perspective(200px) rotateX(10deg)",
          },
          "50%": {
            transform: "perspective(200px) rotateX(-10deg)",
          },
          "75%": {
            transform: "perspective(200px) rotateX(10deg)",
          },
          "100%": {
            transform: "perspective(200px)  rotateX(0deg)",
          },
        },
      },
    },
    colors: {
      red: {
        800: "#E04E49",
        700: "#C63430",
        600: "#DC3A35",
        500: "#E77572",
        400: "#EC937F",
      },
      green: {
        500: "#a1cb7b",
        600: "#89BE5A",
        700: "#6e9848",
      },
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
