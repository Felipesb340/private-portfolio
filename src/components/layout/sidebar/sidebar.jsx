import { Bell, Ellipsis, Hash, House, Mail } from "lucide-react";

export function Sidebar() {
  return (
    <div className="flex bg-dark1 min-h-screen w-64 flex-col border-r-[0.5] border-dark4 p-4">
      {/* Imagem de perfil */}
      <div className="flex justify-center mt-8 mb-6">
        <img
          src="https://github.com/samueu.png"
          alt="Foto de perfil"
          className="w-20 h-20 rounded-full"
        />
      </div>

      {/* Menu de navegação */}
      <div className="flex flex-col text-lg font-semibold space-y-6">
        <a
          href="#"
          className="flex items-center py-2 px-4 text-primary-blue hover:text-dark5 transition-colors"
        >
          <House className="mr-4" />
          <span>Página Inicial</span>
        </a>
        <a
          href="#"
          className="flex items-center py-2 px-4 text-white hover:text-dark5 transition-colors"
        >
          <Hash className="mr-4" />
          <span>Explorar</span>
        </a>
        <a
          href="#"
          className="flex items-center py-2 px-4 text-white hover:text-dark5 transition-colors"
        >
          <Mail className="mr-4" />
          <span>Mensagens</span>
        </a>
        <a
          href="#"
          className="flex items-center py-2 px-4 text-white hover:text-dark5 transition-colors"
        >
          <Bell className="mr-4" />
          <span>Notificações</span>
        </a>
      </div>

      {/* Informações do usuário */}
      <div className="flex justify-between mt-auto items-center py-4">
        <div>
          <span className="text-white font-bold">Samuel Batista</span>
          <p className="text-dark5">@samuel</p>
        </div>
        <Ellipsis className="text-white" />
      </div>
    </div>
  );
}
