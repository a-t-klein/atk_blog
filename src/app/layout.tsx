import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import Header from "./Components/Header";

const mono = IBM_Plex_Mono({ subsets: ["cyrillic"], weight: "400" });

export const metadata: Metadata = {
  title: "Alex Klein's blog",
  description: "A blog for the software developer alex klein",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-5 h-screen bg-background-light text-primary-red">
      <Header />
      <body className={mono.className}>{children}</body>
    </div>
  );
}
