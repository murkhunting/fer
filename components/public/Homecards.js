import Card from "./Cards";

export default function Homecards() {
  const cardsData = [
    {
      grayscaleImage:
        "https://images.pexels.com/photos/14541415/pexels-photo-14541415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      colorImage:
        "https://images.pexels.com/photos/14541415/pexels-photo-14541415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Foto 1",
    },
    {
      grayscaleImage:
        "https://images.pexels.com/photos/19984903/pexels-photo-19984903/free-photo-of-el-oceano-azul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      colorImage:
        "https://images.pexels.com/photos/19984903/pexels-photo-19984903/free-photo-of-el-oceano-azul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Foto 2",
    },
    {
      grayscaleImage:
        "https://images.pexels.com/photos/14011476/pexels-photo-14011476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      colorImage:
        "https://images.pexels.com/photos/14011476/pexels-photo-14011476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Foto 3",
    },
    {
      grayscaleImage:
        "https://images.pexels.com/photos/14541415/pexels-photo-14541415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      colorImage:
        "https://images.pexels.com/photos/14541415/pexels-photo-14541415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Foto 4",
    },
    {
      grayscaleImage:
        "https://images.pexels.com/photos/19984903/pexels-photo-19984903/free-photo-of-el-oceano-azul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      colorImage:
        "https://images.pexels.com/photos/19984903/pexels-photo-19984903/free-photo-of-el-oceano-azul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Foto 5",
    },
    {
      grayscaleImage:
        "https://images.pexels.com/photos/14011476/pexels-photo-14011476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      colorImage:
        "https://images.pexels.com/photos/14011476/pexels-photo-14011476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Foto 6",
    },
    {
      grayscaleImage:
        "https://images.pexels.com/photos/14541415/pexels-photo-14541415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      colorImage:
        "https://images.pexels.com/photos/14541415/pexels-photo-14541415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Foto 7",
    },
    {
      grayscaleImage:
        "https://images.pexels.com/photos/19984903/pexels-photo-19984903/free-photo-of-el-oceano-azul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      colorImage:
        "https://images.pexels.com/photos/19984903/pexels-photo-19984903/free-photo-of-el-oceano-azul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Foto 8",
    },
    {
      grayscaleImage:
        "https://images.pexels.com/photos/14011476/pexels-photo-14011476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      colorImage:
        "https://images.pexels.com/photos/14011476/pexels-photo-14011476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Foto 9",
    },
  ];

  return (
    <div className="w-screen h-screen flex flex-wrap z-10">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          grayscaleImage={card.grayscaleImage}
          colorImage={card.colorImage}
          alt={card.alt}
        />
      ))}
    </div>
  );
}
