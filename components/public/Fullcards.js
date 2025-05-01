import Image from "next/image";

export default function Fullcard({ grayscaleImage, colorImage, alt }) {
  return (
    <div className="w-screen h-screen relative overflow-hidden snap-start group">
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
