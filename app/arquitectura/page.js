import Fullcard from "@/components/public/Fullcards";
import cardsData from "@/Data/cardsData";

export default function Arquitectura() {
  return (
    <div>
      <h2 className="fixed h-[48px] px-4 glass top-5 right-20 z-30 flex items-center justify-center">
        ARQUITECTURA
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
