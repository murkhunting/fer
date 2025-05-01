import Image from "next/image";

export default function Card({ grayscaleImage, colorImage, alt }) {
  return (
    <div className="w-[33.3333vw] h-[50vh] relative overflow-hidden group">
      {/* Imagen en blanco y negro */}
      <Image
        src={grayscaleImage}
        alt={alt}
        fill
        className="object-cover grayscale transition-opacity duration-0 group-hover:opacity-0"
      />
      {/* Imagen en color (debajo, aparece en hover) */}
      <Image
        src={colorImage}
        alt={alt}
        fill
        className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-0 absolute top-0 left-0"
      />
    </div>
  );
}
