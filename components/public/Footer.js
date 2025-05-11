"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full h-[50vh] bg-[rgba(247, 247, 247, 0)]/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px]">
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <p className="text-white">FOOTER</p>
      </div>
    </footer>
  );
}
