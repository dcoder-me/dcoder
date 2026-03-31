/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#050505",
          elevated: "#0A0A0B",
          card: "#0D0D0E",
        },
        content: {
          DEFAULT: "#EDEDED",
          secondary: "#A0A0A0",
          muted: "#707070",
        },
        accent: {
          DEFAULT: "#C8A960",
          hover: "#D4B76E",
        },
      },
      fontFamily: {
        heading: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "float-slow 12s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(30px, -30px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(-20px, 20px)" },
        },
      },
    },
  },
  plugins: [],
};
