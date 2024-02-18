"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "./Components/Button";

export const SaveTheDate = () => {
  const router = useRouter();

  const navigateToInfo = () => {
    router.push("Info");
  };

  const navigateToLocation = () => {
    router.push("https://maps.app.goo.gl/gwfJHbpjAnbSbWYa6");
  };

  const navigateToConfirm = () => {
    router.push(
      "https://wa.me/559291041975?text=Gostaria%20de%20confirmar%20minha%20presen%C3%A7a%20na%20festa%20da%20Maria%20Cec%C3%ADlia."
    );
  };

  return (
    <div className="bg-transparent h-screen flex flex-col items-center justify-between">
      <div className="h-screen md:h-0 visible md:invisible -z-10 absolute flex flex-row items-center justify-center overflow-clip">
        <Image
          src="/praia.jpg"
          width={100}
          height={100}
          priority={true}
          style={{ width: "100%", height: "100%" }}
          alt="moana"
          className="select-none overflow-hidden object-cover"
        />
      </div>
      <Image
        src="/sol.gif"
        width={100}
        height={100}
        style={{ width: "auto", height: "120px" }}
        alt="moana"
        className="select-none my-4"
      />
      <div className="w-screen flex flex-col items-center">
        <div className="text-center text-cyan-900 text-3xl font-bold mb-3">
          Embarque Comigo!
        </div>
        <Image
          src="/horarios.png"
          width={100}
          height={100}
          priority={true}
          style={{ width: "80%", height: "auto" }}
          alt="moana"
          className="select-none "
        />
      </div>
      <div className="h-1/3 flex flex-row items-end">
        <Image
          src="/baby2.png"
          width={100}
          height={100}
          priority={true}
          style={{
            width: "auto",
            height: "80%",
            maxHeight: "350px",
          }}
          alt="moana"
          className="select-none w-1/3 flex-1"
        />
        <div className="h-full w-2/3 flex  flex-col items-center justify-center px-4 mb-2 ">
          <div className="w-full flex flex-row justify-around">
            <Button
              text="Localização"
              scr="/map.svg"
              action={navigateToLocation}
            />
            <Button text="Sugestões" scr="/gift.svg" action={navigateToInfo} />
          </div>
          <div
            className="bg-orange-800 font-medium hover:bg-orange-800/80 select-none w-full cursor-pointer py-2 my-4  self-center px-4 rounded-xl text-center text-white text-sm shadow-[4px_10px_10px_0px_#00000010] shadow-black/40"
            onClick={navigateToConfirm}
          >
            Confirmar Presença
          </div>
        </div>
      </div>
    </div>
  );
};
