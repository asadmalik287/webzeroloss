/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ibmplex: ["IBM Plex Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        handlegothic: ["HandelGotDOTMed"],
      },
      colors: {
        primary: "#03E1FF",
        secondary: "#DB1FFF",
        relevant: "#00FFA2",
      },
      screens: {
        xsm: { max: "500px" },
        sm: { min: "500px", max: "999px" },
        md: {
          min: "1000px",
          max: "1200px",
        },
        lg: {
          min: "1201px",
        },
        xl: {
          min: "1450px",
        },
      },
      backgroundImage: {
        "marquee-gr":
          "linear-gradient(106deg, rgba(210, 207, 205, 0.20) 4.51%, rgba(214, 173, 156, 0.10) 95.49%)",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite",
      },
    },
  },
  plugins: [],
};
