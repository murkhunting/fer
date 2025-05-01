import Image from "next/image";
import Homecards from "@/components/public/Homecards";

export default function Home() {
  return (
    <div className="relative font-[family-name:var(--font-geist-sans)]">
      {/* Fondo de video */}
      <div className="fixed top-0 left-0 w-screen h-screen z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/2257010/2257010-uhd_2560_1440_24fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

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
