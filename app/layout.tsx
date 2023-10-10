import "./globals.css";
import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import { BsLinkedin, BsGithub } from "react-icons/bs";

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
      <body className={`debug-screens1 ${red_hat.className}`}>
        {children}
        <footer className="flex flex-row items-center justify-center w-full h-[100px] sm:h-[180px] bg-[#eff876] z-10">
          <a href="https://www.linkedin.com/in/joelwickstrom/" target="_blank" className="m-4">
            <BsLinkedin className="w-10 h-10" />
          </a>
          <a href="https://github.com/Eljowe" target="_blank" className="m-4">
            <BsGithub className="w-10 h-10" />
          </a>
        </footer>
      </body>
    </html>
  );
}
