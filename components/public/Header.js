"use client"; // Necesario para usar estados y efectos en Next.js 13+

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Header fijo con logo */}
      <header className="fixed top-0 right-0 z-50">
        <div
          className="relative m-5 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 transition-all cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <span className="text-white font-bold text-xl">LOGO</span>
          </div>
        </div>
      </header>

      {/* Menú desplegable */}
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-black/70 backdrop-blur-md z-40 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center gap-8">
          {[
            "HOME",
            "VIDEOS",
            "FOTOGRAFÍA",
            "ARQUITECTURA",
            "ABOUT",
            "CONTACTO",
            "FAQS",
          ].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/í/g, "i")}`}
              className="text-white text-4xl font-light hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
