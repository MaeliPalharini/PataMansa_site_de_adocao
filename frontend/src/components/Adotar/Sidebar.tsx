"use client";

import Checkbox from "@/ui/checkbox";
import React from "react";
import {BsFillFilterCircleFill} from "react-icons/bs";
import {IoIosCloseCircleOutline} from "react-icons/io";
import {Filters} from "@/types/slides";

export interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  setIsOpen,
  filters,
  setFilters,
}) => {
  const toggleFilter = (category: keyof Filters, value: string) => {
    setFilters((prev) => {
      const categoryValues = prev[category] ?? [];
      const alreadySelected = categoryValues.includes(value);
      return {
        ...prev,
        [category]: alreadySelected
          ? categoryValues.filter((v) => v !== value)
          : [...categoryValues, value],
      };
    });
  };

  const filter = (category: keyof Filters, value: string, name: string) => {
    const isChecked = filters[category]?.includes(value) ?? false;

    return (
      <Checkbox
        intent="first"
        name={category}
        value={value}
        displayName={name}
        checked={isChecked}
        onChange={() => toggleFilter(category, value)}
      />
    );
  };

  const filterBar = (
    <>
      <h2 className="text-4xl my-4 text-[var(--light-yellow)]">Filtros</h2>

      <div className="flex flex-col gap-2 w-full">
        <p className="font-semibold text-left">Tamanho</p>
        <div className="flex flex-col gap-1 items-start">
          {filter("size", "pequeno", "Pequeno")}
          {filter("size", "médio", "Médio")}
          {filter("size", "grande", "Grande")}
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <p className="font-semibold text-left">Idade</p>
        <div className="flex flex-col gap-1 items-start">
          {filter("age", "menos1", "Menos de 1 ano")}
          {filter("age", "1a5", "Entre 1 a 5 anos")}
          {filter("age", "mais5", "Mais de 5 anos")}
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="hidden md:flex bg-[var(--brown)] min-w-[200px] flex-col p-4 gap-6 justify-start">
        {filterBar}
      </div>

      <div className="block md:hidden p-4 absolute left-0">
        <button onClick={() => setIsOpen(!isOpen)}>
          <BsFillFilterCircleFill
            size={35}
            className="text-[var(--brown)] hover:brightness-125 cursor-pointer"
          />
        </button>
      </div>

      <div
        className={`bg-[var(--brown)] w-full max-w-[200px] p-4 max-h-[500px] absolute left-0 z-20 h-full max-[448px]:min-w-full transition duration-250 ease-in-out ${
          isOpen
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 -translate-x-full pointer-events-none"
        } `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full relative flex justify-start max-[448px]:items-center gap-6 flex-col">
          <IoIosCloseCircleOutline
            onClick={() => setIsOpen(false)}
            className="absolute hover:brightness-125 cursor-pointer right-0 text-[var(--light-yellow)] top-0"
            size={28}
          />
          {filterBar}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
