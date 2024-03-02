import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Background from "./_components/baground";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog",
  description: "Mi Blog de programacion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={cn("min-h-screen dark px-6 py-4 flex flex-col justify-between", inter.className)}>
        <div>
          <Background />
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
