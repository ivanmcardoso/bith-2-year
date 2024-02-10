"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
    <div className="bg-transparent h-screen flex flex-col items-center justify-around">
      <div>Monhanha</div>
      <Image
        src="/convite.png"
        width={100}
        height={100}
        style={{ width: "70%", height: "auto" }}
        alt="moana"
        className="select-none max-w-md"
      />
      <a
        id="v2VPPXKy6Zcyejik"
        target="_blank"
        rel="noopener"
        href="https://wa.me/559291041975?text=Gostaria%20de%20confirmar%20minha%20presen%C3%A7a%20na%20festa%20da%20Maria%20Cec%C3%ADlia."
      >
        Presença
      </a>
      <a
        id="v2VPPXKy6Zcyejik"
        target="_blank"
        rel="noopener"
        href="https://maps.app.goo.gl/gwfJHbpjAnbSbWYa6"
      >
        Local
      </a>
      <div className="h-1/6  flex flex-row justify-around">
        <div
          className="bg-orange-800 cursor-pointer p-2 rounded-xl text-center text-white uppercase"
          onClick={navigateToConfirm}
        >
          Confirmar presença
        </div>
        <div
          className="bg-orange-800 cursor-pointer p-2 rounded-xl text-center text-white uppercase"
          onClick={navigateToLocation}
        >
          Localização
        </div>
        <div
          className="bg-orange-800 cursor-pointer p-2 rounded-xl text-center text-white uppercase"
          onClick={navigateToInfo}
        >
          Sugestões de presente
        </div>
      </div>
    </div>
  );
};
