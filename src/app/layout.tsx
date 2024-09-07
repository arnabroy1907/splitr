import "@splitr/css/globals.css";
import type { Metadata } from "next";
import { Manrope } from 'next/font/google';

const myFont = Manrope({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Splitr",
  description: "Splitr app for expense management - Play Project - WIP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.className}`}>
        {children}
      </body>
    </html>
  );
}
