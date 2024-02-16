import Image from "next/image";

export default function Button(props: {
  text: string;
  scr: string;
  action: () => void;
}) {
  return (
    <div className="w-1/3 flex flex-col items-center px-1">
      <div
        className="bg-orange-800 select-none p-4 w-fit h-fit cursor-pointer rounded-full text-center text-white uppercase"
        onClick={props.action}
      >
        <Image
          src={props.scr}
          width={48}
          height={48}
          color="#ffffff"
          alt="moana"
          className="select-none max-w-md"
        />
      </div>
      <div className="text-center text-orange-800 my-2"> {props.text}</div>
    </div>
  );
}
