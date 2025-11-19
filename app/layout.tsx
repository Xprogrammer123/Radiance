// app/layout.tsx   ← NO "use client" at all
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});


export const metadata = {
  title: "Radiance 2.0",
  description: "Radiance 2.0",
};

const stackSans = {
  family: "Stack Sans Headline",
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap" as const,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
     
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Stack+Sans+Headline:wght@200..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-black`}
      
        style={{ fontFeatureSettings: '"cv11", "ss01"' }}
      >
        {children}
      </body>
    </html>
  );
}