"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Info = () => {
  const router = useRouter();

  const navigateBack = () => {
    router.back();
  };

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
        <Image
          src="/PERSONAGENS2.png"
          width={100}
          height={100}
          style={{ width: "70%", height: "auto" }}
          alt="moana"
          className="select-none max-w-md"
        />
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
