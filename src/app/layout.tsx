import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { reportWebVitals } from '@/lib/vitals'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Stephen Ferguson - Portfolio",
  description: "Personal portfolio of Stephen Ferguson, showcasing technical projects and professional experience.",
  keywords: ["Stephen Ferguson", "web development", "portfolio", "technical consultant"],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#000106",
  robots: "index, follow",
  manifest: "/manifest.json"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (typeof window !== 'undefined') {
    reportWebVitals()
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
