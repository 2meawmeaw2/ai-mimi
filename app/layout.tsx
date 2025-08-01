import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { Cairo } from "next/font/google";
export const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "200", "600", "500", "700", "800", "900"], // adjust as needed
  display: "swap",
  variable: "--font-cairo", // optional: CSS variable
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "200", "100", "600", "500", "700", "800", "900"], // add other weights if needed
  variable: "--font-outfit", // enables CSS variable usage
  display: "swap",
});

export const metadata: Metadata = {
  title: "و أخييييراا",
  description: "كورس شاااامل في ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cairo.variable} ${outfit.variable} font-arabic antialiased overflow-x-clip`}
      >
        <nav className="w-full h-[4rem] bg-red-100"></nav>
        {children}
      </body>
    </html>
  );
}
