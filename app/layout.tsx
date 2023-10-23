import './globals.css';
import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';

const red_hat = Red_Hat_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Joel Wickström's portfolio",
  description: 'My portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1d1d1d"></meta>
      </head>
      <body className={`debug-screens1 ${red_hat.className}`}>{children}</body>
    </html>
  );
}
