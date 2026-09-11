import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#12141a", soft: "#1c2030" },
        parchment: "#f4efe4",
        brass: { DEFAULT: "#b8924a", light: "#d4b06a" },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-source)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
