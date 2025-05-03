import Image from "next/image";
import Homecards from "@/components/public/Homecards";

export default function Home() {
  return (
    <div className="relative font-[family-name:var(--font-geist-sans)]">
      {/* Fondo de video */}

      {/* Contenido encima, con scroll */}
      <div className="min-h-screen flex relative z-10 flex-col justify-center items-cente">
        <div className="min-h-screen flex flex-col justify-center items-center gap-[10px] text-white ">
          <h1 className="text-[60px]">Fernando Marí</h1>
          <h2 className="text-[40px]">Piloto de Drones y Arquitecto</h2>
        </div>
        <Homecards />
      </div>
    </div>
  );
}
