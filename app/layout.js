import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/public/Header";
import BgVideo from "@/components/public/BgVideo";
import TopBtn from "@/components/public/TopBtn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fernando Marí",
  description: "Piloto de Drones y Arquitecto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <BgVideo />
        <TopBtn />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
