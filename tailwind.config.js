import svgToDataUri from "mini-svg-data-uri";
import { heroui } from "@heroui/theme";

import { heroUIConfig } from "./hero-ui.config";

// const defaultTheme = require("tailwindcss/defaultTheme");

// const colors = require("tailwindcss/colors");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary color (60%)
        primary: {
          DEFAULT: "var(--primary-color)",
          dark: "var(--primary-dark)",
          light: "var(--primary-light)",
        },
        // Secondary color (30%)
        secondary: {
          DEFAULT: "var(--secondary-color)",
          dark: "var(--secondary-dark)",
          light: "var(--secondary-light)",
        },
        // Accent color (10%)
        accent: {
          DEFAULT: "var(--accent-color)",
          dark: "var(--accent-dark)",
          light: "var(--accent-light)",
        },
        // Neutral colors
        neutral: {
          light: "var(--neutral-light)",
          dark: "var(--neutral-dark)",
        },
      },
      fontFamily: {
        fontFamily: {
          display: "var(--font-display)",
          body: "var(--font-body)",
          accent: "var(--font-accent)",
          orbitron: "var(--font-orbitron)",
          exo: "var(--font-exo)",
          rajdhani: "var(--font-rajdhani)",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui(),
    // addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

// function addVariablesForColors({ addBase, theme }) {
//   let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );

//   addBase({
//     ":root": newVars,
//   });
// }
