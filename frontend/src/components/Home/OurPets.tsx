"use client";
import {usePetInfo} from "@/hooks/api/usePetInfo";
import {useFadeIn} from "@/hooks/ui/useFadeIn";
import Button from "@/ui/button";
import {motion} from "framer-motion";
import Image from "next/image";
import React from "react";

const OurPets = () => {
  const fadeIn = [useFadeIn(), useFadeIn(), useFadeIn(), useFadeIn()];
  const {data: pets, isLoading, isError} = usePetInfo();

  const petIntents: ("fourth" | "secondVar" | "third")[] = [
    "fourth",
    "secondVar",
    "third",
  ];

  const bgColors = [
    "bg-[var(--dark-yellow)]",
    "bg-[var(--brown)]",
    "bg-[var(--dark-yellow)]",
  ];

  const renderPet = (index: number) => {
    const fade = fadeIn[index + 1];
    const pet = pets?.[index];
    const hasError = !pet && isError;

    const name = isLoading
      ? "Carregando..."
      : hasError
      ? "Sem resultados"
      : pet?.nome ?? "Sem nome";

    const picture =
      isLoading || hasError ? null : pet?.fotoUrl ?? "/defaultdog.png";

    return (
      <motion.div
        key={pet?.id ?? index}
        ref={fade.ref}
        {...fade.animationProps}
        className="flex justify-center items-center flex-col gap-6"
      >
        <div
          className={`${bgColors[index]} rounded-full items-center justify-center flex flex-col gap-y-5 w-[250px] h-[250px] overflow-hidden`}
        >
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
              ...
            </div>
          ) : hasError ? (
            <div className="w-full h-full flex items-center justify-center text-white text-center px-4 font-semibold">
              Não encontrado
            </div>
          ) : (
            <Image
              src={picture}
              width={800}
              height={800}
              className="w-full h-full object-cover rounded-full"
              alt={name}
            />
          )}
        </div>
        <Button intent={petIntents[index]}>{name}</Button>
      </motion.div>
    );
  };

  return (
    <section className="items-center py-10 flex justify-center min-h-screen w-full bg-[var(--yellow)]">
      <div className="max-w-[1200px] w-full gap-y-10 flex-col min-h-screen flex justify-evenly items-center relative">
        <motion.h2
          ref={fadeIn[0].ref}
          {...fadeIn[0].animationProps}
          className=" max-[400px]:text-wrap text-center max-[500px]:text-5xl max-[600px]:text-6xl min-[600px]:text-7xl font-extrabold text-nowrap tracking-wide text-[var(--brown)]"
        >
          Nossos Pets
        </motion.h2>

        <div className="flex gap-6 flex-wrap justify-center items-center">
          {[0, 1, 2].map((i) => renderPet(i))}
        </div>
      </div>
    </section>
  );
};

export default OurPets;
