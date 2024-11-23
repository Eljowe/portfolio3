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
        defer
        data-website-id="df92c623-5850-41bc-b8ba-0b5bdab75b5a"
        src="https://analytics.joelwickstrom.com/umami.js"
      ></script>
    </html>
  );
}
