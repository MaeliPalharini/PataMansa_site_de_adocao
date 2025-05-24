"use client";
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {useFadeIn} from "@/hooks/ui/useFadeIn";

const Header = () => {
  const fadeIn = useFadeIn();

  return (
    <section className="bg-[var(--light-yellow)] flex min-h-screen justify-center items-center w-full px-4">
      <div className="max-w-[1200px] w-full h-full flex flex-grow max-[1050px]:items-end min-[1050px]:justify-end max-[1050px]:justify-center items-center relative min-h-screen">
        <div className="absolute right-1/2 z-10 w-fit -translate-y-[15%] flex justify-center max-[1050px]:w-full items-center max-[1050px]:right-0 max-[1050px]:h-[100vh] min-[1050px]:h-[135vh] top-0">
          <Image
            width={800}
            src="/start.png"
            className="object-cover z-10 w-auto h-full"
            height={900}
            alt="/"
          ></Image>
        </div>

        <motion.div
          ref={fadeIn.ref}
          {...fadeIn.animationProps}
          className="z-20 max-w-[600px] h-full flex items-center max-[1050px]:justify-end min-[1050px]:justify-center max-[1050px] flex-col w-full pb-16 gap-y-20"
        >
          <h1 className=" max-[400px]:text-wrap text-center max-[500px]:text-5xl max-[600px]:text-6xl min-[600px]:text-7xl font-extrabold text-nowrap tracking-wide text-[var(--brown)]">
            Adopt a Pet.
          </h1>
          <div className=" flex gap-y-8 flex-col max-w-[400px]">
            <h3 className="text-[var(--brown)]/50 text-lg font-semibold">
              provides a happy home
            </h3>
            <p className="text-[var(--gray)]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              incidunt obcaecati assumenda nesciunt quis similique, facere,
              nihil ratione, adipisci quasi ipsam dolorum dicta ab omnis porro
              necessitatibus asperiores corporis numquam.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
