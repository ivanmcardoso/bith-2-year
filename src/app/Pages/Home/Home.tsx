"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Home = () => {
  const router = useRouter();

  const navigateToSaveTheDate = () => {
    router.push("SaveTheDate");
  };

  const navigateToInfo = () => {
    router.push("Info");
  };

  return (
    <div className="bg-transparent h-screen flex flex-col items-center justify-around">
      <div>Monhanha</div>
      <Image
        src="/moana.png"
        width={100}
        height={100}
        style={{ width: "70%", height: "auto" }}
        alt="moana"
        className="select-none max-w-md"
      />
      <div className="h-1/6">
        <div
          className="bg-orange-800 cursor-pointer p-2 rounded-xl text-center text-white uppercase"
          onClick={navigateToSaveTheDate}
        >
          Clique para abrir
        </div>
      </div>
    </div>
  );
};
