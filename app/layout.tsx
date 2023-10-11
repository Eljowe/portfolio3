import "./globals.css";
import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";

const red_hat = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joel's website",
  description: "Generated with create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1d1d1d"></meta>
        <link rel="icon" href="/sphere.png" type="image/png" sizes="32x32" />
      </head>
      <body className={`debug-screens1 ${red_hat.className}`}>{children}</body>
    </html>
  );
}
