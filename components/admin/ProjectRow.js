"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectRow({ projectName }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="w-full mt-3 rounded-md px-10 py-5 bg-white/20 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] flex flex-row items-center justify-between">
      <h2 className=" text-white text-3xl px] z-4">{projectName}</h2>
      <div className="flex justify-center items-center gap-6">
        <span className="material-symbols-rounded text-white hover:text-zinc-400 cursor-pointer">
          preview
        </span>
        <span className="material-symbols-rounded text-white hover:text-zinc-400 cursor-pointer">
          edit_square
        </span>
        <span className="material-symbols-rounded text-white hover:text-red-500 cursor-pointer">
          delete
        </span>
        <button
          onClick={() => setEnabled(!enabled)}
          className={`ml-5 relative w-12 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${
            enabled ? "bg-white" : "bg-zinc-400"
          }`}
        >
          <span
            className={`bg-zinc-600 w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
              enabled ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
        <span className="material-symbols-rounded ml-5 text-white hover:text-zinc-400 cursor-pointer">
          drag_indicator
        </span>
      </div>
    </div>
  );
}
