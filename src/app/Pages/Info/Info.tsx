"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Carousel from "./Components/Carrousel";

export const Info = () => {
  const router = useRouter();

  const navigateBack = () => {
    router.back();
  };

  const items = [
    "/peppa1.png",
    "/minnie1.png",
    "/barbie2.png",
    "/moanapng.png",
  ];

  const names = ["Peppa", "Minnie", "Barbie", "Moana"];

  return (
    <div className="bg-transparent h-screen flex flex-col items-center justify-around">
      <div className="h-screen md:h-0 visible md:invisible -z-10 absolute flex flex-row items-center justify-center overflow-clip">
        <Image
          src="/praia.jpg"
          width={100}
          height={100}
          style={{ width: "auto", height: "100%" }}
          alt="moana"
          className="select-none overflow-hidden"
        />
      </div>

      <div className="flex flex-col w-screen h-fit items-center justify-center ">
        <div
          className="bg-orange-800 font-medium hover:bg-orange-800/80 select-none w-1/3 cursor-pointer py-2 my-4  self-center px-4 rounded-xl text-center text-white text-sm shadow-[4px_10px_10px_0px_#00000010] shadow-black/40"
          onClick={navigateBack}
        >
          Voltar
        </div>
        <Carousel items={items} names={names} />
        <Image
          src="/TAMANHOS.png"
          width={100}
          height={100}
          style={{ width: "70%", height: "auto" }}
          alt="moana"
          className="select-none max-w-md"
        />
      </div>
    </div>
  );
};
