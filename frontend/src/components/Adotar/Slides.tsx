"use client";
import {usePetInfo} from "@/hooks/api/pet/usePetInfo";
import Button from "@/ui/button";
import Image from "next/image";
import Link from "next/link";
import {useCallback, useMemo, useState} from "react";
import Sidebar from "./Sidebar";
import {motion} from "framer-motion";
import {PetInfos} from "@/types/pet";
import {Filters} from "@/types/slides";
import {isValidUrl} from "@/utils/isValidUrl";

export default function SimpleSlider() {
  const {data: pets, isLoading, error} = usePetInfo();
  const [filters, setFilters] = useState<Filters>({});
  const [isOpen, setIsOpen] = useState(false);

  const applyFilters = useCallback(
    (pet: PetInfos) => {
      const hasSizeFilter =
        filters.size !== undefined && filters.size.length > 0;
      const hasAgeFilter = filters.age !== undefined && filters.age.length > 0;

      if (!hasSizeFilter && !hasAgeFilter) return true;

      const sizeMatch = !hasSizeFilter || filters.size?.includes(pet.porte);

      let ageMatch = true;
      if (hasAgeFilter && filters.age) {
        ageMatch = filters.age.some((ageFilter) => {
          const idade = pet.idade;
          if (ageFilter === "menos1") return idade < 1;
          if (ageFilter === "1a5") return idade >= 1 && idade <= 5;
          if (ageFilter === "mais5") return idade > 5;
          return false;
        });
      }

      return sizeMatch && ageMatch;
    },
    [filters]
  );

  const filteredPets = useMemo(() => {
    return pets
      ?.filter((pet: PetInfos) => pet.status?.toLowerCase() === "disponivel")
      ?.filter(applyFilters);
  }, [pets, applyFilters]);

  return (
    <motion.section
      initial={{y: -100, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 0.5}}
      className="w-full rounded-lg overflow-hidden bg-[var(--light-brown)]/50 h-full flex justify-center"
      onClick={() => isOpen && setIsOpen(false)}
    >
      <div className="flex w-full">
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          filters={filters}
          setFilters={setFilters}
        />

        <div className="w-full max-w-[1000px] min-h-[520px] max-h-[520px] py-20 max-[800px]:px-2 flex justify-center items-center">
          <div className="overflow-y-auto h-full flex justify-center scroll-container ">
            <div className="flex flex-wrap items-center justify-center">
              <div className="text-[var(--brown)] text-2xl font-bold">
                {isLoading && <span>Carregando pets...</span>}
                {error && <span>Erro ao carregar pets.</span>}
                {!isLoading && !error && filteredPets?.length === 0 && (
                  <span>Nenhum pet encontrado.</span>
                )}
              </div>

              {!isLoading &&
                !error &&
                filteredPets?.map((item: PetInfos, index: number) => (
                  <motion.div
                    initial={{y: 50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    exit={{opacity: 0, y: 20}}
                    transition={{delay: index * 0.05}}
                    key={index}
                    className="bg-[var(--light-yellow)] h-[340px] w-[200px] flex flex-col justify-center items-center shadow rounded overflow-hidden m-2"
                  >
                    <div className="relative h-[65%] w-full">
                      <Image
                        src={
                          isValidUrl(item.fotoUrl)
                            ? item.fotoUrl!
                            : "/defaultdog.png"
                        }
                        alt={`Foto do ${item.nome}`}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="text-center text-[var(--brown)] flex flex-col gap-y-1 justify-between items-center h-[55%] py-4">
                      <h3 className="text-xl text-[var(--dark-yellow)] font-semibold">
                        {item.nome}
                      </h3>
                      <p>Raça: {item.raca}</p>
                      <p>Idade: {item.idade}</p>
                      <p>Porte: {item.porte}</p>
                      <Link href={`/adotar/detalhes/${item.id}`}>
                        <Button intent="fourth" className="text-sm font-bold">
                          Ver detalhes
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
