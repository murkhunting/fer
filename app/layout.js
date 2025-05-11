import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/public/Header";
import BgVideo from "@/components/public/BgVideo";
import TopBtn from "@/components/public/TopBtn";
import ScrollBtn from "@/components/public/ScrollBtn";

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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,200,0,0"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <BgVideo />
        <ScrollBtn />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
