/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "sora":["Poppins", "sans-serif"]
      },
      colors:{
        "maincolor":"rgba(254, 105, 106, .9)",
        "paracolor":"rgb(148,163,184)",
        "colortransparent":"rgba(0,0,0,0.4)"
      }
    },
  },
  plugins: [
  ],
}