import { IBM_Plex_Sans_Arabic } from "next/font/google";

export const cairo = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cairo",
});
