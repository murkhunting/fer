import Fullcard from "@/components/public/Fullcards";
import cardsData from "@/Data/cardsData";

export default function Fotografia() {
  return (
    <div>
      <h2 className="fixed h-[48px] text-white px-4 bg-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] top-5 right-20 z-30 flex items-center justify-center">
        FOTOGRAFÍA
      </h2>
      <div className="w-screen">
        {cardsData.map((card, index) => (
          <div key={index} className="sticky top-0 z-20">
            <Fullcard
              projectName={card.projectName}
              grayscaleImage={card.grayscaleImage}
              colorImage={card.colorImage}
              alt={card.alt}
            />
            <div className="h-[500px]"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
