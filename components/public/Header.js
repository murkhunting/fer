"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PiInstagramLogoLight,
  PiYoutubeLogoLight,
  PiWhatsappLogoLight,
  PiEnvelopeSimpleLight,
  PiDeviceMobileCameraLight,
} from "react-icons/pi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Header fijo con botón de menú */}
      <header className="fixed top-0 right-0 z-60">
        <div
          className="relative m-5 p-2 rounded-md bg-[rgba(247, 247, 247, 0)]/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] transition-all cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Imagen del ícono de menú */}
          <div className="w-8 h-8 relative">
            <Image
              src="/menu.png" // Ruta desde la carpeta public
              alt="Menú"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </header>

      {/* Menú desplegable con animación vertical */}
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-[rgba(247, 247, 247, 0)]/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] z-50 transition-all duration-700 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-[120vh]"
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center gap-4">
          <Link
            href="/"
            className="text-white text-4xl font-light hover:text-zinc-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </Link>
          {[
            "VIDEOS",
            "FOTOGRAFÍA",
            "ARQUITECTURA",
            "ABOUT",
            "FAQS",
            "CONTACTO",
          ].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/í/g, "i")}`}
              className="text-white text-4xl font-light hover:text-zinc-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="flex fles-row gap-4 justify-center items-center my-5">
            <PiInstagramLogoLight className="text-white text-3xl hover:text-zinc-300 cursor-pointer" />
            <PiYoutubeLogoLight className="text-white text-3xl hover:text-zinc-300 cursor-pointer" />
            <PiWhatsappLogoLight className="text-white text-3xl hover:text-zinc-300 cursor-pointer" />
            <PiDeviceMobileCameraLight className="text-white text-3xl hover:text-zinc-300 cursor-pointer" />
            <PiEnvelopeSimpleLight className="text-white text-3xl hover:text-zinc-300 cursor-pointer" />
          </div>
          <span
            className="material-symbols-rounded text-white hover:text-zinc-300 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            close
          </span>
        </div>
      </div>
    </>
  );
}
