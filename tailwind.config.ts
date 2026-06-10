import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#0f0f1a",
        card: "#1a1a2e",
        border: "#2d2d4e",
        accent: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          dark: "#4f46e5",
        },
        purple: {
          glow: "#8b5cf6",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#d1d5db",
            "h1, h2, h3, h4": { color: "#f3f4f6" },
            code: {
              color: "#a78bfa",
              background: "#1e1b4b",
              padding: "0.1em 0.3em",
              borderRadius: "0.25em",
            },
            pre: {
              background: "#1e1b4b",
              border: "1px solid #3730a3",
            },
            blockquote: {
              borderLeftColor: "#6366f1",
              color: "#c4b5fd",
            },
            "thead th": { color: "#f3f4f6" },
            a: { color: "#818cf8" },
            strong: { color: "#e5e7eb" },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
