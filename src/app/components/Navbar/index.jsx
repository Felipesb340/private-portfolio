import { Bell, Ellipsis, Hash, House, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex  bg-dark1 min-h-screen w-64 ml-20 flex-col border-r-[0.5] border-dark4 ">
      <img
        src="https://github.com/samueu.png"
        alt="Foto de perfil"
        className="w-45 h-45 rounded-full mt-16 "
      />

      <div className="flex flex-col text-1xl font-bold">
        <div>
          <a
            href="#"
            className="flex py-[20] text-primary-blue hover:text-dark5 "
          >
            <House className="mr-7" />
            <span>Página Inicial</span>
          </a>
        </div>
        <div>
          <a href="#" className="flex py-[20] text-white hover:text-dark5 ">
            <Hash className="mr-7" />
            <span>Explorar</span>
          </a>
        </div>
        <div>
          <a href="#" className="flex py-[20] text-white hover:text-dark5 ">
            <Mail className="mr-7" />
            <span>Mensagens</span>
          </a>
        </div>
        <div>
          <a href="#" className="flex py-[20] text-white hover:text-dark5 ">
            <Bell className="mr-7" />
            <span>Notificações</span>
          </a>
        </div>
      </div>

      <div className="flex justify-between mt-auto pr-4">
        <div>
          <span className="text-white font-bold">Samuel Batista</span>
          <p className="text-dark5 h-16">@samuel</p>
        </div>
        <div>
          <Ellipsis className="text-white" />
        </div>
      </div>
    </div>
  );
}
