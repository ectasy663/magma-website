import type { Metadata } from "next";
import "./globals.css";
import "./magma.css";

export const metadata: Metadata = {
  title: "Magma - Digital Twin Token Platform",
  description: "Experience Real Estate Agility with Web3 Digital Twin Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
