import {usePetInfo} from "@/hooks/api/usePetInfo";
import Button from "@/ui/button";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import Sidebar from "./Sidebar";

export default function SimpleSlider() {
  const {data: pets, isLoading, error} = usePetInfo();
  const [filters, setFilters] = useState<{[key: string]: string[]}>({});
  const [isOpen, setIsOpen] = useState(false);

  const applyFilters = (pet: any) => {
    const sizeMatch =
      filters.size?.length === 0 || filters.size?.includes(pet.porte);
    const ageMatch =
      filters.age?.length === 0 || filters.age?.includes(pet.idade);

    return sizeMatch && ageMatch;
  };

  const filteredPets = pets?.filter(applyFilters);

  return (
    <div
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

        <div className="w-full max-w-[1000px] min-h-[500px] max-h-[500px] py-20 max-[800px]:px-2 flex justify-center items-center">
          <div className="overflow-y-auto h-full flex justify-center scroll-container">
            <div className="flex flex-wrap gap-5 w-full items-center justify-center">
              <div className="text-[var(--brown)] text-2xl font-bold">
                {isLoading && <span>Carregando pets...</span>}
                {error && <span>Erro ao carregar pets.</span>}
                {!isLoading && !error && filteredPets?.length === 0 && (
                  <span>Nenhum pet encontrado.</span>
                )}
              </div>

              {!isLoading &&
                !error &&
                filteredPets?.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="bg-[var(--light-yellow)] h-[330px] w-[200px] flex flex-col justify-center items-center shadow rounded overflow-hidden"
                  >
                    <div className="relative h-[65%] w-full">
                      <Image
                        src={item.img ?? "/defaultdog.png"}
                        alt={`Foto do ${item.nome}`}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="text-center text-[var(--brown)] flex flex-col gap-y-1 justify-between items-center h-[55%] py-4">
                      <h3 className="text-xl text-[var(--dark-yellow)] font-semibold">
                        {item.nome}
                      </h3>
                      <p>Raça: {item.descricao}</p>
                      <p>Idade: {item.idade}</p>
                      <Link href={`/adotar/detalhes/${item.id}`}>
                        <Button intent="fourth" className="text-sm font-bold">
                          Ver detalhes
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
