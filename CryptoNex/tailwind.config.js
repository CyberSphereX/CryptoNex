/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#f4a641',
        customSlate: "#1e252e",
        customBg: "#121923",
        customWhite: "#c3c4c3 ",
        inputColor: "#293039"
      }
    },
  },
  plugins: [],
}

