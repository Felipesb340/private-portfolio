export function SideColumn() {
  return (
    <>
      <div className="lg:flex flex-col mr-10 border-l-[0.5] border-dark4 md:hidden">
        <div className="">
          <input
            type="text"
            placeholder="Procurar"
            className="w-80 h-10 pl-7 m-7 bg-dark3 rounded-full text-white focus:outline-none"
          />
        </div>
        <div className="m-7 w-80 h-[457] bg-dark3 rounded-2xl ">
          <div className=" w-full block border-b-[1] border-dark4">
            <h1 className="text-white text-2xl p-7">Meus projetos</h1>
          </div>
          <div className="flex flex-col border-b-[1] border-dark4">
            <span className="text-dark6 text-sm pl-7 pt-7">@Samuel • Ontem</span>
            <a
              href="https://github.com/Samueu/my-portfolio"
              className="pl-7 pb-7 text-white text-xl"
            >
              Minha landing page
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
