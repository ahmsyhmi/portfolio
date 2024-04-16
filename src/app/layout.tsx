import type { Metadata } from "next";
import Head from "next/head";
import { Inconsolata,Honk } from "next/font/google";
import "./globals.css";

const insco = Inconsolata(
  { subsets: ["latin"], 
    variable: "--font-insco",
    weight: ['200','300','500','700'],
  });
const honk = Honk(
  { subsets: ["latin"],
    variable: "--font-honk",
    display: "swap",
    weight: ['400'],
  });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Created by Ahmad Syahmi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${insco.variable} ${honk.variable}`}>{children}</body>
    </html>
  );
}
