import Footer from "@/components/public/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="w-screen flex flex-col justify-start items-end z-20">
        <div className="fixed top-0 left-0 w-[40vw] h-screen">
          <Image
            src="https://images.pexels.com/photos/2827479/pexels-photo-2827479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className=" w-[60vw] py-10 pr-20 pl-10 flex flex-col justify-start items-start text-white">
          <h1 className="text-[40px] font-extralight z-20">
            Fernando Marí Rebollo
          </h1>
          <h2 className="text-[30px] font-extralight z-20">
            Piloto de Drones y Arquitecto
          </h2>
          <div className="flex mt-4 flex-col py-8 px-8 gap-2 justify-start items-start bg-[rgba(247, 247, 247, 0)]/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] rounded-md w-full">
            <h3 className="text-[16px] font-extralight">TITULACIONES</h3>
            <p className="text-[20px]">
              Fotógrafo de Arquitectura e Interiorismo - IEFC - 2022
            </p>
            <p className="text-[20px]">
              Radiofonista profesional para pilotos remotos - 2021
            </p>
            <p className="text-[20px]">
              Piloto y operador registrado de Drones - 2021
            </p>
            <p className="text-[20px]">Arquitecto - ETSALS - 2017</p>
          </div>
          <div className="flex mt-6 flex-col py-8 px-8 gap-2 justify-start items-start bg-[rgba(247, 247, 247, 0)]/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] rounded-md w-full">
            <h3 className="text-[16px] font-extralight">SOBRE MI</h3>
            <p className="text-[20px]">
              Mi nombre es Fernando y soy piloto de drones. Creo en la imagen
              para contar una historia, y los drones me permiten hacerlo desde
              el aire, un punto de vista diferente. La curiosidad me llevó hace
              unos años a iniciarme en este mundo y desde entonces he
              desarrollado mis habilidades como piloto en el sector audiovisual.
              Las imágenes aéreas son un complemento perfecto para cualquier
              tipo de producción, desde la historia de un viaje de aventura a un
              evento multitudinario. Enriquecen visualmente la narración,
              muestran el entorno y permiten dotar de escala y contexto a la
              acción.
            </p>
          </div>
          <div className="flex mt-6 flex-col py-8 px-8 gap-2 justify-start items-start bg-[rgba(247, 247, 247, 0)]/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] rounded-md w-full">
            <h3 className="text-[16px] font-extralight">COMO TRABAJO</h3>
            <p className="text-[20px]">
              Recibo la idea y estudio la viabilidad del proyecto.
            </p>
            <p className="text-[20px]">
              Hago una propuesta de proyecto al cliente y elaboro un
              presupuesto. Se define la fecha y el formato de entrega, así como
              las condiciones del vuelo.
            </p>
            <p className="text-[20px]">
              Me desplazo al lugar del proyecto y tomo las imágenes necesarias.
            </p>
            <p className="text-[20px]">
              Edito y monto las imágenes obtenidas en el vuelo.
            </p>
            <p className="text-[20px]">
              Entrega al cliente y finalización del proyecto.
            </p>
          </div>
          <div className="flex mt-6 flex-col py-8 px-8 gap-6 justify-start items-start bg-[rgba(247, 247, 247, 0)]/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] rounded-md w-full">
            <h3 className="text-[16px] font-extralight">EDICIÓN Y MONTAJE</h3>
            <p className="text-[20px]">
              Una buena edición es tan importante como disparar bien el día del
              rodaje. El trabajo de postproducción del material obtenido durante
              el vuelo permite obtener un producto acabado, completo y de
              calidad. Es una parte muy importante porque dota de carácter a la
              imagen y hace que el resultado sea original y único. Tanto si lo
              que buscas son unas imágenes en bruto como un si es un proyecto
              completo con postproducción, yo puedo hacerlo.
            </p>
          </div>
          <h2 className="text-[30px] font-extralight z-20 mt-8">Drones</h2>
          <div className="flex mt-4 flex-col py-8 px-8 gap-2 justify-start items-start bg-[rgba(247, 247, 247, 0)]/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] rounded-md w-full">
            <h3 className="text-[16px] font-extralight">MAVIC AIR 2</h3>
            <div className="relative h-[240px] w-[380px]">
              <Image
                src="https://m.media-amazon.com/images/I/51kmg+6viqL.jpg"
                alt=""
                fill
                className="rounded-md object-cover"
              />
            </div>
            <p className="text-[20px]">Peso: 570g</p>
            <p className="text-[20px]">
              Sensor: 1/2{'"'} CMOS Píxeles: 12 MP y 48 MP
            </p>
            <p className="text-[20px]">
              Objetivo: Ángulo de visión: 84° Formato equivalente a 35 mm: 24 mm
            </p>
            <p className="text-[20px]">Apertura: f/2.8 ISO Vídeo: 100-6400</p>
            <p className="text-[20px]">
              Fotografía (12 MP): 100-3200 (auto) 100-6400 (manual)
            </p>
            <p className="text-[20px]">
              Fotografía (48 MP): 100-1600 (auto) 100-3200 (manual)
            </p>
            <p className="text-[20px]">
              Resolución máx. de fotografía: 48 MP 8000×6000 píxeles
            </p>
            <p className="text-[20px]">Formatos fotográficos: JPEG/DNG (RAW)</p>
            <p className="text-[20px]">
              Resolución de vídeo y tasa de fotogramas: 4K Ultra HD - 3840×2160
              24/25/30/48/50/60 fps 2.7K - 2688×1512 24/25/30/48/50/60 fps
            </p>
          </div>
          <div className="flex mt-4 mb-20 flex-col py-8 px-8 gap-2 justify-start items-start bg-[rgba(247, 247, 247, 0)]/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] rounded-md w-full">
            <h3 className="text-[16px] font-extralight">MAVIC MINI</h3>
            <div className="relative h-[240px] w-[380px]">
              <Image
                src="https://m.media-amazon.com/images/I/51kmg+6viqL.jpg"
                alt=""
                fill
                className="rounded-md object-cover"
              />
            </div>
            <p className="text-[20px]">Peso: 570g</p>
            <p className="text-[20px]">
              Sensor: 1/2{'"'} CMOS Píxeles: 12 MP y 48 MP
            </p>
            <p className="text-[20px]">
              Objetivo: Ángulo de visión: 84° Formato equivalente a 35 mm: 24 mm
            </p>
            <p className="text-[20px]">Apertura: f/2.8 ISO Vídeo: 100-6400</p>
            <p className="text-[20px]">
              Fotografía (12 MP): 100-3200 (auto) 100-6400 (manual)
            </p>
            <p className="text-[20px]">
              Fotografía (48 MP): 100-1600 (auto) 100-3200 (manual)
            </p>
            <p className="text-[20px]">
              Resolución máx. de fotografía: 48 MP 8000×6000 píxeles
            </p>
            <p className="text-[20px]">Formatos fotográficos: JPEG/DNG (RAW)</p>
            <p className="text-[20px]">
              Resolución de vídeo y tasa de fotogramas: 4K Ultra HD - 3840×2160
              24/25/30/48/50/60 fps 2.7K - 2688×1512 24/25/30/48/50/60 fps
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
