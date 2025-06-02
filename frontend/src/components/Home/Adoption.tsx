"use client";
import React from "react";
import Button from "@/ui/button";
import Image from "next/image";
import {motion} from "framer-motion";
import {useFadeIn} from "@/hooks/ui/useFadeIn";
import Link from "next/link";
import {useScaleIn} from "@/hooks/ui/useScaleIn";

const Adoption = () => {
  const fadeIn = [useFadeIn(), useFadeIn(), useFadeIn()];
  const scaleIn = [useScaleIn(), useScaleIn()];

  return (
    <section className="items-center flex relative justify-center min-h-screen w-full bg-[var(--dark-yellow)] px-4">
      <div className="max-w-[1200px] w-full min-h-screen flex justify-start items-center relative">
        <motion.div
          className="w-fit h-[220px] absolute top-0 right-0 max-[900px]:hidden"
          ref={scaleIn[0].ref}
          {...scaleIn[0].animationProps}
        >
          <Image
            src="/bone.png"
            width={800}
            height={800}
            alt=""
            className="object-contain w-full h-full"
          />
        </motion.div>
        <motion.div
          className="max-w-full w-[400px] absolute h-auto right-0 translate-x-[10%] bottom-0 mb-5"
          ref={scaleIn[1].ref}
          {...scaleIn[1].animationProps}
        >
          <Image
            src="/sofa.png"
            width={1200}
            height={800}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="flex flex-col max-w-[800px] w-full h-full max-[820px]:-translate-y-1/6 items-center">
          <div className="flex flex-col justify-center gap-y-20 h-full w-full">
            <motion.h2
              ref={fadeIn[0].ref}
              {...fadeIn[0].animationProps}
              className=" max-[600px]:text-4xl min-[600px]:text-5xl font-extrabold text-[var(--yellow)]"
            >
              Pet feliz, você presente!
            </motion.h2>
            <motion.p
              ref={fadeIn[1].ref}
              {...fadeIn[1].animationProps}
              className="min-[820px]:w-[75%] max-[820px]:w-full text-white/75"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit harum dolorum asperiores qui fugiat amet, soluta
              odio neque quia eligendi aperiam dignissimos natus nihil, modi
              doloremque deleniti? Blanditiis, temporibus ipsa?
            </motion.p>
            <motion.div
              ref={fadeIn[2].ref}
              {...fadeIn[2].animationProps}
              className="flex gap-6"
            >
              <Link href="/adotar">
                <Button intent={"first"} className="w-[100px]">
                  Adote
                </Button>
              </Link>
              <Link href="/painel">
                <Button
                  intent={"second"}
                  className="w-[150px] px-2 max-[440px]:ml-auto"
                >
                  Seus pets
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adoption;
