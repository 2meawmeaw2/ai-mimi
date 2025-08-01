import type { Metadata } from "next";
import "./globals.css";
import { cairo, outfit } from "@/lib/fonts"; // corrected path if needed

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
