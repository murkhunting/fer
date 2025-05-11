import Homecards from "@/components/public/Homecards";
import FooterSnap from "@/components/public/FooterSnap";

export default function Home() {
  return (
    <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <div className="h-screen sticky pt-10 pb-50 top-0 flex flex-col justify-center items-center gap-[10px] text-white snap-start">
        <h1 className="text-[40px]">Fernando Marí Rebollo</h1>
        <h2 className="text-[70px] font-extralight">
          VÍDEO Y FOTOGRAFÍA AÉREA
        </h2>
      </div>
      <Homecards />
      <Homecards />
      <FooterSnap />
    </div>
  );
}
