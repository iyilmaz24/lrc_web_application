import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WebsiteNavigationBar from "./_components/WebsiteNavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PROD_LRC",
  description: "LeRoy Collins Institute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WebsiteNavigationBar />
        {children}
      </body>
    </html>
  );
}
