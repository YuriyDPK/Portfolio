import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "1/2": "50%",
        "1/4": "25%",
        half_past: "20%",
        "55": "55%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "60": "60%",
        "40": "40%",
        "30": "30%",
        "128": "32rem",
        "144": "36rem",
        "100": "25rem",
      },
      fontSize: {
        xxs: "0.625rem", // 10px
        xxl: "1.75rem", // 28px
        xxx: "16rem",
        xxo: "2.5rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.015em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      lineHeight: {
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
      },
    },
  },
  plugins: [],
};
export default config;
