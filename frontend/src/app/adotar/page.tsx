"use client";
import Sidebar from "@/components/Adotar/Sidebar";
import SimpleSlider from "@/components/Adotar/Slides";
import ProtectedRoute from "@/components/ProtectedRoute";
import Image from "next/image";
import React, {useState} from "react";

const Adotar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex justify-center py-20 flex-col items-center relative bg-[var(--light-yellow)] ">
        <div className="max-w-[1000px] w-full relative justify-center flex items-center flex-col">
          <h2 className="mb-10 max-[400px]:text-wrap h-[75px] text-center max-[500px]:text-5xl max-[600px]:text-6xl min-[600px]:text-7xl font-extrabold text-nowrap max-[800px]:-translate-y-[65%] tracking-wide text-[var(--brown)]">
            Seu pet.
          </h2>{" "}
          <Image
            src="/lyingcat.png"
            width={200}
            height={200}
            className="w-[200px] h-auto absolute right-0 top-8 -translate-x-[10%]"
            alt=""
          />
          <div
            className="w-full rounded-lg overflow-hidden bg-[var(--light-brown)]/50 h-full flex justify-center"
            onClick={() => isOpen && setIsOpen(false)}
          >
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <SimpleSlider />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Adotar;
