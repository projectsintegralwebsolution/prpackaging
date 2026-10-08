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
        industrial: {
          950: "#090d16",
          900: "#0f172a",
          850: "#141e34",
          800: "#1e293b",
          700: "#334155",
          600: "#475569",
          500: "#64748b",
          400: "#94a3b8",
          300: "#cbd5e1",
          200: "#e2e8f0",
          100: "#f1f5f9",
          50: "#f8fafc",
        },
        kraft: {
          900: "#5c3d1e",
          800: "#7c5328",
          700: "#966533",
          600: "#b37b40",
          500: "#c78d4c",
          400: "#d9a468",
          300: "#e7be8c",
          200: "#f3dbb7",
          100: "#faeee0",
          50: "#fdf8f3",
        },
        eco: {
          900: "#14532d",
          800: "#166534",
          700: "#15803d",
          600: "#16a34a",
          500: "#22c55e",
          400: "#4ade80",
          100: "#dcfce7",
          50: "#f0fdf4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        industrial: "0 10px 30px -10px rgba(15, 23, 42, 0.15)",
        card: "0 4px 20px -2px rgba(15, 23, 42, 0.08)",
        "card-hover": "0 15px 35px -5px rgba(15, 23, 42, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
