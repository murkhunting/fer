import cardsData from "@/Data/cardsData";
import ProjectRow from "@/components/admin/ProjectRow";

export default function AdminContent() {
  return (
    <div className="min-h-screen w-screen flex items-start justify-center z-30">
      <div className=" fixed top-5 right-20 z-30 gap-3 flex flex-row">
        <button className=" h-[48px] text-lg font-medium px-7 rounded-md flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:bg-zinc-800 hover:text-white  bg-gray-300 text-zinc-800">
          + NUEVO PROYECTO
        </button>
        <div className=" rounded-md flex gap-6 flex-row h-[48px] px-6 text-white bg-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px]">
          <button className="text-md hover:text-zinc-400">TODOS</button>
          <button className="text-md hover:text-zinc-400">VIDEOS</button>
          <button className="text-md hover:text-zinc-400">FOTOS</button>
          <button className="text-md hover:text-zinc-400">ARQUITECTURA</button>
        </div>
      </div>

      <div className="min-h-screen w-full pl-5 pr-20 py-12 bg-zinc-600/20 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[40px] flex flex-col">
        <div className="mt-5">
          {cardsData.map((card, index) => (
            <ProjectRow
              key={index}
              projectName={card.projectName}
              grayscaleImage={card.grayscaleImage}
              colorImage={card.colorImage}
              alt={card.alt}
            />
          ))}
          {cardsData.map((card, index) => (
            <ProjectRow
              key={index}
              projectName={card.projectName}
              grayscaleImage={card.grayscaleImage}
              colorImage={card.colorImage}
              alt={card.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
