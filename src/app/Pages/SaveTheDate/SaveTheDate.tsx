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
          style={{ width: "auto", height: "100%" }}
          alt="moana"
          className="select-none overflow-hidden"
        />
      </div>
      <Image
        src="/head2.png"
        width={100}
        height={100}
        style={{ width: "100%" }}
        alt="moana"
        className="select-none "
      />
      <Image
        src="/horario.png"
        width={100}
        height={100}
        style={{ width: "70%", height: "auto" }}
        alt="moana"
        className="select-none max-w-md"
      />
      <div className="h-1/6  flex flex-row justify-around mb-12">
        <Button
          text="Confirmar presença"
          scr="/whatsapp-icon.svg"
          action={navigateToConfirm}
        />
        <Button text="Localização" scr="/map.svg" action={navigateToLocation} />
        <Button
          text="Sugestões de presente"
          scr="/gift.svg"
          action={navigateToInfo}
        />
      </div>
    </div>
  );
};
