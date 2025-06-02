import {usePetInfo} from "@/hooks/api/usePetInfo";
import Button from "@/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function SimpleSlider() {
  const {data: pets, isLoading, error} = usePetInfo();

  return (
    <div className="w-full max-w-[1000px] min-h-[500px] max-h-[500px] py-20 max-[800px]:px-2 flex justify-center items-center">
      <div className="overflow-y-auto h-full flex justify-center scroll-container">
        <div className="flex flex-wrap gap-5 w-full items-center justify-center">
          <div className="text-[var(--brown)] text-2xl font-bold">
            {isLoading && (
              <span className="text-center mt-10">Carregando pets...</span>
            )}
            {error && (
              <span className="text-center mt-10">Erro ao carregar pets.</span>
            )}
            {!isLoading && !error && pets?.length === 0 && (
              <span className="text-center mt-10">Nenhum pet encontrado.</span>
            )}
          </div>

          {!isLoading &&
            !error &&
            pets?.map((item: any, index: number) => (
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
  );
}
