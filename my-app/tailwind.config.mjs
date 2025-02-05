/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        forestGreen: "#556B2F",
      },
      fontFamily: {
        montserrat: ["Montserrat", ...fontFamily.sans],
      },
      animation: {
        bounceCustom: "smooth-bounce 3s ease-in-out infinite",
        scrollCustom: "scroll 2s infinite",
      },
      keyframes: {
        smoothBounce: {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
          },
          "45%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          },
          "65%": {
            transform: "translateY(-10%)",
            animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          },
        },
        scroll: {
          "0%, 100%": { transform: "translate(-50%, 0)" },
          "50%": { transform: "translate(-50%, 10px)" },
        },
      },
    },
  },
  plugins: [],
};
