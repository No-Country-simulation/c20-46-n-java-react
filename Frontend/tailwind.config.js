/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FEF7F1",
          100: "#FDECDE",
          200: "#FBDBC1",
          300: "#F8C8A0",
          400: "#F6B783",
          500: "#F4A261",
          600: "#F07F24",
          700: "#BF5D0D",
          800: "#813F09",
          900: "#3E1E04",
          950: "#211002"
        }
      }
    },
  },
  plugins: [],
}

