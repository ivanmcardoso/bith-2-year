import Image from "next/image";

export default function Button(props: {
  text: string;
  scr: string;
  action: () => void;
}) {
  return (
    <div className="w-1/4">
      <div
        className="bg-orange-800 select-none p-4 w-fit h-fit cursor-pointer rounded-full text-center text-white uppercase"
        onClick={props.action}
      >
        <Image
          src={props.scr}
          width={64}
          height={64}
          color="#ffffff"
          alt="moana"
          className="select-none max-w-md"
        />
      </div>
      <div className="text-center my-2"> {props.text}</div>
    </div>
  );
}
