import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WebsiteNavigationBar from "../app/_components/Web/WebsiteNavigationBar";
import WebsiteNavigationMenu from "../app/_components/Mobile/WebsiteNavigationMenu";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "LeRoy Collins Institute Post Election Audit Project",
//   description:
//     "All Florida counties are required by law to complete a postelection audit. In this project we provide information to the public about the accuracy of Florida ballot counting by presenting the results of each county’s post-election audit and where available the ballot images.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title> {"LeRoy Collins Institute Post Election Audit Project"}</title>
        <meta
          name="description"
          content={
            "All Florida counties are required by law to complete a postelection audit. In this project we provide information to the public about the accuracy of Florida ballot counting by presenting the results of each county’s post-election audit and where available the ballot images."
          }
        />
        <link rel="icon" href="/LCI-Favicon.png" type="image/png" />
      </head>

      <body className={inter.className}>
        <WebsiteNavigationBar />

        <WebsiteNavigationMenu />

        {children}
        <div className="green-bg min-h-20 text-4xl font-extrabold flex justify-center items-center"></div>
      </body>
    </html>
  );
}
