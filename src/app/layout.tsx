import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

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
    <div className="flex flex-col min-h-screen bg-background-light text-primary-red p-5">
      <Header />
      <main className={`flex-grow ${mono.className}`}>{children}</main>
      <Footer />
    </div>
  );
}
