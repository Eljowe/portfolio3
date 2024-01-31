import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Joel Wickström's portfolio",
  description: 'My portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1d1d1d"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Red+Hat+Display:wght@300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`debug-screens1`}>{children}</body>
      <script
        async
        src="https://umami-one-theta.vercel.app/script.js"
        data-website-id="ee411234-cc2b-4cd0-b179-cfe3339d35bf"
      ></script>
    </html>
  );
}
