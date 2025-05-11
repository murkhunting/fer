"use client";
import { useState } from "react";
import Footer from "@/components/public/Footer";
import Image from "next/image";
import faqsData from "@/Data/faqsData";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="min-h-screen w-screen flex items-start justify-center z-30">
        <div className="fixed top-5 right-20 z-30 gap-3 flex flex-row">
          <h2 className="fixed h-[48px] px-6 rounded-md text-white bg-[rgba(247, 247, 247, 0)]/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] top-5 right-20 z-30 flex items-center justify-center">
            FAQs
          </h2>
        </div>
        <div className="min-h-screen w-full px-20 py-16 flex flex-col">
          {faqsData.map((faq, index) => (
            <div key={index}>
              <div
                className="w-full mt-3 rounded-md px-10 py-3 bg-[rgba(247, 247, 247, 0)]/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] flex flex-row items-center justify-between cursor-pointer"
                onClick={() => toggle(index)}
              >
                <div className="flex flex-row items-center gap-6">
                  <span className="material-symbols-rounded text-white hover:text-zinc-400">
                    {faq.icono}
                  </span>
                  <h2 className="text-white text-2xl z-4">{faq.question}</h2>
                </div>
                <span className="material-symbols-rounded ml-5 text-white hover:text-zinc-400">
                  {openIndex === index
                    ? "keyboard_arrow_up"
                    : "keyboard_arrow_down"}
                </span>
              </div>
              {openIndex === index && (
                <div className="w-full mt-1 rounded-md p-6 bg-white/15 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] flex flex-row items-start gap-10">
                  <p className="text-white text-xl z-4 w-[70%]">{faq.answer}</p>
                  <div className="relative w-[30%] h-[200px] rounded-md overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/1170064/pexels-photo-1170064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
