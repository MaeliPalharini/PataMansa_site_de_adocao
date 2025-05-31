"use client";

import Modal from "@/components/Detalhes/modal";
import {usePetById} from "@/hooks/api/usePetInfo";
import Button from "@/ui/button";
import Image from "next/image";
import React, {useState} from "react";
import {useParams} from "next/navigation";

const Detalhes = () => {
  const params = useParams();
  const id = params.id as string;

  const {data: pet, isLoading, error} = usePetById(id);

  const [isOpen, setIsOpen] = useState(false);

  const span = (title: string, text: string | number) => (
    <p>
      <span className="font-semibold text-[var(--brown)]">{title}</span> {text}
    </p>
  );

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar dados do pet.</p>;
  if (!pet) return <p>Pet não encontrado.</p>;

  return (
    <div className="bg-[var(--light-brown)] flex justify-center items-center min-h-screen px-2 py-20">
      <div className="max-w-[800px] w-full h-full flex justify-center items-center">
        <div className="w-full bg-[var(--light-yellow)] max-[800px]:max-w-[400px] max-[800px]:flex-col flex rounded-lg overflow-x-hidden">
          <div className="w-full min-[800px]:w-[40%] max-[800px]:h-[400px]  md:h-auto relative">
            <Image
              src={pet.imageUrl ?? "/defaultdog.png"}
              alt={`Foto do ${pet.name}`}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-[var(--light-brown)] flex justify-between py-6 gap-2 min-[800px]:w-[60%] items-center flex-col">
            <h2 className="text-4xl text-[var(--dark-yellow)]">{pet.name}</h2>
            <div className="flex flex-col justify-center items-start gap-2 w-[70%]">
              {span("Raça", pet.breed)}
              {span("Idade", pet.age)}
              {span("Localização:", pet.location)}
              {span("Descrição", pet.description)}
            </div>
            <Button
              onClick={() => setIsOpen(true)}
              className="mt-5"
              intent={"fourth"}
            >
              Iniciar adoção
            </Button>

            {isOpen && <Modal setIsOpen={setIsOpen} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalhes;
