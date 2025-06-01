"use client";
import {useFadeIn} from "@/hooks/ui/useFadeIn";
import Typewriter from "@/hooks/ui/useTyping";
import {motion} from "framer-motion";
import React, {ReactNode} from "react";

const SobreNos = () => {
  const fadeIn = [
    useFadeIn(),
    useFadeIn(),
    useFadeIn(),
    useFadeIn(),
    useFadeIn(),
    useFadeIn(),
  ];

  const sobre = (
    name: string[],
    title: string,
    image: ReactNode,
    text: string,
    f: number,
    s: number,
    t: number
  ) => (
    <section className=" flex gap-8 justify-center items-center flex-col">
      <motion.h2
        className=" max-[400px]:text-wrap text-center text-4xl  font-extrabold text-nowrap tracking-wide text-[var(--brown)]"
        ref={fadeIn[f].ref}
        {...fadeIn[f].animationProps}
      >
        {title}
      </motion.h2>

      <div className="flex justify-center items-center w-full gap-6 max-w-[800px] max-[795px]:flex-col max-[795px]: text-center min-[795px]:text-start px-4">
        <motion.div
          className="border-2 shrink-0 border-[var(--brown)] w-[250px] h-[250px] rounded-full flex justify-center items-center"
          ref={fadeIn[s].ref}
          {...fadeIn[s].animationProps}
        >
          {image}
        </motion.div>
        <motion.div
          className="flex flex-col gap-5"
          ref={fadeIn[t].ref}
          {...fadeIn[t].animationProps}
        >
          <Typewriter
            className="text-[var(--brown)] text-2xl font-bold"
            tag="h3"
            phrases={name}
          />
          <div className="max-w-[500px]">
            {text.split("<br>").map((linha, idx) => (
              <p key={idx}>{linha}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-[var(--light-yellow)] text-[var(--brown)] py-[100px]">
      <div className="max-w-[800px] w-full flex justify-center items-center flex-col overflow-hidden py-[50px] gap-20 overflow-x-hidden">
        {sobre(
          [
            `Olá, sou a <span class="text-green-500">Maeli Palharini</span>`,
            `Sou desenvolvedora <span class="text-red-500">Backend.</span>`,
          ],
          "Back-end",
          "",
          "Engenheira e mestra de formação e apaixonada por tecnologia desde criança.  Depois de anos atuando em outra área, decidi seguir meu coração e mergulhar de vez no universo da programação. <br> Trabalho com linguagens como Java, Python e JavaScript e também estou me desenvolvendo com ferramentas como AWS. Estou sempre em busca de aprender mais e criar soluções práticas e inteligentes com código.",
          0,
          1,
          2
        )}

        {sobre(
          [
            `Ola! Eu sou a <span class="text-green-500">Stephanie.</span>`,
            `Sou desenvolvedora <span class="text-red-500">Frontend.</span>`,
          ],
          "Front-end",
          "",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatem aliquid atque ex culpa quod inventore accusantium error reprehenderit nisi quo tempore laboriosam consectetur distinctio hic fugiat, at fuga accusamus eveniet.",
          3,
          4,
          5
        )}
      </div>
    </div>
  );
};

export default SobreNos;
