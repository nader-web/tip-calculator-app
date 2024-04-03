/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(183, 100%, 15%)",
        neutral: {
          "v-d-cyan": "hsl(172, 67%, 45%)",
          "dark-g-cyan": "hsl(186, 14%, 43%)",
          "g-cyan": "hsl(184, 14%, 56%)",
          "l-cyan": "hsl(185, 41%, 84%)",
          "v-l-cyan": "hsl(189, 41%, 97%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      fontSize: {
        formInput: "24px",
      },
    },
    fontFamily: {
      sans: ["Space Mono", "monospace"],
    },
    fontWeight: {
      bold: ["700"],
    },
  },
  plugins: [],
};
