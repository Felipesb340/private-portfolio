export function SideColumn() {
  return (
    <>
      <div className="flex flex-col mr-10 border-l-[0.5] border-dark4">
        <div className="">
          <input
            type="text"
            placeholder="Procurar"
            className="w-80 h-10 pl-7 m-7 bg-dark3 rounded-full text-white focus:outline-none"
          />
        </div>
        <div className="m-7 w-80 h-[457] bg-dark3 rounded-2xl p-7">
          <h1 className="text-white text-2xl">Meus projetos</h1>
        </div>
      </div>
    </>
  );
}
