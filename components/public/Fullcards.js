import Image from "next/image";

export default function Fullcard({
  grayscaleImage,
  colorImage,
  alt,
  projectName,
}) {
  return (
    <div className="w-screen h-screen sticky top-0 overflow-hidden snap-start group ">
      {/* Imagen en blanco y negro */}
      <Image
        src={grayscaleImage}
        alt={alt}
        fill
        className="object-cover grayscale transition-opacity duration-0 group-hover:opacity-0"
      />
      {/* Imagen en color (debajo, aparece en hover) */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-0">
        <h2 className="cursor-pointer rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl px-10 py-4 bg-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] z-4">
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
