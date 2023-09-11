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
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
      colors: {
        "background-light": "rgb(243, 240, 240)",
        "primary-red": "rgb(219, 0, 0)",
      },
      borderWidth: {
        custom: "1.5px",
      },
      borderStyle: {
        custom: "solid",
      },
      borderColor: {
        custom: "rgb(219, 0, 0)",
      },
    },
  },
  plugins: [],
};
export default config;
