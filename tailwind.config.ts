import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a0a0f",
          raised: "#12131a",
          hover: "#181a23",
        },
        border: {
          DEFAULT: "#232530",
          subtle: "#1a1c25",
        },
        ink: {
          DEFAULT: "#f4f4f6",
          muted: "#adadbd",
          faint: "#73737f",
        },
        accent: {
          DEFAULT: "#ff8a3d",
          strong: "#ff6a1f",
          soft: "#ffb87a",
          foreground: "#0a0a0f",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
      },
      maxWidth: {
        content: "72rem",
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
