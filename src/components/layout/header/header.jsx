import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <div className="flex justify-between w-full border-b-[0.5px] border-dark4 p-4 sm:p-6 md:p-7">
      {/* Título Home */}
      <span className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
        Home
      </span>
      
      {/* Ícone Sparkles */}
      <div>
        <Sparkles className="text-primary-blue h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
      </div>
    </div>
  );
}
