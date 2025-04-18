import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const rubicSans = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin", 'cyrillic'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Link Bank",
  description: "Хранилище ссылок для проектов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`
          //${rubicSans.variable} //${geistMono.variable} 
          antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
