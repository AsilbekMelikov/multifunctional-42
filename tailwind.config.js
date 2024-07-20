/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],

  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        light: {
          900: "rgb(255, 255, 255)",
          800: "rgb(248, 250, 252)",
          700: "rgb(241, 245, 249)",
          600: "rgb(226, 232, 240)",
          500: "rgb(100, 116, 139)",
        },
        dark: {
          600: "rgb(148, 163, 184)",
          500: "rgb(30, 41, 59)",
          300: "rgb(15, 23, 42)",
          200: "rgb(2, 8, 23)",
        },
      },
      boxShadow: {
        lg: "0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1)",
        md: "0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1)",
        sm: "0 1px 2px 0 rgba(0,0,0,.05)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
