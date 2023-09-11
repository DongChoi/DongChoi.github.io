import Nav from "@/components/Nav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LandingMessage from "@/components/LandingMessage";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrew Choi",
  description: "Andrew Choi Full Stack Engineer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-slate-100`}>
        <div className="">
          <Nav />
          <LandingMessage />
          {children}
        </div>
      </body>
    </html>
  );
}
