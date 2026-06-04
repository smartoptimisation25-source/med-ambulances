import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        alternate: "#FAFAFA",
        ink: "#1D1D1F",
        muted: "#6E6E73",
        accent: "#0071E3",
        border: "#D2D2D7",
        blacksoft: "#0A0A0A"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      borderRadius: {
        card: "1rem"
      }
    }
  },
  plugins: []
};

export default config;
