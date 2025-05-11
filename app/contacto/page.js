import Footer from "@/components/public/Footer";
import {
  PiInstagramLogoLight,
  PiYoutubeLogoLight,
  PiWhatsappLogoLight,
  PiEnvelopeSimpleLight,
  PiDeviceMobileCameraLight,
} from "react-icons/pi";

export default function Contacto() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="h-[100vh] sticky pt-10 pb-50 top-0 flex flex-col justify-center items-center text-white">
          <h2 className="text-[30px] font-extralight">
            ¿Tienes un proyecto en mente?
          </h2>
          <h2 className="text-[60px] font-extralight">¡PONTE EN CONTACTO!</h2>
          <div className="flex fle-row items-center justify-center gap-10 mt-10">
            <div className="bg-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] rounded-md p-4 cursor-pointer text-white text-5xl hover:text-zinc-300">
              <PiInstagramLogoLight />
            </div>
            <div className="bg-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] rounded-md p-4 cursor-pointer text-white text-5xl hover:text-zinc-300">
              <PiYoutubeLogoLight />
            </div>
            <div className="bg-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] rounded-md p-4 cursor-pointer text-white text-5xl hover:text-zinc-300">
              <PiWhatsappLogoLight />
            </div>
            <div className="bg-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] rounded-md p-4 cursor-pointer text-white text-5xl hover:text-zinc-300">
              <PiDeviceMobileCameraLight />
            </div>
            <div className="bg-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] rounded-md p-4 cursor-pointer text-white text-5xl hover:text-zinc-300">
              <PiEnvelopeSimpleLight />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
