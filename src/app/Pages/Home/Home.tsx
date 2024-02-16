"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Home = () => {
  const router = useRouter();
  const [isRendered, setIsRendered] = useState(false);

  let img = (
    <Image
      src="/praia.jpg"
      width={100}
      height={100}
      priority={true}
      onLoad={() => {
        setIsRendered(true);
      }}
      style={{ width: "100%", height: "100%" }}
      alt="moana"
      className="select-none overflow-hidden object-cover"
    />
  );

  const navigateToSaveTheDate = () => {
    console.log("SaveTheDate");
    router.push("SaveTheDate");
  };

  return (
    <div className="bg-transparent h-screen flex flex-col justify-between overflow-hidden">
      <div className="h-screen w-screen lg:h-0 visible lg:invisible -z-10 absolute flex flex-row items-center justify-center overflow-clip">
        {img}
      </div>
      <div className="flex h-screen flex-col items-center justify-around ">
        <div className="w-2/3 text-center text-cyan-900 text-2xl font-bold">
          <motion.div
            initial={{ scale: 1, x: -50, opacity: 0 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              ease: "easeIn",
              duration: 0.8,
            }}
          >
            O Oceano está chamando para uma grande aventura
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 1, x: -50, opacity: 0 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            ease: "easeIn",
            duration: 0.8,
            delay: 0.8,
          }}
          className="w-full flex flex-col items-center"
        >
          <div className="w-3/4 pt-4 flex flex-col items-center">
            <Image
              src="/MARIACECILIA.png"
              width={100}
              height={100}
              priority={true}
              style={{ width: "100%", height: "auto" }}
              alt="moana"
              className="select-none max-w-md"
            />
            <div className="text-center text-cyan-900  text-4xl font-semibold pt-4">
              Faz 2 Anos
            </div>
            <div
              className="bg-[#613613] hover:bg-[#613613]/80 select-none max-w-48 cursor-pointer py-2 my-4 w-1/2 self-center p-2 rounded-xl text-center text-white font-light text-xl shadow-[4px_10px_10px_0px_#00000010] shadow-black/40"
              onClick={navigateToSaveTheDate}
            >
              Vem ver
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 1, y: 50, opacity: 0 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            ease: "easeIn",
            duration: 0.8,
            delay: 1,
          }}
        >
          <Image
            src="/baby1.png"
            width={100}
            height={100}
            priority={true}
            style={{
              width: "auto",
              height: "100%",
              maxHeight: "350px",
              minWidth: "250px",
            }}
            alt="moana"
            className="select-none pt-2 align-middle "
          />
        </motion.div>
      </div>

      <div className="max-h-48 w-screen flex flex-col items-center justify-center"></div>
    </div>
  );
};
