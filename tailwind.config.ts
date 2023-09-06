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
        xl: "1280px",
      },
      typography: {
        "link-style": {
          css: {
            color: "rgb(219, 0, 0)",
            textDecoration: "underline",
          },
        },
      },
      colors: {
        "background-light": "rgb(243, 240, 240)",
        "primary-red": "rgb(219, 0, 0)",
      },
      borderWidth: {
        custom: "2px",
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
