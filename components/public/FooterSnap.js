"use client";
import {
  PiInstagramLogoLight,
  PiYoutubeLogoLight,
  PiWhatsappLogoLight,
  PiEnvelopeSimpleLight,
  PiDeviceMobileCameraLight,
} from "react-icons/pi";

export default function FooterSnap() {
  return (
    <footer className="w-screen h-screen snap-start relative">
      <div className="absolute bottom-0 w-full h-[50vh] bg-[rgba(247, 247, 247, 0)]/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] flex items-center justify-center z-41 pt-6 pb-2 px-6">
        <div className="h-full w-1/2 flex flex-col items-start justify-between">
          <div>
            <h2 className="text-white text-4xl">FERNANDO MARÍ REBOLLO</h2>
            <h2 className="text-white text-2xl">VIDEO Y FOTOGRAFÍA AÉREA</h2>
          </div>
          <div>
            <div className="flex fles-row gap-4 justify-start items-center my-5">
              <PiInstagramLogoLight className="text-white text-2xl hover:text-zinc-300 cursor-pointer" />
              <PiYoutubeLogoLight className="text-white text-2xl hover:text-zinc-300 cursor-pointer" />
              <PiWhatsappLogoLight className="text-white text-2xl hover:text-zinc-300 cursor-pointer" />
              <PiDeviceMobileCameraLight className="text-white text-2xl hover:text-zinc-300 cursor-pointer" />
              <PiEnvelopeSimpleLight className="text-white text-2xl hover:text-zinc-300 cursor-pointer" />
            </div>
            <h2 className="text-white text-2xl">
              ¿INTERESADO? PONTE EN CONTACTO →
            </h2>
          </div>
        </div>
        <div className="h-full w-1/2 flex flex-col items-end justify-between">
          <div className="flex flex-col items-end">
            <h2 className="text-white text-2xl">Privacidad</h2>
            <h2 className="text-white text-2xl">Aviso Legal</h2>
            <h2 className="text-white text-2xl">Cookies</h2>
          </div>
          <h2 className="text-white text-xl">DESIGN & CODE BY: @MURKHUNTING</h2>
        </div>
      </div>
    </footer>
  );
}
