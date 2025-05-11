"use client";
import Image from "next/image";
import Link from "next/link";

export default function FooterSnap() {
  return (
    <footer className="w-screen h-screen snap-start relative">
      <div className="absolute bottom-0 w-full h-[50vh] bg-[rgba(247, 247, 247, 0)]/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] flex items-center justify-center z-41">
        <p className="text-white">CONTENIDO DEL FOOTER</p>
      </div>
    </footer>
  );
}
