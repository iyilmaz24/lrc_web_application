import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WebsiteNavigationBar from "../app/_components/Web/WebsiteNavigationBar";
import WebsiteNavigationMenu from "../app/_components/Mobile/WebsiteNavigationMenu";

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

        <WebsiteNavigationMenu />

        {children}
      </body>
    </html>
  );
}
