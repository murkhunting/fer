import Image from "next/image";

export default function Card({ grayscaleImage, colorImage, alt, projectName }) {
  return (
    <div className="w-[33.3333vw] h-[50vh] relative group cursor-pointer">
      {/* Imagen en blanco y negro */}
      <Image
        src={grayscaleImage}
        alt={alt}
        fill
        className="object-cover grayscale transition-opacity duration-0 group-hover:opacity-0"
      />
      {/* Imagen en color (debajo, aparece en hover) */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-0">
        <h3 className="text-white absolute z-4 top-3 left-3 px-4 py-1 text-lg rounded-md bg-[rgba(247, 247, 247, 0)]/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px]">
          {projectName}
        </h3>
        <Image
          src={colorImage}
          alt={alt}
          fill
          className="object-cover  absolute top-0 left-0 z-2"
        />
      </div>
    </div>
  );
}
