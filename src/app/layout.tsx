import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WebsiteNavigationBar from "./_components/WebsiteNavigationBar";
import Link from "next/link";

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
        <Link className="" href="/">
          LEROY COLLINS INSTITUTE
        </Link>
        <WebsiteNavigationBar />
        {children}
      </body>
    </html>
  );
}
