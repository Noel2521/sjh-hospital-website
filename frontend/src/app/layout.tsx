import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "St. Joseph's Hospital — Bannimantap, Mysuru",
  description:
    "NABH Accredited Multi-Speciality Hospital in Mysuru. Expert doctors, advanced diagnostics, and 24/7 emergency care guided by compassion and excellence.",
  keywords: [
    "St Joseph Hospital Mysuru",
    "hospital Bannimantap",
    "Mysuru hospital",
    "NABH hospital Mysuru",
    "doctor appointment Mysuru",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
