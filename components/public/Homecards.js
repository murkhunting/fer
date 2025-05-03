import Card from "./Cards";
import cardsData from "@/Data/cardsData";

export default function Homecards() {
  return (
    <div className="w-screen relative flex flex-wrap z-10">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          projectName={card.projectName}
          grayscaleImage={card.grayscaleImage}
          colorImage={card.colorImage}
          alt={card.alt}
        />
      ))}
    </div>
  );
}
