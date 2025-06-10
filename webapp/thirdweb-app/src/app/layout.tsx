import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import Navbar from "./components/navbar";
import { CampaignCard } from "./components/CampaignCard";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
    <body className="bg-slate-50">
        <ThirdwebProvider>
          <Navbar></Navbar>
          <main className="mx-auto max-w-7xl px-4 mt-4 sm:px-6 lg:px-8">
            {children}
          </main>
          
          </ThirdwebProvider>
      </body>
    </html>
  );
}
