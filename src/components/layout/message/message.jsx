import { Heart, Mail, RotateCcwSquare, Share } from "lucide-react";

export function Message() {
  return (
    <div className="border-t-[0.5px] border-b-[0.5px] border-dark4 cursor-pointer h-auto hover:bg-dark2">
      <div className="min-h-full p-7 h-[37.5rem] ">
        <div className="flex text-center space-x-4">
          <img
            src="https://github.com/Samueu.png"
            alt="Foto de perfil da mensagem"
            height={48}
            width={48}
            className="rounded-full"
          />
          <div>
            <div className="flex">
              <span className="text-white font-bold">Samuel Batista</span>
              <p className="text-dark6 pl-2 ">@samuel</p>
            </div>
            <div className="text-left">
              <h1 className="text-white text-bold text-2xl">Hello world</h1>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <img src="/images/foto.png" height={247} width={509} className="rounded-xl" />
        </div>

        <div className="text-dark6 flex justify-around  ">
          <div>
            <Mail />
          </div>
          <div>
            <RotateCcwSquare />
          </div>
          <div>
            <Heart />
          </div>
          <div>
            <Share />
          </div>
        </div>
      </div>
    </div>
  );
}
