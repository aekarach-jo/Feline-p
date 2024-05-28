/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        prompt: ["Prompt", "sans-serif"],
      },
      colors: {
        primary: "#04f0ff",
        primaryBlue: "#3F9EAB",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
    },
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "rotate(-6deg)" },
        "50%": { transform: "rotate(6deg)" },
      },
      fade: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      fadeOut: {
        "0%": { opacity: 1 },
        "100%": { opacity: 0 },
      },
      slide: {
        "0%": { width: "980px", opacity: 0 },
        "100%": { width: "1000px", opacity: 1 },
      },
      smooth: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      swing1: {
        "0%, 100%": { scale: "1.3", opacity: "0.9" },
        "50%": { scale: "1", opacity: "1" },
      },
      swing2: {
        "0%, 100%": { scale: "1.3", opacity: "0.9" },
        "80%": { scale: "1", opacity: "1" },
      },
      swing3: {
        "0%, 100%": { scale: "1.3", opacity: "0.9" },
        "30%": { scale: "1", opacity: "1" },
      },
    },
    animation: {
      wiggle: "wiggle .5s ease-in-out infinite",
      fade: "fade 1s ease-in-out infinite",
      fadeOut: "fadeOut 1s ease-in-out infinite",
      slide: "slide 1s ease-in-out infinite",
      smooth: "smooth 1s ease-in-out infinite",
      swing1: "swing1 1s ease-in-out infinite",
      swing2: "swing2 1s ease-in-out infinite",
      swing3: "swing3 1s ease-in-out infinite",
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      // xl: "1700px",
    },
  },
  plugins: [],
};
