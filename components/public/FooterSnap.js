"use client";
import Image from "next/image";
import Link from "next/link";

export default function FooterSnap() {
  return (
    <footer className="w-screen h-screen snap-start relative">
      <div className="absolute bottom-0 w-full h-[50vh] bg-[rgba(247, 247, 247, 0)]/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] flex items-center justify-center z-41">
        <div className="h-full p-4 w-1/2 flex flex-col items-start justify-between">
          <div>
            <h2 className="text-white text-4xl">FERNANDO MARÍ REBOLLO</h2>
            <h2 className="text-white text-2xl">VIDEO Y FOTOGRAFÍA AÉREA</h2>
          </div>
          <h2 className="text-white text-2xl">
            ¿INTERESADO? PONTE EN CONTACTO →
          </h2>
        </div>
        <div className="h-full p-4 w-1/2 flex flex-col items-end justify-between">
          <div className="flex flex-col items-end">
            <h2 className="text-white text-2xl">Privacidad</h2>
            <h2 className="text-white text-2xl">Aviso Legal</h2>
            <h2 className="text-white text-2xl">Cookies</h2>
          </div>
          <h2 className="text-white text-xl">DESIGN & CODE BY: @MURKHUNTING</h2>
        </div>
      </div>
    </footer>
  );
}
