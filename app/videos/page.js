import Fullcard from "@/components/public/Fullcards";
import cardsData from "@/Data/cardsData";

export default function Homecards() {
  return (
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
  );
}
