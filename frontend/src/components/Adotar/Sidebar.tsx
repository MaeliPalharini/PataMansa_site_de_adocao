import Checkbox from "@/ui/checkbox";
import React from "react";
import {BsFillFilterCircleFill} from "react-icons/bs";
import {IoIosCloseCircleOutline} from "react-icons/io";

const Sidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const filter = (category: string, value: string, name: string) => {
    return (
      <Checkbox
        intent="first"
        name={category}
        value={value}
        displayName={name}
      />
    );
  };

  const filterBar = (
    <>
      <h2 className="text-4xl my-4 text-[var(--light-yellow)]">Filtros</h2>
      <div className="flex flex-col gap-2 w-full">
        <p className="font-semibold text-left">Tamanho</p>
        <div className="flex flex-col gap-1 items-start">
          {filter("size", "small", "pequeno")}
          {filter("size", "medium", "medio")}
          {filter("size", "large", "grande")}
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <p className="font-semibold text-left">Idade</p>
        <div className="flex flex-col gap-1 items-start">
          {filter("age", "under1", "menos de 1 ano")}
          {filter("age", "1to5", "entre 1 a 5 anos")}
          {filter("age", "over5", "mais de 5 anos")}
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="hidden md:flex bg-[var(--brown)] min-w-[200px] flex-col p-4 gap-6 justify-start ">
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

      {isOpen && (
        <div
          className="bg-[var(--brown)] w-full max-w-[200px] p-4 max-h-[500px] absolute left-0 z-20 h-full max-[448px]:min-w-full "
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
      )}
    </>
  );
};

export default Sidebar;
