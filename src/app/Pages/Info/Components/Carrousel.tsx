import { Carousel as RCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

export default function Carousel(props: { items: string[]; names: string[] }) {
  const { items, names } = props;

  return (
    <div>
      <div className="w-full px-6 text-cyan-900 text-2xl font-bold select-none">
        Meus personagens favoritos são:
      </div>
      <RCarousel
        interval={3000}
        showArrows
        showIndicators={false}
        infiniteLoop
        showThumbs={false}
        dynamicHeight={false}
        showStatus={false}
        centerMode
        autoPlay
        className="flex flex-col justify-center items-center w-screen"
      >
        {items.map((item, index) => (
          <div
            key={`card-${index}`}
            className="flex-none 
            shadow-[11px_15px_10px_0px_#00000040] 
            shadow-black/20 
            rounded-2xl 
            w-[280px] 
            h-60 my-4  
            bg-white 
            hover:bg-slate-50 cursor-pointer"
          >
            <Image
              src={item}
              width={120}
              height={180}
              style={{ height: 160, width: "auto" }}
              alt="Application Logo"
              className="select-none my-4"
            />
            <div className="text-cyan-900 text-xl font-bold select-none">
              {names[index]}
            </div>
          </div>
        ))}
      </RCarousel>
    </div>
  );
}
