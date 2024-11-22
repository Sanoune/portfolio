/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#EBEBEB",
        customGray: "#F5F5F4",
        silverGray: "#C0C0C0",
        neonOrange: "#ff6700",
      },
      backgroundImage: {
        glitter: "url('https://i.imgur.com/OcF9s0v.png')",
      },
      borderRadius: {
        "4xl": "4.5rem",
      },
    },
  },
  plugins: [],
};
