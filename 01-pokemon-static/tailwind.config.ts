import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    nextui({
      addCommonColors: true,
      layout: {
        fontSize: {
          large: "2rem",
        },
      },
      themes: {
        dark: {
          colors: {
            primary: {
              foreground: "#ffffff",
              DEFAULT: "#ffffff",
            },
          },
          layout: {
            fontSize: {
              large: "1rem",
            },
          },
        },
        light: {
          layout: {
            fontSize: {
              large: "1.8rem",
            },
          },
        },
      },
    }),
  ],
  darkMode: "class",
} satisfies Config;
