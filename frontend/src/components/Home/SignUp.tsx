"use client";
import {useFadeIn} from "@/hooks/ui/useFadeIn";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  const fadeIn = [
    useFadeIn(),
    useFadeIn(),
    useFadeIn(),
    useFadeIn(),
    useFadeIn(),
    useFadeIn(),
  ];

  return (
    <section className="items-center flex justify-center min-h-screen w-full bg-[var(--brown)] ">
      <div className="max-w-[1200px] flex w-full min-h-screen min-[1050px]:justify-center items-center relative max-[1050px]:justify-between max-[1050px] max-[1050px]:flex-col">
        <div className="flex max-w-[400px] items-center justify-center">
          <div className="flex flex-col w-full max-[1050px]:items-center min-[1050px]:items-start justify-center max-[1050px]:text-center gap-y-8">
            <motion.h2
              ref={fadeIn[0].ref}
              {...fadeIn[0].animationProps}
              className="max-[1050px]:mt-32 max-[400px]:text-4xl min-[400px]:text-6xl font-extrabold text-center text-[var(--light-yellow)]"
            >
              Interessado?
            </motion.h2>
            <Link href={"/signup"}>
              <motion.h3
                ref={fadeIn[1].ref}
                {...fadeIn[1].animationProps}
                className="font-bold text-2xl text-[var(--light-yellow)]/75 underline hover:brightness-150"
              >
                Cadastre-se!
              </motion.h3>
            </Link>
            <motion.p
              ref={fadeIn[2].ref}
              {...fadeIn[2].animationProps}
              className="max-w-[300px] w-full"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, quasi autem? Eveniet delectus exercitationem vel
              veritatis maiores a, qui architecto sequi perferendis quasi quam
              ratione magni eum excepturi sit ullam.
            </motion.p>
          </div>
        </div>

        <div
          className="flex max-[1050px]:w-full min-[1050px]:w-[50%]  
        items-center h-full justify-center"
        >
          <div className="flex justify-center relative items-center w-full flex-col min-h-[650px]">
            <div className="w-full flex justify-center items-center absolute translate-y-2 max-[1050px]:translate-y-[8%]">
              <Image
                width={800}
                height={800}
                alt=""
                className="object-cover min-w-[450px] max-w-[450px]"
                src="/whitefloor.png"
              />
            </div>

            <div className="z-20 w-full h-full flex flex-col gap-y-6 justify-center items-center text-center ">
              <motion.h2
                ref={fadeIn[3].ref}
                {...fadeIn[3].animationProps}
                className="max-[1050px]:mt-32 text-3xl font-extrabold text-[var(--brown)]"
              >
                Já tem uma conta?
              </motion.h2>
              <Link href={"/login"}>
                <motion.h3
                  ref={fadeIn[4].ref}
                  {...fadeIn[4].animationProps}
                  className="font-bold text-2xl text-[var(--brown)]/75 underline hover:brightness-150"
                >
                  Entre e veja nossos pets!
                </motion.h3>
              </Link>
              <motion.p
                ref={fadeIn[5].ref}
                {...fadeIn[5].animationProps}
                className="max-w-[300px] text-[var(--light-brown)] w-full"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, quasi autem? Eveniet delectus exercitationem vel
                veritatis maiores a, qui architecto sequi perferendis quasi quam
                ratione magni eum excepturi sit ullam.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
