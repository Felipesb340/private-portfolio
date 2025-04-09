import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <div className="flex justify-between w-full border-b-[0.5] border-dark4 p-7">
      <span className="text-white font-bold text-2xl">Home</span>
      <div>
        <Sparkles  className="text-primary-blue h-7 w-7"/>
      </div>
    </div>
  );
}
