import Footer from "@/components/public/Footer";

export default function Info() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="h-[100vh] sticky pt-10 pb-50 top-0 flex flex-col justify-center items-center text-white">
          <h2 className="text-[30px] font-extralight">
            ¿Tienes una proyecto en mente?
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
}
