import { Footer } from "@splitr/components/Footer/Footer";
import { Navbar } from "@splitr/components/Navbar/Navbar";
import "@splitr/css/globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const myFont = Manrope({
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Splitr",
  description: "Splitr app for expense management - Play Project - WIP",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  authors: {
    name: "Arnab Roy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${myFont.className}`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
