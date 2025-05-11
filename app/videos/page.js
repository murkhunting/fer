import Fullcard from "@/components/public/Fullcards";
import cardsData from "@/Data/cardsData";
import FooterSnap from "@/components/public/FooterSnap";

export default function Videos() {
  return (
    <div>
      <h2 className="fixed h-[48px] px-6 rounded-md text-white bg-[rgba(247, 247, 247, 0)]/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] top-5 right-20 z-30 flex items-center justify-center">
        VIDEOS
      </h2>
      <div className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {cardsData.map((card, index) => (
          <Fullcard
            key={index}
            projectName={card.projectName}
            grayscaleImage={card.grayscaleImage}
            colorImage={card.colorImage}
            alt={card.alt}
          />
        ))}
        <FooterSnap />
      </div>
    </div>
  );
}
