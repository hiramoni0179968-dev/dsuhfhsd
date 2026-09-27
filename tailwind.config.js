/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        char: {
          950: "#08090C",
          900: "#0E1013",
          800: "#15181D",
          700: "#1E2228",
          600: "#2A2F37",
        },
        ember: {
          400: "#FFB84D",
          500: "#FF8A1E",
          600: "#F5620A",
        },
        volt: {
          400: "#FFE066",
        },
      },
      fontFamily: {
        display: ["Rajdhani", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(255,138,30,0.35)",
        "glow-sm": "0 0 12px rgba(255,138,30,0.25)",
      },
    },
  },
  plugins: [],
};
