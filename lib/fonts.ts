import { Cairo, Outfit } from "next/font/google";

export const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "200", "600", "500", "700", "800", "900"],
  display: "swap",
  variable: "--font-cairo",
});

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "200", "100", "600", "500", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});
