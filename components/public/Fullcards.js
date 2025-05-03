import Image from "next/image";

export default function Fullcard({
  grayscaleImage,
  colorImage,
  alt,
  projectName,
}) {
  return (
    <div className="w-screen h-screen overflow-hidden snap-start group ">
      {/* Imagen en blanco y negro */}
      <Image
        src={grayscaleImage}
        alt={alt}
        fill
        className="object-cover grayscale transition-opacity duration-0 group-hover:opacity-0"
      />
      {/* Imagen en color (debajo, aparece en hover) */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-0">
        <h2 className="absolute text-white top-50 left-50 z-4">
          {projectName}
        </h2>
        <Image
          src={colorImage}
          alt={alt}
          fill
          className="object-cover  absolute top-0 left-0 z-3"
        />
      </div>
    </div>
  );
}
