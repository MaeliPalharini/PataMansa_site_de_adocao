"use client";

import AuthSwitch from "@/hooks/api/useAuthSwitch";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {MdLogout} from "react-icons/md";
import {HiMenuAlt3} from "react-icons/hi";
import {IoCloseSharp} from "react-icons/io5";
import {useLogout} from "@/hooks/api/useLogout";

const Navbar = () => {
  const {mutate: logout} = useLogout();

  const links = [
    {name: "Home", href: "/"},
    {name: "Sobre nós", href: "/sobre"},
  ];

  const authLinks = [
    {name: "Cadastre-se", href: "/signup"},
    {name: "Entrar", href: "/login"},
  ];

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("body-no-scroll", isOpen);
    return () => document.body.classList.remove("body-no-scroll");
  }, [isOpen]);

  return (
    <nav className="w-full absolute top-0 z-50 bg-[var(--brown)] h-[50px] flex justify-center">
      <ul className="flex w-full max-w-[90%] h-full items-center">
        <Link className="mr-auto text-white font-bold tracking-wide" href="/">
          Logo
        </Link>

        <div className="text-[var(--gray)] uppercase font-semibold text-sm flex gap-5 items-center">
          <div className="flex gap-5 max-[600px]:hidden">
            {links.map((link, index) => (
              <li className="hover:brightness-150" key={index}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </div>

          <AuthSwitch
            fallback={authLinks.map((link, index) => (
              <li className="hover:brightness-150" key={index}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          >
            <li
              className="flex text-[var(--yellow)] justify-center items-center gap-1"
              onClick={() => logout()}
            >
              <span>Sair</span>
              <MdLogout
                className=" cursor-pointer hover:brightness-150"
                size={20}
              />
            </li>
          </AuthSwitch>

          {isOpen ? (
            <IoCloseSharp
              size={30}
              className="cursor-pointer z-50 min-[600px]:hidden text-white"
              onClick={() => setIsOpen((prev) => !prev)}
            />
          ) : (
            <HiMenuAlt3
              size={30}
              className="cursor-pointer z-50 min-[600px]:hidden text-white"
              onClick={() => setIsOpen((prev) => !prev)}
            />
          )}
        </div>
      </ul>

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-200 z-40 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed top-0 right-0 w-[75%] max-w-[250px] h-auto mt-[50px] bg-[var(--brown)] z-50 shadow-lg transform transition-transform duration-300 ease-in-out min-[600px]:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col text-white/90 py-6 px-4 gap-3">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-3 border-b border-[var(--gray)]/30 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
