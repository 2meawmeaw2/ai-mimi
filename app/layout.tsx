import type { Metadata } from "next";
import "./globals.css";
import { cairo, outfit } from "@/lib/fonts"; // corrected path if needed
import { ReactLenis } from "@/lib/ReactLenis";
import Script from "next/script";

export const metadata: Metadata = {
  title: "و أخييييراا",
  description: "كورس شاااامل في ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const PIXEL_ID = "1488301969128134";

  return (
    <>
      <html lang="en">
        <head>
          {/* Meta Pixel Base Code */}
          <Script
            id="facebook-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
            `,
            }}
          />
        </head>

        <ReactLenis root>
          <body
            className={` relative ${cairo.variable} ${outfit.variable} font-arabic antialiased overflow-x-clip`}
          >
            {children}
          </body>
        </ReactLenis>
      </html>
    </>
  );
}
