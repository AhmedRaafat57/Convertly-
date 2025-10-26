import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Convertly",
  description:
    "Convert your files from one format to another. Fast, reliable, and high-quality conversions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-20`}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
