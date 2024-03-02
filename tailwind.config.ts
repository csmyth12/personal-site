import type { Config } from "tailwindcss";
import { timelineColors } from "./src/constants";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    ...timelineColors.map(colour => `bg-${colour}`),
    ...timelineColors.map(colour => `border-${colour}`),
    ...timelineColors.map(colour => `text-${colour}`),
    ...timelineColors.map(colour => `hover:bg-${colour}`)
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "banner-barretstown": "url('../images/barretstownbanner.png')",
      },
    },
  },
  plugins: [],
};
export default config;
