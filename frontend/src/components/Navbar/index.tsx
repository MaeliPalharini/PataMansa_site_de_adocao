"use client";

import AuthSwitch from "@/hooks/api/authSwitch";
import Link from "next/link";
import React from "react";
import {MdLogout} from "react-icons/md";

const Navbar = () => {
  const links = [
    {name: "Home", href: "/"},
    {name: "Sobre nós", href: "/sobre"},
  ];

  const authLinks = [
    {name: "Cadastre-se", href: "/signup"},
    {name: "Entrar", href: "/login"},
  ];

  return (
    <nav className="w-full absolute top-0 z-10 bg-[var(--brown)] h-[50px] flex justify-center">
      <ul className="flex w-full max-w-[90%] h-full items-center">
        <Link className="mr-auto" href="/">
          Logo
        </Link>

        <div className="max-[600px]:hidden text-[var(--gray)] uppercase font-semibold text-sm flex gap-5 items-center">
          {links.map((link, index) => (
            <li className="hover:brightness-150" key={index}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}

          <AuthSwitch
            fallback={authLinks.map((link, index) => (
              <li className="hover:brightness-150" key={index}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          >
            <li>
              <MdLogout
                className="text-[var(--yellow)] cursor-pointer hover:brightness-150 uppercase font-semibold"
                size={25}
              />
            </li>
          </AuthSwitch>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
