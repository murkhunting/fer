"use client";
import { useState, useEffect } from "react";

export default function TopBtn() {
  const [showUpArrow, setShowUpArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowUpArrow(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: showUpArrow ? 0 : window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      className="fixed right-5 bottom-5 z-40 w-8 h-8 cursor-pointer bg-[rgba(247, 247, 247, 0)]/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] hover:bg-zinc-800 transition-all duration-300 flex items-center justify-center"
      aria-label={showUpArrow ? "Volver arriba" : "Desplazarse hacia abajo"}
    >
      {showUpArrow ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      )}
    </button>
  );
}
