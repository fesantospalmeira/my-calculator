import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Calculadora",
  description: "Criado por Felipe dos Santos Palmeira",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
