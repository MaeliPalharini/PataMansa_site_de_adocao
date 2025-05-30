"use client";
import {useScaleIn} from "@/hooks/ui/useScaleIn";
import Button from "@/ui/button";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {FcGoogle} from "react-icons/fc";

export default function AuthLayout({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "login" | "signup";
}) {
  const scaleIn = useScaleIn();
  return (
    <div className="w-full min-h-screen bg-[var(--brown-fosco)] h-full flex overflow-x-hidden justify-center items-center">
      <section className="relative flex items-center justify-center min-h-[630px] h-full max-w-[1150px] w-full">
        <div className="w-[400px] h-[400px] -translate-y-10 flex justify-center items-center absolute left-2">
          <Image
            src="/login.png"
            width={800}
            height={800}
            alt="w-full h-full"
          />
        </div>
        <div className="w-[300px] h-[300px] flex justify-center items-center absolute translate-x-10 right-0 translate-y-10">
          <Image
            src="/signup.png"
            width={800}
            height={800}
            alt="w-full h-full "
          />
        </div>

        <div className="min-[500px]:max-w-[400px] w-full flex justify-center items-center">
          <motion.div
            ref={scaleIn.ref}
            {...scaleIn.animationProps}
            className="w-full flex max-[500px]:min-h-screen flex-col gap-4 justify-center items-center backdrop-blur-[1px] px-2 py-6 backdrop-brightness-80 bg-[var(--light-brown)]/50 backdrop-saturate-150 min-[500px]:rounded-3xl shadow-lg"
          >
            <h2 className="text-white text-3xl font-semibold py-4">
              {type === "login" ? "Bem-vindo de volta!" : "Crie sua conta"}
            </h2>
            {children}
            <Button intent={"secondVar"}>
              {type === "login" ? "Entrar" : "Cadastrar"}
            </Button>
            <p className="font-semibold text-white">Ou</p>
            <Button
              intent={"secondVar"}
              className="flex gap-3 justify-center items-center"
            >
              <FcGoogle className="w-6 h-6" />
              {type === "login"
                ? "Entrar com Google"
                : "Cadastre-se com Google"}
            </Button>
            <p className="text-center text-sm ">
              {type === "login" ? "Ainda não tem conta?" : "Já tem uma conta?"}{" "}
              <Link
                scroll={false}
                href={type === "login" ? "/signup" : "/login"}
                className="text-[var(--light-yellow)] underline hover:brightness-150 transition-colors duration-100 ease-in-out"
              >
                {type === "login" ? "Cadastre-se" : "Entrar"}
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
