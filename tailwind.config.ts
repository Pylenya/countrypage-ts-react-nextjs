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
        dark: "#1B1D1F",
        "gray-dark": "#282B30",
        gray: "#6C727F",
        "gray-light": "#D2D5DA",
      },
    },
  },

  plugins: [],
};
export default config;
