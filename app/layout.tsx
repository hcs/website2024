import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Harvard Computer Society",
  description: "Harvard College's Premier Computer Science Organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <MenuBar />
        <main className="min-h-svh">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
