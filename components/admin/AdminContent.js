import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

export default function AdminContent() {
  return (
    <div className="min-h-screen w-screen flex items-start justify-center z-30">
      <h2 className="fixed h-[48px] text-2xl text-white px-4 bg-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] top-5 left-5 z-30 flex items-center justify-center">
        PANEL DE ADMINISTRACIÓN
      </h2>
      <div className="min-h-screen w-full px-5 pt-21 bg-zinc-700/20 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[40px]">
        <h1 className="text-[100px] ">FUNCIONA!!!!!!</h1>;
      </div>
    </div>
  );
}
