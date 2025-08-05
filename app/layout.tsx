import type { Metadata } from "next";
import "./globals.css";
import { cairo, outfit } from "@/lib/fonts"; // corrected path if needed
import { ReactLenis } from "@/lib/ReactLenis";
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
      <ReactLenis root>
        <body
          className={` relative ${cairo.variable} ${outfit.variable} font-arabic antialiased overflow-x-clip`}
        >
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
