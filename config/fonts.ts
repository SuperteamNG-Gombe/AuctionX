import localFont from "next/font/local";

export const orbitron = localFont({
  src: [
    {
      path: "../assets/fonts/Orbitron/Orbitron-VariableFont_wght.ttf",
      style: "solid",
      weight: "100_900",
    },
  ],
  variable: "--font-orbitron",
});

export const exo = localFont({
  src: [
    {
      path: "../assets/fonts/Exo/Exo-VariableFont_wght.ttf",
      style: "solid",
    },
    {
      path: "../assets/fonts/Exo/Exo-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-exo",
});

export const rajdhani = localFont({
  src: [
    {
      path: "../assets/fonts/Rajdhani/Rajdhani-Bold.ttf",
      style: "solid",
      weight: "700",
    },
    {
      path: "../assets/fonts/Rajdhani/Rajdhani-Light.ttf",
      style: "solid",
      weight: "300",
    },
    {
      path: "../assets/fonts/Rajdhani/Rajdhani-Medium.ttf",
      style: "solid",
      weight: "400",
    },
    {
      path: "../assets/fonts/Rajdhani/Rajdhani-Regular.ttf",
      style: "solid",
      weight: "500",
    },
    {
      path: "../assets/fonts/Rajdhani/Rajdhani-SemiBold.ttf",
      style: "solid",
      weight: "600",
    },
  ],
  variable: "--font-rajdhani",
});
