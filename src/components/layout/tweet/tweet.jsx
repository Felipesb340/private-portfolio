import { Image, ImagePlay, ImagePlus, Images } from "lucide-react";

export function Tweet() {
  return (
    <div className="border-b-[0.5] border-dark4 ">
      <div className="flex p-7">
        <img
          src="https://github.com/Samueu.png"
          alt="Foto de perfil"
          width={49}
          height={49}
          className="rounded-full"
        />
        <input
          type="text"
          placeholder="What's happening?"
          className="rounded-4xl text-white focus:outline-none pl-2.5 "
        />
      </div>
      <div>
        <div className="flex pl-22 ">
          <Image className="text-primary-blue" />
          <Images className="text-primary-blue" />
          <ImagePlus className="text-primary-blue" />
          <ImagePlay className="text-primary-blue" />
        </div>
        <div className="pl-7 pr-7 flex justify-end ">
          <button className="cursor-pointer px-5 py-2 mb-7 rounded-full text-white bg-primary-blue">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
