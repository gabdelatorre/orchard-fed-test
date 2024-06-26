import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      colors: {
        "orchard-grey": { 100: "#b7b9b9", 300: "#888a8a" },
        "orchard-black": "#0e1414",
        "orchard-red": "#cf1430",
      },
    },
  },
  plugins: [],
};
export default config;
